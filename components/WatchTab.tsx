"use client";
import { useEffect } from "react";
import Link from "next/link";
import type { Topic } from "@/lib/types";
import { useStore } from "@/lib/store";
import { sitcomEpisodeFor } from "@/lib/sitcom";
import { EpisodePlayer, formatDuration, useWatchedEpisodes } from "./EpisodePlayer";

export function WatchTab({
  topic,
  onPractise,
  onChallenge,
}: {
  topic: Topic;
  onPractise: () => void;
  onChallenge: () => void;
}) {
  const episode = sitcomEpisodeFor(topic.id);
  const watchedEpisodes = useWatchedEpisodes();
  const episodeDone = !!watchedEpisodes[topic.id];
  const { setBest } = useStore();

  useEffect(() => {
    if (episodeDone) setBest(`watch:${topic.id}`, 1);
  }, [episodeDone, topic.id, setBest]);

  return (
    <div className="space-y-4">
      {episode ? (
        <>
          <div className="card flex flex-wrap items-center justify-between gap-3 border-l-4 border-brand p-4">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-xl text-white" aria-hidden>
                📺
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-wider text-brand">
                    Boardroom Bananas · Episode {episode.num}
                  </span>
                  <span className="chip text-xs">{formatDuration(episode.durationSec)}</span>
                  {episodeDone ? <span className="chip border-0 bg-good-soft text-good">Watched ✓</span> : null}
                </div>
                <h2 className="mt-0.5 text-lg font-extrabold">&ldquo;{episode.title}&rdquo;</h2>
                {episode.logline ? <p className="mt-0.5 text-sm text-ink-2">{episode.logline}</p> : null}
              </div>
            </div>
            <Link href={`/episodes?ep=${episode.num}`} className="btn btn-secondary btn-sm shrink-0">
              📺 Full Sitcom Playlist
            </Link>
          </div>

          <div className="card overflow-hidden p-1.5 sm:p-2.5">
            <EpisodePlayer episode={episode} />
            <div className="mt-2 flex flex-wrap items-center justify-between gap-2 px-2 pb-1 text-xs text-ink-2">
              <span>Includes <strong>Ledger&apos;s SVG Whiteboard</strong>, <strong>Examiner Sterling&apos;s 9/12-Mark Trap Roast</strong> &amp; <strong>3 Pause Challenges</strong>.</span>
              <Link href={`/topic/${topic.id}?tab=revise`} className="font-bold text-brand hover:underline">
                🎯 Read Grade 9 Marks-Savers →
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="card p-6 text-center text-ink-2">
          <p className="font-extrabold text-ink">Episode loading</p>
          <p className="mt-1 text-sm">Head over to the Interactive Lab or Practice tab while this episode loads.</p>
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-3">
        <Link href={`/topic/${topic.id}?tab=explore`} className="card flex items-start gap-3 p-4 hover:border-brand">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-xl" aria-hidden>
            🎛️
          </span>
          <div>
            <div className="font-extrabold">Interactive Business Lab</div>
            <p className="mt-0.5 text-xs text-ink-2">Drag sliders &amp; test scenarios live on this topic&apos;s simulator.</p>
          </div>
        </Link>
        <Link href={`/topic/${topic.id}?tab=shorts`} className="card flex items-start gap-3 p-4 hover:border-brand">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-info-soft text-xl" aria-hidden>
            📱
          </span>
          <div>
            <div className="font-extrabold">60s Concept Shorts</div>
            <p className="mt-0.5 text-xs text-ink-2">Swipe through vertical bite-sized clips from this episode.</p>
          </div>
        </Link>
        <Link href={`/topic/${topic.id}?tab=revise`} className="card flex items-start gap-3 p-4 hover:border-brand">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-xl" aria-hidden>
            🎯
          </span>
          <div>
            <div className="font-extrabold">Grade 9 Marks-Savers</div>
            <p className="mt-0.5 text-xs text-ink-2">Never Write ❌ → Write Instead ✅ + Edexcel 4BS1 formulas.</p>
          </div>
        </Link>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <Link href="/watch" className="btn btn-ghost btn-sm">
          🍿 All 7 Watch Studios
        </Link>
        <div className="flex flex-wrap items-center gap-2">
          <button type="button" className="btn btn-secondary btn-sm" onClick={onPractise}>
            ✏️ Practise skills
          </button>
          <button type="button" className="btn btn-primary btn-sm" onClick={onChallenge}>
            🧗 Challenge problems →
          </button>
        </div>
      </div>
    </div>
  );
}
