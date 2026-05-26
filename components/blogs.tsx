"use client";

import { useEffect, useState } from "react";
import { reflections, profile } from "@/lib/data";

export default function Blogs() {
    const [displayedBlogs, setDisplayedBlogs] = useState<typeof reflections>([]);

    useEffect(() => {
        // Randomly shuffle all articles and take exactly 3
        const shuffled = [...reflections].sort(() => 0.5 - Math.random()).slice(0, 3);
        setDisplayedBlogs(shuffled);
    }, []);

    // Render a transparent height skeleton while hydrating to prevent CLS (Layout Shift)
    if (displayedBlogs.length === 0) {
        return (
            <section id="writing" className="max-w-2xl mx-auto py-12 border-t border-zinc-100">
                <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-8">
                    REFLECTIONS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 opacity-0">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-32" />
                    ))}
                </div>
                <div className="mt-12 h-4 w-48 opacity-0" />
            </section>
        );
    }

    return (
        <section id="writing" className="max-w-2xl mx-auto py-12 border-t border-zinc-100">
            <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-8">
                REFLECTIONS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 transition-opacity duration-500 opacity-100">
                {displayedBlogs.map((reflection) => (
                    <div key={reflection.title} className="group flex flex-col justify-between">
                        <div>
                            <div className="text-xs text-zinc-400 mb-2">
                                {reflection.date}
                            </div>
                            <h3 className="text-sm font-medium text-zinc-700 group-hover:text-zinc-900 transition-colors duration-300 leading-snug mb-2">
                                {reflection.title}
                            </h3>
                            <p className="text-xs text-zinc-500 leading-relaxed mb-3">
                                {reflection.description}
                            </p>
                        </div>
                        <div>
                            <a
                                href={reflection.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors inline-flex items-center gap-1 underline-offset-4 hover:underline"
                            >
                                Read on Medium ↗
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8">
                <a
                    href={`https://${profile.medium}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors underline-offset-4 hover:underline"
                >
                    See all articles on {profile.medium}
                </a>
            </div>
        </section>
    );
}
