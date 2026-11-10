import { foodModules, drugModules } from '../data';
import robo from '../assets/robo-acenando.png';

type Tab = 'inicio' | 'alimento' | 'remedio';

export default function Home({ onNavigate }: { onNavigate: (t: Tab) => void }) {
  return (
    <div className="fade-in">
      {/* Hero de boas-vindas */}
      <section className="blue-grad relative overflow-hidden rounded-3xl px-5 py-10 text-center text-white shadow-lg sm:px-10 sm:py-14">
        {/* detalhes decorativos */}
        <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full opacity-20" style={{ background: 'var(--blue-2)' }} />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full opacity-20" style={{ background: 'var(--blue-2)' }} />

        <div className="relative mx-auto flex max-w-2xl flex-col items-center">
          {/* [INSERIR IMAGEM DO ROBÔ ACENANDO AQUI] */}
          <div className="float overflow-hidden rounded-3xl shadow-2xl ring-4 ring-white/15">
            <img
              src={robo}
              alt="Mascote TDS FarmaTech acenando para o visitante"
              className="h-56 w-56 object-cover sm:h-72 sm:w-72 lg:h-80 lg:w-80"
            />
          </div>

          <span className="mt-8 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest">
            Portal educacional de farmacologia
          </span>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Olá! Bem-vindo(a) ao <span style={{ color: '#9cc4f3' }}>TDS FarmaTech</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
            Eu sou o seu assistente virtual. Aqui você aprende, de forma simples e visual, como alimentos e
            outros medicamentos podem alterar o efeito dos remédios que você usa — com mecanismos explicados,
            alertas de segurança e quizzes para testar o que aprendeu.
          </p>

          <button
            onClick={() => onNavigate('alimento')}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-extrabold shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl sm:text-lg"
            style={{ color: 'var(--blue)' }}
          >
            Explorar Interações <span aria-hidden>→</span>
          </button>
          <button
            onClick={() => onNavigate('remedio')}
            className="mt-3 rounded-full border border-white/40 px-5 py-2 text-xs font-bold uppercase tracking-wide text-white/90 transition hover:bg-white/10"
          >
            Ver Medicamento x Remédio
          </button>
        </div>
      </section>

      {/* O que você encontra */}
      <section className="mt-10">
        <h2 className="text-center text-xl font-extrabold sm:text-2xl" style={{ color: 'var(--blue-deep)' }}>
          O que você encontra no portal
        </h2>
        <p className="mx-auto mt-1 max-w-2xl text-center text-sm" style={{ color: 'var(--muted)' }}>
          Escolha um módulo para começar. Cada tema traz cards expandíveis, condutas seguras e um teste rápido.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <button
            onClick={() => onNavigate('alimento')}
            className="group rounded-2xl border bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            style={{ borderColor: 'var(--line)', borderTop: '4px solid var(--blue)' }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl" style={{ background: '#e8f0fa' }}>
              🥗
            </div>
            <h3 className="mt-3 text-base font-extrabold" style={{ color: 'var(--blue)' }}>
              Medicamento x Alimento
            </h3>
            <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              Jejum, leite, café, cálcio, vitamina K e outros alimentos que mudam a absorção dos fármacos.
            </p>
            <span className="mt-3 inline-block text-xs font-bold" style={{ color: 'var(--blue-2)' }}>
              {foodModules.length} módulos · Acessar →
            </span>
          </button>

          <button
            onClick={() => onNavigate('remedio')}
            className="group rounded-2xl border bg-white p-5 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            style={{ borderColor: 'var(--line)', borderTop: '4px solid var(--blue-2)' }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl" style={{ background: '#e8f0fa' }}>
              💊
            </div>
            <h3 className="mt-3 text-base font-extrabold" style={{ color: 'var(--blue)' }}>
              Medicamento x Remédio
            </h3>
            <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              Combinações de risco entre fármacos, classificadas por gravidade com sinais de alerta.
            </p>
            <span className="mt-3 inline-block text-xs font-bold" style={{ color: 'var(--blue-2)' }}>
              {drugModules.length} módulos · Acessar →
            </span>
          </button>

          <div
            title="Em breve"
            className="cursor-not-allowed rounded-2xl border bg-white p-5 text-left opacity-60 shadow-sm"
            style={{ borderColor: 'var(--line)', borderTop: '4px solid #b9c7da' }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl" style={{ background: '#eef2f7' }}>
              🎮
            </div>
            <h3 className="mt-3 text-base font-extrabold" style={{ color: 'var(--muted)' }}>
              Jogos
            </h3>
            <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
              Atividades gamificadas para fixar o conteúdo de forma divertida.
            </p>
            <span className="mt-3 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white" style={{ background: '#b9c7da' }}>
              Em breve
            </span>
          </div>
        </div>
      </section>

      {/* Como usar */}
      <section className="mt-10 rounded-2xl border p-5 sm:p-8" style={{ borderColor: 'var(--line)', background: '#f4f8fd' }}>
        <h2 className="text-lg font-extrabold sm:text-xl" style={{ color: 'var(--blue-deep)' }}>
          Como usar o portal
        </h2>
        <ol className="mt-4 grid gap-4 sm:grid-cols-3">
          {[
            ['Escolha a aba', 'Navegue entre Medicamento x Alimento ou Medicamento x Remédio e use a busca para filtrar pelo nome.'],
            ['Expanda o card', 'Leia o mecanismo da interação, os alertas de gravidade e a caixa "Como evitar".'],
            ['Teste seu aprendizado', 'Responda ao quiz ao final de cada módulo e receba o feedback imediato.'],
          ].map(([t, d], i) => (
            <li key={t} className="flex gap-3">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-extrabold text-white"
                style={{ background: 'var(--blue)' }}
              >
                {i + 1}
              </span>
              <div>
                <p className="text-sm font-bold" style={{ color: 'var(--blue)' }}>{t}</p>
                <p className="mt-0.5 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
