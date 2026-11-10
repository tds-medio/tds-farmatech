import { useState } from 'react';
import type { Module, Severity } from '../data';
import Quiz from './Quiz';

const sevStyle: Record<Severity, { bg: string; color: string }> = {
  LEVE: { bg: 'var(--green-soft)', color: 'var(--green)' },
  MODERADA: { bg: '#fcf1e3', color: 'var(--amber)' },
  GRAVE: { bg: '#fdeceC', color: 'var(--red)' },
  CONTRAINDICADA: { bg: 'var(--red)', color: '#fff' },
};

const toneStyle = (tone?: string) => {
  if (tone === 'warn') return { borderColor: 'var(--amber)', background: '#fffaf3' };
  if (tone === 'danger') return { borderColor: 'var(--red)', background: '#fef6f6' };
  return { borderColor: 'var(--line)', background: '#fff' };
};

export default function ModuleCard({ mod }: { mod: Module }) {
  const [open, setOpen] = useState(false);
  const [quiz, setQuiz] = useState(false);
  const sev = sevStyle[mod.severity];

  return (
    <article
      className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md"
      style={{ borderColor: 'var(--line)', borderLeft: '5px solid var(--blue-2)' }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start gap-4 p-4 text-left sm:p-5"
        aria-expanded={open}
      >
        <div
          className="mt-0.5 hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg sm:flex"
          style={{ background: '#e8f0fa' }}
        >
          💊
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-base font-extrabold sm:text-lg" style={{ color: 'var(--blue)' }}>
              {mod.name}
            </h3>
            <span
              className="rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider"
              style={{ background: sev.bg, color: sev.color }}
            >
              {mod.severity}
            </span>
          </div>
          <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--muted)' }}>
            {mod.subtitle}
          </p>
          <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--text)' }}>
            {mod.summary}
          </p>
        </div>
        <span
          className="mt-1 shrink-0 text-xl transition-transform duration-300"
          style={{ color: 'var(--blue-2)', transform: open ? 'rotate(180deg)' : 'none' }}
        >
          ⌄
        </span>
      </button>

      {open && (
        <div className="accordion-panel border-t px-4 pb-5 pt-4 sm:px-5" style={{ borderColor: 'var(--line)' }}>
          <div className="grid gap-3">
            {mod.sections.map((s, i) => (
              <div key={i} className="rounded-xl border-l-4 border p-3 sm:p-4" style={toneStyle(s.tone)}>
                <h4 className="mb-1 text-sm font-bold" style={{ color: 'var(--blue-deep)' }}>
                  {s.tone === 'danger' ? '⚠️ ' : s.tone === 'warn' ? '🔶 ' : '• '}
                  {s.title}
                </h4>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text)' }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl p-4" style={{ background: 'var(--green-soft)' }}>
            <h4 className="mb-2 text-sm font-extrabold uppercase tracking-wide" style={{ color: 'var(--green)' }}>
              ✅ Como evitar
            </h4>
            <ul className="space-y-1.5">
              {mod.avoid.map((a, i) => (
                <li key={i} className="flex gap-2 text-sm leading-relaxed" style={{ color: 'var(--text)' }}>
                  <span style={{ color: 'var(--green)' }}>→</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => setQuiz((q) => !q)}
            className="mt-4 rounded-full px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90"
            style={{ background: 'var(--blue-2)' }}
          >
            {quiz ? 'Ocultar quiz' : '🎯 Testar aprendizado'}
          </button>

          {quiz && <Quiz questions={mod.quiz} />}
        </div>
      )}
    </article>
  );
}
