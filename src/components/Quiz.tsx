import { useState } from 'react';
import type { QuizQ } from '../data';

export default function Quiz({ questions }: { questions: QuizQ[] }) {
  const [answers, setAnswers] = useState<Record<number, number>>({});

  return (
    <div className="mt-4 rounded-xl border p-4 sm:p-5" style={{ borderColor: 'var(--line)', background: '#f7fafd' }}>
      <h4 className="mb-3 flex items-center gap-2 text-sm font-extrabold uppercase tracking-wide" style={{ color: 'var(--blue)' }}>
        🧠 Teste seus conhecimentos
      </h4>
      <div className="space-y-5">
        {questions.map((item, qi) => {
          const chosen = answers[qi];
          return (
            <div key={qi}>
              <p className="mb-2 text-sm font-semibold" style={{ color: 'var(--text)' }}>
                {qi + 1}. {item.q}
              </p>
              <div className="grid gap-2">
                {item.options.map((opt, oi) => {
                  const picked = chosen === oi;
                  const correct = oi === item.answer;
                  let style: React.CSSProperties = { borderColor: 'var(--line)', background: '#fff', color: 'var(--text)' };
                  if (chosen !== undefined && picked && correct)
                    style = { borderColor: 'var(--green)', background: 'var(--green-soft)', color: 'var(--green)' };
                  else if (chosen !== undefined && picked && !correct)
                    style = { borderColor: 'var(--red)', background: '#fdeceC', color: 'var(--red)' };
                  else if (chosen !== undefined && correct)
                    style = { borderColor: 'var(--green)', background: 'var(--green-soft)', color: 'var(--green)' };
                  return (
                    <button
                      key={oi}
                      disabled={chosen !== undefined}
                      onClick={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                      className="rounded-lg border px-3 py-2 text-left text-sm font-medium transition hover:shadow-sm disabled:cursor-default"
                      style={style}
                    >
                      {chosen !== undefined && correct ? '✔ ' : chosen === oi && !correct ? '✘ ' : ''}
                      {opt}
                    </button>
                  );
                })}
              </div>
              {chosen !== undefined && (
                <div
                  className="fade-in mt-2 rounded-lg px-3 py-2 text-xs leading-relaxed"
                  style={{
                    background: chosen === item.answer ? 'var(--green-soft)' : '#fdeceC',
                    color: chosen === item.answer ? 'var(--green)' : 'var(--red)',
                  }}
                >
                  <strong>{chosen === item.answer ? 'Correto! ' : 'Incorreto. '}</strong>
                  {item.why}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
