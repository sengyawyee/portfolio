import SkillChip from "@/components/ui/SkillChip";

const tabs = ["Component Preview", "Responsive UI", "Vue / Nuxt", "Figma → Code"];

const statusChips = ["Mobile-ready", "Clean UI", "Production-ready"];

const capabilities = [
  "Vue 3 / Nuxt frontend",
  "Responsive UI implementation",
  "Figma-to-code workflow",
  "Corporate website delivery",
  "Maintainable UI components",
];

function VueCodeSnippet() {
  return (
    <pre className="h-full overflow-hidden rounded-xl border border-white/10 bg-deep-navy p-2.5 font-mono text-[9px] leading-[1.55] text-muted-dark sm:text-[10px]">
      <code className="block whitespace-pre-wrap break-words">
        <span className="text-cyan">&lt;script setup lang=&quot;ts&quot;&gt;</span>
        {"\n"}
        <span className="text-white/75">const stack = </span>
        <span className="text-green-400">[&apos;Vue 3&apos;, &apos;Nuxt&apos;, &apos;Tailwind&apos;]</span>
        {"\n\n"}
        <span className="text-white/75">const ready = </span>
        <span className="text-cyan">computed</span>
        <span className="text-white/75">(() =&gt; stack.length &gt; 0)</span>
        {"\n\n"}
        <span className="text-white/75">const className = </span>
        <span className="text-cyan">computed</span>
        <span className="text-white/75">(() =&gt;</span>
        {"\n"}
        <span className="text-white/75">  ready.value ? </span>
        <span className="text-green-400">&apos;is-ready&apos;</span>
        <span className="text-white/75"> : </span>
        <span className="text-green-400">&apos;is-loading&apos;</span>
        {"\n"}
        <span className="text-white/75">)</span>
        {"\n"}
        <span className="text-cyan">&lt;/script&gt;</span>
        {"\n"}
        <span className="cursor-blink inline-block h-2.5 w-1 bg-cyan align-middle" />
      </code>
    </pre>
  );
}

export default function FrontendCraftPanel() {
  return (
    <aside className="mx-auto w-full max-w-[460px] transition-transform duration-500 hover:-translate-y-1 max-xl:max-w-[min(100%,28rem)]">
      <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate/80 shadow-[0_8px_40px_rgba(37,99,235,0.12)]">
        <div className="flex shrink-0 items-center gap-2.5 border-b border-white/10 bg-deep-navy/90 px-3.5 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-400/70" />
            <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
            <span className="h-2 w-2 rounded-full bg-green-400/70" />
          </div>
          <div className="flex-1 truncate rounded-md bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-muted-dark">
            thpfoundation.com · nuxt preview
          </div>
        </div>

        <div className="shrink-0 border-b border-white/10 px-3.5 py-2">
          <div className="flex flex-wrap gap-1">
            {tabs.map((tab, i) => (
              <span
                key={tab}
                className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${
                  i === 0
                    ? "bg-accent text-white"
                    : "bg-white/5 text-muted-dark"
                }`}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>

        <div className="grid shrink-0 gap-2.5 border-b border-white/10 p-3 sm:grid-cols-2 sm:items-stretch">
          <div className="h-full rounded-xl border border-white/10 bg-deep-navy/60 p-2.5">
            <p className="mb-1.5 text-[9px] font-bold uppercase tracking-widest text-cyan">
              Breakpoints
            </p>
            <div className="flex gap-1.5">
              <div className="flex-1 rounded border border-white/10 py-1.5 text-center">
                <div className="mx-auto mb-0.5 h-4 w-2.5 rounded border border-cyan/40" />
                <span className="text-[8px] text-muted-dark">375</span>
              </div>
              <div className="flex-1 rounded border border-accent/40 bg-accent/10 py-1.5 text-center">
                <div className="mx-auto mb-0.5 h-4 w-3.5 rounded border border-accent" />
                <span className="text-[8px] text-cyan">768</span>
              </div>
              <div className="flex-1 rounded border border-white/10 py-1.5 text-center">
                <div className="mx-auto mb-0.5 h-4 w-4 rounded border border-white/20" />
                <span className="text-[8px] text-muted-dark">1280</span>
              </div>
            </div>
            <div className="mt-1.5 flex flex-wrap gap-1">
              {statusChips.map((chip) => (
                <SkillChip key={chip} label={chip} dark />
              ))}
            </div>
          </div>

          <VueCodeSnippet />
        </div>

        <div className="shrink-0 px-4 pt-3 pb-5 sm:px-5 sm:pb-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-cyan">
            Frontend Delivery Stack
          </p>
          <p className="mt-1 text-xs font-medium text-white/60">
            Vue 3 · Nuxt · Responsive UI · Figma to Code
          </p>

          <ul className="mt-2.5 space-y-1.5">
            {capabilities.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span
                  className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan"
                  aria-hidden="true"
                />
                <span className="text-xs leading-snug text-white/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}
