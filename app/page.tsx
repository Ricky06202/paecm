import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  MessageCircle,
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] bg-indigo-600/10 rounded-full blur-[100px]"></div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32">
        <nav className="flex justify-between items-center mb-24">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold">
              A
            </div>
            <span className="text-xl font-bold tracking-tight">
              AI EXECUTIVE LAB
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-white transition-colors">
              Metodología
            </a>
            <a href="#" className="hover:text-white transition-colors">
              PAECM
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Empresas
            </a>
          </div>
          <Link
            href="/simulador"
            className="px-6 py-2.5 bg-white text-slate-900 rounded-full text-sm font-bold hover:bg-slate-200 transition-all shadow-xl shadow-white/5"
          >
            Iniciar Sesión
          </Link>
        </nav>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Zap size={14} />
              Panama AI Executive Communication Model
            </div>
            <h1 className="text-6xl md:text-7xl font-black leading-[1.1] tracking-tight mb-8">
              El Impacto de la <span className="text-blue-500">IA</span> en el
              Liderazgo.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-xl">
              Perfeccione su comunicación directiva con simulaciones de crisis
              de alta fidelidad adaptadas a la cultura empresarial de Panamá.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/simulador"
                className="group flex items-center justify-center gap-3 px-8 py-5 bg-blue-600 hover:bg-blue-700 rounded-2xl font-bold text-lg transition-all shadow-2xl shadow-blue-500/20"
              >
                Acceder al Simulador
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/dashboard"
                className="flex items-center justify-center gap-3 px-8 py-5 bg-slate-800 hover:bg-slate-700 rounded-2xl font-bold text-lg transition-all"
              >
                Ver Demo de Métricas
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-500/20 rounded-2xl flex items-center justify-center">
                  <MessageCircle className="text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Simulador PAECM</h3>
                  <p className="text-sm text-slate-400">
                    Evaluación en tiempo real
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-900/50 rounded-2xl border border-white/5">
                  <p className="text-xs text-slate-500 mb-1 font-bold">
                    MODELO PROVOCADOR
                  </p>
                  <p className="text-sm italic text-slate-300">
                    "Señor Director, la junta de accionistas en Panamá no está
                    conforme con los resultados del Q3. ¿Cómo planea justificar
                    esto?"
                  </p>
                </div>
                <div className="p-4 bg-blue-600/20 rounded-2xl border border-blue-500/30 ml-8">
                  <p className="text-xs text-blue-400 mb-1 font-bold">
                    RESPUESTA EJECUTIVA
                  </p>
                  <p className="text-sm">
                    "Comprendo la inquietud. Estamos enfocados en la
                    transparencia y eficiencia operativa..."
                  </p>
                </div>
                <div className="flex gap-2 pt-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="flex-1 h-1.5 bg-blue-500/20 rounded-full overflow-hidden"
                    >
                      <div
                        className="h-full bg-blue-500 w-[70%]"
                        style={{ width: `${40 + i * 15}%` }}
                      ></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Background Glow for image area */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none"></div>
          </div>
        </div>

        <div className="mt-32 grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<ShieldCheck className="text-blue-400" />}
            title="Protocolo Panameño"
            description="Entrenado en la cultura corporativa local, desde el lenguaje formal hasta el networking."
          />
          <FeatureCard
            icon={<Zap className="text-indigo-400" />}
            title="Análisis IA"
            description="Evaluación inmediata de Empatía, Asertividad y Resolución con Gemini 2.0 Flash."
          />
          <FeatureCard
            icon={<Globe className="text-green-400" />}
            title="Escenarios Reales"
            description="Simulación de huelgas, juntas directivas, crisis mediäticas y conflictos internos."
          />
        </div>
      </main>

      <footer className="relative z-10 py-12 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>
          &copy; 2026 AI Executive Communication Lab - Panamá. Basado en el
          framework PAECM.
        </p>
      </footer>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="p-8 bg-slate-800/30 border border-white/5 rounded-3xl hover:bg-slate-800/50 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed text-sm">{description}</p>
    </div>
  )
}
