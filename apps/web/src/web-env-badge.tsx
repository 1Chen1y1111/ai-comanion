"use client";

import { getWebClientEnv } from "./env.client";

export function WebEnvBadge() {
  const env = getWebClientEnv();

  return (
    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground py-5">
      <span className="rounded-full border border-border px-3 py-1">
        client {env.NEXT_PUBLIC_API_BASE_URL}
      </span>
      <span className="rounded-full border border-border px-3 py-1">
        {env.NEXT_PUBLIC_API_BASE_URL}
      </span>
    </div>
  );
}
