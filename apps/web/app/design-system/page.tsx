import type { Metadata } from "next";
import { Button } from "@repo/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/card";
import { Input } from "@repo/ui/components/input";
import { Label } from "@repo/ui/components/label";
import { Separator } from "@repo/ui/components/separator";

export const metadata: Metadata = {
  title: "设计系统检查台 | AI Companion",
  description: "集中检查基础 Token 与共享组件约束是否冲突。",
};

const feedbackTokens = [
  {
    label: "成功",
    token: "success",
    message: "配置已保存，可以继续下一步。",
    className: "bg-success-subtle text-success",
  },
  {
    label: "警告",
    token: "warning",
    message: "部分设置尚未完成，请确认。",
    className: "bg-warning-subtle text-warning",
  },
  {
    label: "错误",
    token: "error",
    message: "连接失败，需要处理后重试。",
    className: "bg-error-subtle text-error",
  },
  {
    label: "信息",
    token: "info",
    message: "同步将在后台继续运行。",
    className: "bg-info-subtle text-info",
  },
] as const;

const spacingSteps = [
  { token: "spacing-1", pixels: "4px", className: "gap-1" },
  { token: "spacing-2", pixels: "8px", className: "gap-2" },
  { token: "spacing-3", pixels: "12px", className: "gap-3" },
  { token: "spacing-4", pixels: "16px", className: "gap-4" },
  { token: "spacing-5", pixels: "20px", className: "gap-5" },
  { token: "spacing-6", pixels: "24px", className: "gap-6" },
] as const;

function TokenName({ children }: { children: React.ReactNode }) {
  return (
    <code className="font-mono text-helper text-content-tertiary">
      {children}
    </code>
  );
}

