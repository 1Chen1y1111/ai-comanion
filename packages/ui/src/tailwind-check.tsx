interface TailwindCheckProps {
  appName: string;
}

const checks = [
  ["Utilities", "组件"],
  ["@source", "扫描"],
  ["@theme", "主题"],
] as const;

const states = [
  ["成功", "bg-success-subtle text-success"],
  ["警告", "bg-warning-subtle text-warning"],
  ["错误", "bg-destructive-subtle text-destructive"],
  ["信息", "bg-info-subtle text-info"],
] as const;

export function TailwindCheck({ appName }: TailwindCheckProps) {
  return (
    <section
      aria-label={`${appName} Tailwind CSS 验证`}
      className="w-full max-w-md rounded-xl border border-border bg-card p-6 font-sans shadow-surface"
    >
      <div>
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-md bg-primary-subtle px-3 py-1 text-helper font-semibold text-brand-text">
            <span className="size-2 rounded-full bg-primary" />
            Tailwind CSS v4
          </span>
          <span className="font-mono text-helper text-content-tertiary">
            {appName}
          </span>
        </div>

        <h2 className="mt-5 text-section-title text-content-primary">
          共享 Design Token 已生效
        </h2>
        <p className="mt-2 text-body text-content-secondary">
          颜色、字体、间距、圆角和阴影均由 packages/ui 统一提供。
        </p>

        <dl className="mt-5 grid grid-cols-3 gap-2">
          {checks.map(([term, description]) => (
            <div
              className="rounded-lg bg-surface-elevated px-2 py-3 text-center"
              key={term}
            >
              <dt className="font-mono text-helper font-semibold text-content-primary">
                {term}
              </dt>
              <dd className="mt-1 text-helper text-content-tertiary">
                {description}
              </dd>
            </div>
          ))}
        </dl>

        <div aria-label="状态色 Token" className="mt-4 grid grid-cols-4 gap-2">
          {states.map(([label, className]) => (
            <span
              className={`rounded-md px-2 py-2 text-center text-helper ${className}`}
              key={label}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
