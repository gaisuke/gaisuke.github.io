"use client";

import { useEffect, useRef } from "react";

type Day = { date: string; total: number };

export function ActivityGrid({ days }: { days: Day[] }) {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
        }
    }, []);

    const recent = days.slice(-365);
    const max = Math.max(...recent.map((d) => d.total));

    function getIntensity(total: number): string {
        if (total === 0) return "bg-zinc-100";
        const ratio = total / max;
        if (ratio < 0.25) return "bg-zinc-200";
        if (ratio < 0.5) return "bg-zinc-400";
        if (ratio < 0.75) return "bg-zinc-600";
        return "bg-zinc-900";
    }

    function formatHours(seconds: number): string {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        if (h === 0) return `${m}m`;
        return `${h}h ${m}m`;
    }

    // pad from Sunday of the first week
    const firstDate = new Date(recent[0].date);
    const startPadding = firstDate.getDay(); // 0=Sun
    const padded: (Day | null)[] = [
        ...Array(startPadding).fill(null),
        ...recent,
    ];

    // group into weeks
    const weeks: (Day | null)[][] = [];
    for (let i = 0; i < padded.length; i += 7) {
        weeks.push(padded.slice(i, i + 7));
    }

    // month labels: pin to column where 1st of month appears
    const monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthMarkers: { col: number; label: string }[] = [];

    weeks.forEach((week, wi) => {
        const firstDay = week.find((d) => d !== null);
        if (!firstDay) return;
        const date = new Date(firstDay.date);
        const dom = date.getDate();
        const month = date.getMonth();
        const last = monthMarkers[monthMarkers.length - 1];

        if (wi === 0) {
            monthMarkers.push({ col: wi, label: monthLabels[month] });
            return;
        }

        if (dom <= 7 && last?.label !== monthLabels[month]) {
            // only skip if it would overlap with the very first label (col 0)
            const tooCloseToFirst = monthMarkers[0]?.col === 0 && wi < 2;
            if (!tooCloseToFirst) {
                monthMarkers.push({ col: wi, label: monthLabels[month] });
            }
        }
    });

    const CELL = 10;
    const GAP = 2;
    const colWidth = CELL + GAP;

    return (
        <div className="flex gap-2">
            {/* row labels */}
            <div style={{ paddingTop: "18px", display: "flex", flexDirection: "column", gap: `${GAP}px` }}>
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => (
                    <div
                        key={day}
                        style={{ height: `${CELL}px`, fontSize: "9px", lineHeight: `${CELL}px` }}
                        className={`text-zinc-400 ${[1, 3, 5].includes(i) ? "" : "invisible"}`}
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* grid */}
            <div ref={scrollRef} className="overflow-x-auto flex-1">
                <div style={{ display: "inline-block", minWidth: "max-content" }}>
                    {/* month labels */}
                    <div style={{ display: "flex", height: "16px", marginBottom: "8px" }}>
                        {weeks.map((_, wi) => {
                            const marker = monthMarkers.find((m) => m.col === wi);
                            return (
                                <div key={wi} style={{ width: `${colWidth}px`, flexShrink: 0 }}>
                                    {marker && (
                                        <span style={{ fontSize: "10px" }} className="text-zinc-400">
                                            {marker.label}
                                        </span>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* cells */}
                    <div style={{ display: "flex" }}>
                        {weeks.map((week, wi) => (
                            <div key={wi} style={{ display: "flex", flexDirection: "column", marginRight: `${GAP}px` }}>
                                {week.map((day, di) => (
                                    <div
                                        key={di}
                                        title={day ? `${day.date}: ${formatHours(day.total)}` : ""}
                                        className={`rounded-[2px] ${day ? getIntensity(day.total) : "bg-transparent"}`}
                                        style={{ width: `${CELL}px`, height: `${CELL}px`, marginBottom: `${GAP}px` }}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
                {/* legend */}
                <div className="flex items-center justify-end gap-1 mt-2">
                    <span className="text-zinc-400" style={{ fontSize: "10px" }}>Less</span>
                    {["bg-zinc-100", "bg-zinc-200", "bg-zinc-400", "bg-zinc-600", "bg-zinc-900"].map((c) => (
                        <div key={c} className={`rounded-[2px] ${c}`} style={{ width: "10px", height: "10px" }} />
                    ))}
                    <span className="text-zinc-400" style={{ fontSize: "10px" }}>More</span>
                </div>
            </div>
        </div>
    );
}