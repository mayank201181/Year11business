"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SITCOM_EPISODES, sitcomEpisodeFor } from "@/lib/sitcom";
import { STRANDS, metaById } from "@/lib/topics/meta";
import { formatDuration, useWatchedEpisodes } from "./EpisodePlayer";

export interface WatchTopicItem {
  id: string;
  num: number;
  title: string;
  icon: string;
  strand: string;
  summary: string;
}

export function WatchHub({ topics }: { topics: WatchTopicItem[] }) {
  const [strand, setStrand] = useState<string>("All");
  const epDone = useWatchedEpisodes();

  const strands = ["All", ...STRANDS];
  const visible =
    strand === "All"
      ? topics
      : topics.filter((t) => t.strand === strand || metaById(t.id)?.secondaryStrand === strand);
  const watchedCount = SITCOM_EPISODES.filter((e) => epDone[e.topicId]).length;
  const heroPoster = SITCOM_EPISODES[0]?.poster;

  return (
    <div className="space-y-6 pb-8">
      <section className="card overflow-hidden border-2 border-brand/30 p-5 sm:p-6">
        <div className="grid items-center gap-5 md:grid-cols-12">
          <div className="space-y-3 md:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="chip border-0 bg-brand-soft text-brand">📺 7 Narrated Sitcom Episodes</span>
              <span className="chip border-0 bg-accent-soft text-warn">🎯 Examiner 9/12-Mark Trap Roasts</span>
              <span className="chip">⭐ {watchedCount}/{SITCOM_EPISODES.length || 7} Watched</span>
            </div>
            <h1 className="text-2xl font-black leading-tight sm:text-3xl">
              Boardroom Bananas: Edexcel 4BS1 Watch Hub &amp; Interactive Studios
            </h1>
            <p className="text-sm text-ink-2 sm:text-base">
              Binge-watch all 7 narrated episodes starring <strong>Vanishree</strong>, <strong>Ledger</strong> (the 100-eyed CFO calculator monster), and <strong>Examiner Sterling</strong> — then jump straight into each topic&apos;s live interactive business simulator and 60s Shorts!
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Link href="/episodes" className="btn btn-primary">
                📺 Open Binge Sitcom Player
              </Link>
              <Link href="/shorts" className="btn btn-secondary">
                📱 Swipe 60s Concept Shorts
              </Link>
              <Link href="/formulas" className="btn btn-ghost">
                🎯 Formulas &amp; Marks Vault
              </Link>
            </div>
          </div>
          {heroPoster ? (
            <div className="md:col-span-5">
              <Link href="/episodes" className="block overflow-hidden rounded-2xl border border-line shadow-sm transition hover:opacity-95">
                <Image
                  src={heroPoster}
                  alt="Boardroom Bananas: Edexcel 4BS1 — Vanishree, Dad and Ledger in the boardroom"
                  width={960}
                  height={540}
                  className="h-auto w-full object-cover"
                  priority
                />
              </Link>
            </div>
          ) : null}
        </div>
      </section>

      <div className="flex flex-wrap gap-2">
        {strands.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setStrand(s)}
            className={`btn btn-sm ${strand === s ? "btn-primary" : "btn-secondary"}`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {visible.map((t) => {
          const ep = sitcomEpisodeFor(t.id);
          return (
            <article key={t.id} className="card flex flex-col justify-between gap-3 p-4">
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="chip">
                    {t.icon} Ep {String(t.num).padStart(2, "0")} · {t.strand}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {ep ? <span className="text-xs font-bold text-ink-2">{formatDuration(ep.durationSec)}</span> : null}
                    {epDone[t.id] ? <span className="chip border-0 bg-good-soft text-good">📺✓</span> : null}
                  </div>
                </div>
                <h2 className="mt-2 text-lg font-extrabold">{t.title}</h2>
                {ep ? (
                  <p className="mt-1 text-xs text-ink-2">
                    <strong className="text-ink">&ldquo;{ep.title}&rdquo;</strong> — {ep.logline}
                  </p>
                ) : t.summary ? (
                  <p className="mt-1 line-clamp-2 text-xs text-ink-2">{t.summary}</p>
                ) : null}
              </div>
              <div className="grid grid-cols-3 gap-2 pt-1">
                <Link href={`/topic/${t.id}?tab=watch`} className="btn btn-primary btn-sm">
                  📺 Episode
                </Link>
                <Link href={`/topic/${t.id}?tab=explore`} className="btn btn-secondary btn-sm">
                  🎛️ Lab
                </Link>
                <Link href={`/topic/${t.id}?tab=shorts`} className="btn btn-secondary btn-sm">
                  📱 Shorts
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
