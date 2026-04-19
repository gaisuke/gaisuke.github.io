import { profile } from "@/lib/data";

export default function Nav() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-white/90 backdrop-blur-sm border-b border-zinc-100">
            <div className="max-w-2xl mx-auto h-14 flex items-center justify-between">
                <span className="text-sm font-medium">{profile.name}</span>
                <div className="flex gap-6">
                    {
                        ["experience", "skills", "projects", "contact"].map((s) => (
                            <a key={s} href={`#${s}`} className="text-xs text-zinc-400 hover:text-sinc-900 transition-colors">
                                {s}
                            </a>
                        ))
                    }
                </div>
            </div>
        </nav>
    );
}