import {
  LayoutDashboard,
  TrendingUp,
  Users,
  Target,
  Award,
  ArrowLeft,
} from 'lucide-react'
import Link from 'next/link'

export default function DashboardPage() {
  // Static data for MVP demonstration
  const metrics = [
    {
      label: 'Empatía',
      score: 85,
      color: 'bg-blue-500',
      icon: <Users size={20} />,
    },
    {
      label: 'Asertividad',
      score: 72,
      color: 'bg-indigo-500',
      icon: <Target size={20} />,
    },
    {
      label: 'Contexto Local',
      score: 90,
      color: 'bg-green-500',
      icon: <Award size={20} />,
    },
    {
      label: 'Resolución',
      score: 65,
      color: 'bg-amber-500',
      icon: <TrendingUp size={20} />,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-10 flex justify-between items-end">
          <div>
            <Link
              href="/simulador"
              className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center gap-2 mb-4 group"
            >
              <ArrowLeft
                size={16}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Volver al Simulador
            </Link>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Métricas de Liderazgo
            </h1>
            <p className="text-slate-500 mt-2">
              Personal AI Executive Communication Analysis
            </p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 text-center">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">
              Global Score
            </span>
            <span className="text-4xl font-black text-blue-600">78</span>
            <span className="text-sm text-slate-400 font-medium italic">
              /100
            </span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-200 transition-colors"
            >
              <div
                className={`w-10 h-10 rounded-xl ${m.color.replace('bg-', 'bg-opacity-10 ')} ${m.color.replace('bg-', 'text-')} flex items-center justify-center mb-4`}
              >
                {m.icon}
              </div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                {m.label}
              </h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-3xl font-bold">{m.score}</span>
                <span className="text-xs text-slate-400 mb-1 font-bold">%</span>
              </div>
              <div className="mt-4 w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                <div
                  className={`${m.color} h-full rounded-full transition-all duration-1000`}
                  style={{ width: `${m.score}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold mb-6">
              Análisis de Desempeño PAECM
            </h3>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Tu interacción en la crisis reciente demuestra un alto grado de{' '}
                <strong>Contexto Local Panameño</strong>. El uso de protocolos
                corporativos locales y el respeto a las jerarquías facilitaron
                la apertura del canal de comunicación.
              </p>
              <div className="p-5 bg-blue-50 border-l-4 border-blue-500 rounded-r-xl">
                <p className="text-sm text-blue-800 italic">
                  "Se recomienda incrementar la <strong>Asertividad</strong> en
                  las etapas medias de la negociación para evitar procesos
                  circulares en la toma de decisiones."
                </p>
              </div>
              <p>
                En cuanto a la <strong>Resolución de Conflictos</strong>, se
                detectó una tendencia a la conciliación rápida. Si bien es
                positivo para el clima organizacional, en escenarios de
                accionistas podría interpretarse como debilidad en la defensa de
                intereses estratégicos.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl shadow-slate-200 overflow-hidden relative">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-6">Próximos Pasos</h3>
              <ul className="space-y-4">
                {[
                  'Módulo de Negociación Internacional',
                  'Manejo de Prensa y Relaciones Públicas',
                  'Comunicación No Verbal en Zoom/Teams',
                  'Taller de Oratoria para Juntas Directivas',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-slate-300 hover:text-white transition-colors cursor-pointer group"
                  >
                    <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                      <span className="text-[10px]">{i + 1}</span>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20">
                Mejorar mi Perfil
              </button>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
