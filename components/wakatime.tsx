import { ActivityGrid } from "@/components/activity-grid";

type Language = { name: string; percent: number; text: string };
type Day = { date: string; total: number };

async function getWakaData() {
    try {
        const [langsRes, activityRes] = await Promise.all([
            fetch("https://wakatime.com/share/@gaisuke/ec607f20-d4b7-491b-b9d6-f3c771b1d1e7.json", {
                next: { revalidate: 3600 },
            }),
            fetch("https://wakatime.com/share/@gaisuke/dd3c0e73-82e5-458a-a80b-c1f7487bd6dc.json", {
                next: { revalidate: 3600 },
            }),
        ]);

        const langs = await langsRes.json();
        const activity = await activityRes.json();

        return { langs: langs.data, activity: activity.days };
    } catch (e) {
        console.error("WakaTime fetch failed:", e);
        return null;
    }
}

export default async function Wakatime() {
    const data = await getWakaData();
    if (!data) return null;

    const { langs, activity } = data;
    const top = (langs as Language[])?.slice(0, 6) ?? [];

    return (
        <section className="max-w-2xl mx-auto py-12 border-t border-zinc-100">
            <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-8">
                Coding Activity
            </h2>

            {/* activity grid */}
            {activity && <ActivityGrid days={activity} />}

            {/* language bars */}
            {top.length > 0 && (
                <div className="space-y-3 mt-8">
                    {top.map((lang: Language) => (
                        <div key={lang.name}>
                            <div className="flex justify-between mb-1.5">
                                <span className="text-xs text-zinc-500">{lang.name}</span>
                                <span className="text-xs text-zinc-400">{lang.text}</span>
                            </div>
                            <div className="h-px bg-zinc-100">
                                <div
                                    className="h-px bg-zinc-400 transition-all duration-500"
                                    style={{ width: `${lang.percent}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <p className="text-xs text-zinc-300 mt-6">powered by wakatime</p>
        </section>
    );
}