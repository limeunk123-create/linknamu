"use client";

import { useState } from "react";
import type { LinkItem } from "@/data/profile";
import LinkIcon from "@/components/LinkIcon";

/** 페이지가 바뀌어도 요청이 끊기지 않도록 sendBeacon 으로 클릭을 보냅니다. */
function trackClick(linkId: string) {
  const body = JSON.stringify({ linkId });
  try {
    if (navigator.sendBeacon) {
      const ok = navigator.sendBeacon("/api/click", new Blob([body], { type: "application/json" }));
      if (ok) return;
    }
  } catch {
    // sendBeacon 이 막힌 환경이면 아래 fetch 로 대신 보냅니다.
  }
  fetch("/api/click", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {});
}

export default function LinkCard({ link, initialCount }: { link: LinkItem; initialCount?: number }) {
  const [count, setCount] = useState(initialCount);
  const isWeb = link.url.startsWith("http");

  const base =
    "group flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2";
  const tone = link.featured
    ? "border-navy bg-navy text-white shadow-[0_12px_30px_-12px_rgba(11,59,143,.6)] hover:bg-navy-dark"
    : "border-slate-900/10 bg-white/80 text-slate-900 shadow-sm backdrop-blur hover:border-navy/40 hover:shadow-[0_12px_30px_-14px_rgba(11,59,143,.45)]";

  return (
    <a
      href={link.url}
      target={isWeb ? "_blank" : undefined}
      rel={isWeb ? "noopener noreferrer" : undefined}
      onClick={() => {
        trackClick(link.id);
        setCount((c) => (c ?? 0) + 1);
      }}
      className={`${base} ${tone}`}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
          link.featured ? "bg-white/15 text-white" : "bg-navy/5 text-navy"
        }`}
      >
        <LinkIcon name={link.icon} />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block truncate text-[15px] font-semibold">{link.title}</span>
        {link.description && (
          <span
            className={`mt-0.5 block truncate text-[13px] ${link.featured ? "text-white/75" : "text-slate-500"}`}
          >
            {link.description}
          </span>
        )}
      </span>

      {typeof count === "number" && (
        <span
          className={`shrink-0 text-xs tabular-nums ${link.featured ? "text-white/70" : "text-slate-400"}`}
          title="클릭 수"
        >
          {count.toLocaleString("ko-KR")}회
        </span>
      )}
    </a>
  );
}