function SectionHeading({
  description,
  id,
  number,
  title,
}: {
  description: string;
  id: string;
  number: string;
  title: string;
}) {
  return (
    <div className="grid gap-2">
      <div className="flex items-center gap-3">
        <span className="font-mono text-helper text-brand-text">{number}</span>
        <h2 id={id} className="text-section-title text-content-primary">
          {title}
        </h2>
      </div>
      <p className="max-w-3xl text-body text-content-secondary">
        {description}
      </p>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-surface-card">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:items-end lg:px-8">
          <div className="min-w-0">
            <p className="text-label text-brand-text">
              Design system diagnostics
            </p>
            <h1 className="mt-2 text-page-title text-content-primary">
              设计系统检查台
            </h1>
            <p className="mt-3 max-w-3xl text-body text-content-secondary">
              用于检查基础 Token
              在真实组件组合中的层级、密度和状态冲突，而不是展示组件数量。
              请分别在浅色与深色模式下，用鼠标和键盘完成检查。
            </p>
          </div>

          <aside
            aria-label="检查方式"
            className="rounded-xl border border-border bg-surface-elevated p-4 shadow-surface"
          >
            <p className="text-label text-content-primary">检查方式</p>
            <ul className="mt-2 grid gap-1 text-helper text-content-secondary">
              <li>切换系统浅色与深色模式</li>
              <li>依次使用鼠标 hover、按下与键盘 Tab</li>
              <li>缩窄窗口，确认长文案和按钮不会溢出</li>
            </ul>
          </aside>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-12 px-4 py-10 sm:px-6 lg:px-8">
        <nav aria-label="页面检查目录">
          <ol className="flex flex-wrap gap-x-5 gap-y-2 text-label text-brand-text">
            <li>
              <a className="underline-offset-4 hover:underline" href="#color">
                01 色彩职责
              </a>
            </li>
            <li>
              <a className="underline-offset-4 hover:underline" href="#type">
                02 字体层级
              </a>
            </li>
            <li>
              <a className="underline-offset-4 hover:underline" href="#rhythm">
                03 间距与圆角
              </a>
            </li>
            <li>
              <a
                className="underline-offset-4 hover:underline"
                href="#elevation"
              >
                04 边界与阴影
              </a>
            </li>
            <li>
              <a
                className="underline-offset-4 hover:underline"
                href="#components"
              >
                05 组件状态
              </a>
            </li>
          </ol>
        </nav>

        <section
          id="color"
          aria-labelledby="color-heading"
          className="scroll-mt-6"
        >
          <SectionHeading
            id="color-heading"
            number="01"
            title="色彩职责"
            description="移除品牌色后，承载面仍应依靠亮度差与描边保持层级；状态色只表达反馈和风险。"
          />

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle role="heading" aria-level={3}>
                  Surface 层级
                </CardTitle>
                <CardDescription>
                  Page → Card → Elevated → Overlay 应逐层可辨认。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-xl border border-border-default bg-surface-page p-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-label text-content-primary">
                      Page
                    </span>
                    <TokenName>surface-page</TokenName>
                  </div>
                  <div className="mt-4 rounded-xl border border-border bg-surface-card p-4 shadow-surface">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-label text-content-primary">
                        Card
                      </span>
                      <TokenName>surface-card</TokenName>
                    </div>
                    <div className="mt-4 rounded-xl border border-border bg-surface-elevated p-4">
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-label text-content-primary">
                          Elevated
                        </span>
                        <TokenName>surface-elevated</TokenName>
                      </div>
                      <div className="mt-4 rounded-2xl border border-border-strong bg-surface-overlay p-4 shadow-overlay">
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-label text-content-primary">
                            Overlay
                          </span>
                          <TokenName>surface-overlay</TokenName>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle role="heading" aria-level={3}>
                  Brand、Content 与 Border
                </CardTitle>
                <CardDescription>
                  品牌填充与品牌文字分离，普通信息保持中性色。
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-5">
                <div className="grid gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-md bg-brand px-3 py-2 text-label text-brand-foreground">
                      关键操作
                    </span>
                    <span className="rounded-md bg-brand-subtle px-3 py-2 text-label text-brand-text">
                      选中状态
                    </span>
                    <TokenName>brand</TokenName>
                  </div>
                </div>

                <Separator />

                <div className="grid gap-2">
                  <p className="text-body text-content-primary">
                    Primary · 标题与主要正文
                  </p>
                  <p className="text-body text-content-secondary">
                    Secondary · 补充说明与次要信息
                  </p>
                  <p className="text-helper text-content-tertiary">
                    Tertiary · 标签、占位符和元信息
                  </p>
                  <p className="text-helper text-content-disabled">
                    Disabled · 不可用信息
                  </p>
                </div>

                <Separator />

                <div className="grid gap-3">
                  <div className="border-t border-border-subtle pt-2 text-helper text-content-secondary">
                    border-subtle · 分隔
                  </div>
                  <div className="border-t border-border-default pt-2 text-helper text-content-secondary">
                    border-default · 容器
                  </div>
                  <div className="border-t border-border-strong pt-2 text-helper text-content-secondary">
                    border-strong · 控件
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle role="heading" aria-level={3}>
                  State 反馈色
                </CardTitle>
                <CardDescription>
                  每个状态同时提供文字，不依赖颜色独自传达含义。
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {feedbackTokens.map((item) => (
                  <div
                    key={item.token}
                    className={`min-w-0 rounded-lg p-4 ${item.className}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <strong className="text-label">{item.label}</strong>
                      <span className="font-mono text-helper">
                        {item.token}
                      </span>
                    </div>
                    <p className="mt-2 text-helper">{item.message}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section
          id="type"
          aria-labelledby="type-heading"
          className="scroll-mt-6"
        >
          <SectionHeading
            id="type-heading"
            number="02"
            title="字体层级"
            description="字号、字重和行高作为一个组合使用，避免页面只改字号却破坏阅读节奏。"
          />

          <Card className="mt-6">
            <CardContent className="grid gap-0 pt-4">
              <div className="grid gap-2 border-b border-border-subtle py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-baseline">
                <TokenName>24 / 32 · 600</TokenName>
                <p className="text-page-title text-content-primary">
                  Page title · 页面任务清晰可见
                </p>
              </div>
              <div className="grid gap-2 border-b border-border-subtle py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-baseline">
                <TokenName>18 / 24 · 600</TokenName>
                <p className="text-section-title text-content-primary">
                  Section title · 区块之间层级明确
                </p>
              </div>
              <div className="grid gap-2 border-b border-border-subtle py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-baseline">
                <TokenName>14 / 22 · 400</TokenName>
                <p className="max-w-2xl text-body text-content-secondary">
                  Body ·
                  正文使用稳定行高承载较长说明。当内容扩展到两行时，阅读节奏仍然连续，不需要局部放大制造重点。
                </p>
              </div>
              <div className="grid gap-2 border-b border-border-subtle py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-baseline">
                <TokenName>13 / 18 · 500</TokenName>
                <p className="text-label text-content-primary">
                  Label · 控件名称与短标签
                </p>
              </div>
              <div className="grid gap-2 py-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-baseline">
                <TokenName>12 / 18 · 400</TokenName>
                <p className="text-helper text-content-tertiary">
                  Helper · 占位符、辅助说明与元信息
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section
          id="rhythm"
          aria-labelledby="rhythm-heading"
          className="scroll-mt-6"
        >
          <SectionHeading
            id="rhythm-heading"
            number="03"
            title="间距与圆角"
            description="所有布局回到 4px 基线；圆角只保留控件、容器、浮层三档。"
          />

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle role="heading" aria-level={3}>
                  4px 间距基线
                </CardTitle>
                <CardDescription>
                  两个色块之间的真实 gap 对应常用步进。
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                {spacingSteps.map((step) => (
                  <div
                    key={step.token}
                    className="grid grid-cols-[6rem_minmax(0,1fr)_3rem] items-center gap-3"
                  >
                    <TokenName>{step.token}</TokenName>
                    <div className={`flex items-center ${step.className}`}>
                      <span className="h-5 w-8 rounded-md bg-brand" />
                      <span className="h-5 w-8 rounded-md bg-brand-subtle" />
                    </div>
                    <span className="text-right font-mono text-helper text-content-secondary">
                      {step.pixels}
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle role="heading" aria-level={3}>
                  三档圆角
                </CardTitle>
                <CardDescription>
                  控件、容器和浮层应保持稳定的识别关系。
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-md border border-border-strong bg-surface-interactive p-4 text-center">
                  <p className="text-label text-content-primary">Control</p>
                  <p className="mt-1 font-mono text-helper text-content-tertiary">
                    6px
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-surface-card p-4 text-center shadow-surface">
                  <p className="text-label text-content-primary">Container</p>
                  <p className="mt-1 font-mono text-helper text-content-tertiary">
                    8px
                  </p>
                </div>
                <div className="rounded-2xl border border-border-strong bg-surface-overlay p-4 text-center shadow-overlay">
                  <p className="text-label text-content-primary">Overlay</p>
                  <p className="mt-1 font-mono text-helper text-content-tertiary">
                    12px
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section
          id="elevation"
          aria-labelledby="elevation-heading"
          className="scroll-mt-6"
        >
          <SectionHeading
            id="elevation-heading"
            number="04"
            title="边界与阴影"
            description="描边负责轮廓识别，阴影只提示层级；即使阴影较弱，容器边界也不能消失。"
          />

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface-card p-6 shadow-surface">
              <div className="flex items-center justify-between gap-3">
                <p className="text-label text-content-primary">常规容器</p>
                <TokenName>shadow-surface</TokenName>
              </div>
              <p className="mt-3 text-body text-content-secondary">
                弱描边与轻阴影共同工作，适合卡片和常规承载面。
              </p>
            </div>
            <div className="rounded-2xl border border-border-strong bg-surface-overlay p-6 shadow-overlay">
              <div className="flex items-center justify-between gap-3">
                <p className="text-label text-content-primary">浮层容器</p>
                <TokenName>shadow-overlay</TokenName>
              </div>
              <p className="mt-3 text-body text-content-secondary">
                更强描边和更大阴影用于需要脱离页面层级的内容。
              </p>
            </div>
          </div>
        </section>

        <section
          id="components"
          aria-labelledby="components-heading"
          className="scroll-mt-6"
        >
          <SectionHeading
            id="components-heading"
            number="05"
            title="组件状态与组合冲突"
            description="这里使用真实共享组件检查 default、hover、active、focus-visible、disabled 与 invalid，不为演示页伪造状态。"
          />

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle role="heading" aria-level={3}>
                  表单约束
                </CardTitle>
                <CardDescription>
                  使用 Tab 检查聚焦环，并比较默认、禁用与异常状态。
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-5">
                <div className="grid gap-2">
                  <Label htmlFor="workspace-name">工作区名称</Label>
                  <Input
                    id="workspace-name"
                    placeholder="例如：AI Companion"
                    aria-describedby="workspace-name-help"
                  />
                  <p
                    id="workspace-name-help"
                    className="text-helper text-content-tertiary"
                  >
                    名称将显示在工作区导航中。
                  </p>
                </div>

                <Separator />

                <div className="grid gap-2">
                  <Label htmlFor="workspace-slug">访问路径</Label>
                  <Input
                    id="workspace-slug"
                    defaultValue="invalid path"
                    aria-invalid="true"
                    aria-describedby="workspace-slug-error"
                  />
                  <p
                    id="workspace-slug-error"
                    className="text-helper text-error"
                  >
                    访问路径只能包含小写字母、数字和短横线。
                  </p>
                </div>

                <Separator />

                <div className="group grid gap-2" data-disabled="true">
                  <Label htmlFor="workspace-owner">所有者</Label>
                  <Input
                    id="workspace-owner"
                    defaultValue="team@ai-companion.dev"
                    disabled
                  />
                </div>
              </CardContent>
              <CardFooter className="flex-wrap justify-end gap-2">
                <Button type="button" variant="outline">
                  取消
                </Button>
                <Button type="button">保存设置</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle role="heading" aria-level={3}>
                  Button 状态矩阵
                </CardTitle>
                <CardDescription>
                  鼠标悬停和按下时，状态变化应清楚但不过度跳跃。
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-5">
                <div className="flex flex-wrap gap-2">
                  <Button type="button">主要操作</Button>
                  <Button type="button" variant="outline">
                    次要操作
                  </Button>
                  <Button type="button" variant="secondary">
                    辅助操作
                  </Button>
                  <Button type="button" variant="ghost">
                    幽灵按钮
                  </Button>
                  <Button type="button" variant="destructive">
                    危险操作
                  </Button>
                  <Button type="button" variant="link">
                    文本操作
                  </Button>
                </div>

                <Separator />

                <div className="flex flex-wrap items-center gap-2">
                  <Button type="button" size="xs">
                    XS
                  </Button>
                  <Button type="button" size="sm">
                    Small
                  </Button>
                  <Button type="button">Default</Button>
                  <Button type="button" size="lg">
                    Large
                  </Button>
                </div>

                <Separator />

                <div className="flex flex-wrap gap-2">
                  <Button type="button" disabled>
                    保存中
                  </Button>
                  <Button type="button" variant="outline" disabled>
                    已禁用
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card size="sm" className="lg:col-span-2">
              <CardHeader>
                <CardTitle role="heading" aria-level={3}>
                  窄屏与长文案压力检查
                </CardTitle>
                <CardDescription>
                  当容器缩窄、文案变长、操作数量增加时，组件应自然换行且不产生横向滚动。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="min-w-0">
                    <p className="text-label text-content-primary">
                      这是一个用于验证信息密度、长标题和辅助说明是否互相挤压的真实组合场景
                    </p>
                    <p className="mt-1 text-helper text-content-tertiary">
                      辅助信息需要保持可读，但不应该抢过主要任务和操作按钮。
                    </p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2">
                    <Button type="button" variant="outline">
                      稍后处理
                    </Button>
                    <Button type="button">继续配置</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}
