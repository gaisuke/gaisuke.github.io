import { aiNative } from "@/lib/data";

export default function AiNative() {
    return (
        <section id="ai-native" className="max-w-2xl mx-auto py-12 border-t border-zinc-100 scroll-mt-20">
            <h2 className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-8">
                AI-Native Engineering
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                {aiNative.map((item) => (
                    <div key={item.title}>
                        <h3 className="text-sm font-medium mb-1">{item.title}</h3>
                        <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
