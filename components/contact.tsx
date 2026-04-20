import { profile } from "@/lib/data";

export default function Contact() {
    return (
        <section id="contact" className="max-w-2xl mx-auto py-12 border-t border-zinc-100">
            <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-8">
                Contact
            </h2>
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-400">Email</span>
                    <a
                        href={`mailto:${profile.email}`}
                        className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                    >
                        {profile.email}
                    </a>
                </div>
                <div className="flex items-center justify-between border-t border-zinc-100 pt-3">
                    <span className="text-xs text-zinc-400">GitHub</span>
                    <a
                        href={`https://${profile.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                    >
                        {profile.github}
                    </a>
                </div>
                <div className="flex items-center justify-between border-t border-zinc-100 pt-3">
                    <span className="text-xs text-zinc-400">WakaTime</span>
                    <a
                        href={`https://${profile.wakatime}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                    >
                        {profile.wakatime}
                    </a>
                </div>
                <div className="flex items-center justify-between border-t border-zinc-100 pt-3">
                    <span className="text-xs text-zinc-400">Medium</span>
                    <a
                        href={`https://${profile.medium}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                    >
                        {profile.medium}
                    </a>
                </div>
                <div className="flex items-center justify-between border-t border-zinc-100 pt-3">
                    <span className="text-xs text-zinc-400">Location</span>
                    <span className="text-sm text-zinc-600">{profile.location}</span>
                </div>
            </div>

            <p className="text-xs text-zinc-300 mt-12 text-center">
                © {new Date().getFullYear()} {profile.name}
            </p>
        </section>
    );
}