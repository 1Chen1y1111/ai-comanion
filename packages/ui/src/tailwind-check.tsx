interface TailwindCheckProps {
  appName: string;
}

const checks = [
  ["Utilities", "组件"],
  ["@source", "扫描"],
  ["@theme", "主题"],
] as const;

export function TailwindCheck({ appName }: TailwindCheckProps) {
  return (
    <section
      aria-label={`${appName} Tailwind CSS 验证`}
      className="relative w-full max-w-md overflow-hidden rounded-card border border-brand-500/20 bg-white p-6 font-sans shadow-xl shadow-brand-500/10 dark:bg-zinc-950"
    >
      <div
        aria-hidden="true"
        className="absolute -right-12 -top-12 size-32 rounded-full bg-brand-500/15 blur-2xl"
      />

      <div className="relative">
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-950 dark:text-brand-100">
            <span className="size-2 rounded-full bg-brand-500" />
            Tailwind CSS v4
          </span>
          <span className="font-mono text-xs text-zinc-500">{appName}</span>
        </div>

        <h2 className="mt-5 text-2xl font-bold tracking-tight text-zinc-950 dark:text-white">
          共享 UI 样式已生效
        </h2>
        <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          此组件来自 packages/ui，并由当前子站扫描和编译。
        </p>

        <dl className="mt-5 grid grid-cols-3 gap-2">
          {checks.map(([term, description]) => (
            <div
              className="rounded-lg bg-brand-50 px-2 py-3 text-center dark:bg-brand-950/60"
              key={term}
            >
              <dt className="font-mono text-xs font-semibold text-brand-700 dark:text-brand-100">
                {term}
              </dt>
              <dd className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                {description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
