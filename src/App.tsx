import { useMemo, useState } from 'react';
import { foodModules, drugModules } from './data';
import ModuleCard from './components/ModuleCard';
import Home from './components/Home';
import logo from './assets/logo.png';
import bannerAlimentos from './assets/alimentos.jpg';
import bannerRemedios from './assets/remedios.jpg';

const DISCLAIMER =
  'AVISO IMPORTANTE: Este portal tem caráter estritamente informativo e educacional. As informações aqui contidas NÃO substituem, em hipótese alguma, a consulta, o diagnóstico ou a orientação de um profissional médico ou farmacêutico. Nunca altere ou interrompa tratamentos sem orientação profissional.';

type Tab = 'inicio' | 'alimento' | 'remedio';

export default function App() {
  const [tab, setTab] = useState<Tab>('inicio');
  const [query, setQuery] = useState('');
  const [modal, setModal] = useState(true);

  const navigate = (t: Tab) => {
    setTab(t);
    setQuery('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const modules = tab === 'remedio' ? drugModules : foodModules;
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return modules;
    return modules.filter((m) =>
      [m.name, m.subtitle, m.summary, ...m.tags].join(' ').toLowerCase().includes(q)
    );
  }, [modules, query]);

  const navBtn = (active: boolean): React.CSSProperties => ({
    background: active ? '#fff' : 'rgba(255,255,255,0.08)',
    color: active ? 'var(--blue)' : '#fff',
    borderColor: active ? '#fff' : 'rgba(255,255,255,0.35)',
  });

  const isContentTab = tab !== 'inicio';

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-soft)' }}>
      {/* Aviso legal fixo no topo */}
      <div
        className="px-3 py-2 text-center text-[11px] font-semibold leading-snug sm:text-xs"
        style={{ background: 'var(--blue-deep)', color: '#ffd9a8', borderBottom: '2px solid var(--amber)' }}
      >
        ⚠️ {DISCLAIMER}
      </div>

      {/* Cabeçalho fixo (azul) */}
      <header className="sticky top-0 z-40 shadow-md" style={{ background: 'linear-gradient(90deg, var(--blue-deep), var(--blue))' }}>
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center justify-between gap-3">
            <button onClick={() => navigate('inicio')} className="flex items-center gap-3" aria-label="Ir para o início">
              <img
                src={logo}
                alt="TDS FarmaTech"
                className="h-11 w-auto rounded-lg ring-1 ring-white/20 sm:h-12"
              />
              <span className="hidden text-left text-[10px] font-semibold uppercase leading-tight tracking-widest text-white/70 sm:block">
                Portal de Interações
                <br />
                Medicamentosas
              </span>
            </button>

            {/* Botão Início (pequeno) — visível no mobile ao lado do logo */}
            <button
              onClick={() => navigate('inicio')}
              className="rounded-full border px-3 py-1.5 text-[11px] font-bold transition lg:hidden"
              style={navBtn(tab === 'inicio')}
            >
              🏠 Início
            </button>
          </div>

          <nav className="flex flex-wrap items-center gap-2">
            {/* Botão Início (pequeno) — desktop */}
            <button
              onClick={() => navigate('inicio')}
              className="hidden rounded-full border px-3 py-1.5 text-[11px] font-bold transition hover:bg-white/15 lg:inline-flex lg:items-center lg:gap-1"
              style={navBtn(tab === 'inicio')}
            >
              🏠 Início
            </button>
            <button
              onClick={() => navigate('alimento')}
              className="rounded-full border px-4 py-2 text-xs font-extrabold uppercase tracking-wide transition hover:bg-white/15 sm:text-[13px]"
              style={navBtn(tab === 'alimento')}
            >
              Medicamento x Alimento
            </button>
            <button
              onClick={() => navigate('remedio')}
              className="rounded-full border px-4 py-2 text-xs font-extrabold uppercase tracking-wide transition hover:bg-white/15 sm:text-[13px]"
              style={navBtn(tab === 'remedio')}
            >
              Medicamento x Remédio
            </button>
            <span className="group relative">
              <button
                disabled
                aria-disabled="true"
                title="Em breve"
                className="cursor-not-allowed rounded-full border px-4 py-2 text-xs font-extrabold uppercase tracking-wide opacity-50 sm:text-[13px]"
                style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', borderColor: 'rgba(255,255,255,0.25)' }}
              >
                Jogos
              </button>
              <span
                className="pointer-events-none absolute -bottom-7 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded-md px-2 py-1 text-[10px] font-semibold group-hover:block"
                style={{ background: '#fff', color: 'var(--blue)' }}
              >
                Em breve
              </span>
            </span>
          </nav>
        </div>

        {/* Barra de busca / filtro rápido (abas de conteúdo) */}
        {isContentTab && (
          <div className="mx-auto max-w-6xl px-4 pb-3">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm" style={{ color: 'var(--blue-2)' }}>🔍</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Filtrar em "${tab === 'alimento' ? 'Medicamento x Alimento' : 'Medicamento x Remédio'}" — ex.: varfarina, cálcio, jejum...`}
                className="w-full rounded-full border-2 bg-white py-2.5 pl-9 pr-4 text-sm outline-none transition"
                style={{ borderColor: 'var(--blue-2)', color: 'var(--text)' }}
              />
            </div>
          </div>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-4 py-6">
        {tab === 'inicio' ? (
          <Home onNavigate={navigate} />
        ) : (
          <>
            {/* Imagem de cabeçalho da aba */}
            <div className="fade-in overflow-hidden rounded-2xl border-2 shadow-sm" style={{ borderColor: 'var(--blue-2)' }}>
              <img
                key={tab}
                src={tab === 'alimento' ? bannerAlimentos : bannerRemedios}
                alt={tab === 'alimento' ? 'Medicamento x Alimentação' : 'Medicamento x Remédio'}
                className="w-full object-cover"
              />
            </div>

            <section className="mt-6">
              <div className="border-l-4 pl-4" style={{ borderColor: 'var(--blue-2)' }}>
                <h2 className="text-xl font-extrabold sm:text-2xl" style={{ color: 'var(--blue-deep)' }}>
                  {tab === 'alimento' ? 'Interações Medicamento x Alimento' : 'Interações Medicamento x Medicamento'}
                </h2>
                <p className="mt-1 max-w-3xl text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {tab === 'alimento'
                    ? 'Módulos de conhecimento sobre como alimentos, bebidas e suplementos alteram a absorção e o efeito dos medicamentos. Expanda cada card para ver mecanismos, condutas e o quiz de verificação.'
                    : 'Módulos de risco entre fármacos, classificados por gravidade. Expanda cada card para entender o mecanismo da interação, os sinais de alerta e a conduta correta.'}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2 text-[10px] font-extrabold uppercase tracking-wider">
                <span className="mr-1 text-[11px] font-bold normal-case tracking-normal" style={{ color: 'var(--blue)' }}>Legenda de gravidade:</span>
                <span className="rounded-full px-2.5 py-1" style={{ background: 'var(--green-soft)', color: 'var(--green)' }}>Leve</span>
                <span className="rounded-full px-2.5 py-1" style={{ background: '#fcf1e3', color: 'var(--amber)' }}>Moderada</span>
                <span className="rounded-full px-2.5 py-1" style={{ background: '#fdeceC', color: 'var(--red)' }}>Grave</span>
                <span className="rounded-full px-2.5 py-1 text-white" style={{ background: 'var(--red)' }}>Contraindicada</span>
              </div>

              <div className="mt-5 grid gap-4">
                {filtered.map((m) => (
                  <ModuleCard key={m.id} mod={m} />
                ))}
                {filtered.length === 0 && (
                  <p className="rounded-xl border p-6 text-center text-sm" style={{ borderColor: 'var(--line)', color: 'var(--muted)' }}>
                    Nenhum módulo encontrado para “{query}”.
                  </p>
                )}
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => navigate('inicio')}
                  className="rounded-full border-2 px-5 py-2 text-xs font-bold uppercase tracking-wide transition hover:bg-blue-50"
                  style={{ borderColor: 'var(--blue-2)', color: 'var(--blue)' }}
                >
                  🏠 Voltar ao início
                </button>
                <button
                  onClick={() => navigate(tab === 'alimento' ? 'remedio' : 'alimento')}
                  className="rounded-full px-5 py-2 text-xs font-bold uppercase tracking-wide text-white transition hover:opacity-90"
                  style={{ background: 'var(--blue-2)' }}
                >
                  {tab === 'alimento' ? 'Ir para Medicamento x Remédio →' : 'Ir para Medicamento x Alimento →'}
                </button>
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="mt-10 px-4 py-8 text-center text-xs leading-relaxed" style={{ background: 'var(--blue-deep)', color: '#c9d9ec', borderTop: '4px solid var(--blue-2)' }}>
        <img src={logo} alt="TDS FarmaTech" className="mx-auto mb-3 h-12 w-auto rounded-lg ring-1 ring-white/20" />
        <p className="mx-auto max-w-3xl">{DISCLAIMER}</p>
        <p className="mt-3 opacity-70">© {new Date().getFullYear()} TDS FarmaTech — Conteúdo educacional em saúde.</p>
      </footer>

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(8, 30, 57, 0.75)' }}>
          <div className="fade-in w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="h-2 blue-grad" />
            <div className="p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="text-2xl">⚠️</span>
                <h2 className="text-lg font-extrabold" style={{ color: 'var(--blue)' }}>Aviso Importante</h2>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text)' }}>{DISCLAIMER}</p>
              <button
                onClick={() => setModal(false)}
                className="mt-5 w-full rounded-full py-3 text-sm font-bold text-white transition hover:opacity-90"
                style={{ background: 'var(--blue)' }}
              >
                Li e compreendi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
