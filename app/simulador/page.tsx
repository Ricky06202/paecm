'use client'

import { useState, useRef, useEffect } from 'react'
import {
  Send,
  User,
  Bot,
  RefreshCcw,
  LayoutDashboard,
  MessageSquare,
} from 'lucide-react'
import Link from 'next/link'

interface Message {
  role: 'user' | 'model'
  content: string
}

export default function SimuladorPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'model',
      content:
        'Bienvenido al AI Executive Communication Lab. El simulador está listo para evaluarlo bajo el modelo PAECM. Para iniciar el escenario de crisis, por favor salude o indique que está preparado.',
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: 'user', content: input }
    const newMessages = [...messages, userMessage]
    setMessages(newMessages)
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })

      if (!response.ok) throw new Error('Error en la conexión')

      const reader = response.body?.getReader()
      const decoder = new TextEncoder()
      let assistantContent = ''

      setMessages((prev) => [...prev, { role: 'model', content: '' }])

      while (true) {
        const { done, value } = await reader!.read()
        if (done) break

        const chunk = new TextDecoder().decode(value)
        assistantContent += chunk

        setMessages((prev) => {
          const updated = [...prev]
          updated[updated.length - 1].content = assistantContent
          return updated
        })
      }
    } catch (error) {
      console.error(error)
      setMessages((prev) => [
        ...prev,
        {
          role: 'model',
          content:
            'Lo siento, hubo un error de conexión con la IA. Por favor, verifica tu API Key.',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6 flex flex-col">
        <div className="mb-10">
          <h1 className="text-xl font-bold tracking-tight text-blue-400">
            AI EXECUTIVE
          </h1>
          <p className="text-xs text-slate-400">Communication Lab - PAECM</p>
        </div>

        <nav className="flex-1 space-y-2">
          <Link
            href="/simulador"
            className="flex items-center gap-3 bg-slate-800 p-3 rounded-lg text-sm font-medium"
          >
            <MessageSquare size={18} />
            Simulador de Crisis
          </Link>
          <Link
            href="/dashboard"
            className="flex items-center gap-3 hover:bg-slate-800 p-3 rounded-lg text-sm font-medium transition-colors"
          >
            <LayoutDashboard size={18} />
            Métricas de Liderazgo
          </Link>
        </nav>

        <div className="mt-auto pt-6 border-t border-slate-800">
          <button
            onClick={() =>
              setMessages([
                {
                  role: 'model',
                  content:
                    'Sesión reiniciada. ¿En qué crisis trabajaremos hoy?',
                },
              ])
            }
            className="flex items-center gap-3 text-slate-400 hover:text-white text-sm transition-colors"
          >
            <RefreshCcw size={16} />
            Reiniciar Simulación
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative max-w-4xl mx-auto shadow-xl bg-white m-4 rounded-2xl overflow-hidden border border-slate-200">
        <header className="p-6 border-b border-slate-100 flex justify-between items-center bg-white z-10">
          <div>
            <h2 className="text-lg font-semibold">Simulador de Crisis PAECM</h2>
            <p className="text-sm text-slate-500">
              Escenario: Conflicto Corporativo en Panamá
            </p>
          </div>
          <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider">
            Sesión Activa
          </div>
        </header>

        {/* Chat Area */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50"
        >
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`flex gap-3 max-w-[80%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                    m.role === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {m.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div
                  className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    m.role === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
                  }`}
                >
                  {m.content || (
                    <div className="flex gap-1">
                      <span className="animate-bounce">.</span>
                      <span className="animate-bounce delay-75">.</span>
                      <span className="animate-bounce delay-150">.</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <footer className="p-6 bg-white border-t border-slate-100">
          <div className="relative flex items-center group">
            <textarea
              className="w-full bg-slate-100 text-slate-900 text-sm rounded-xl py-4 pl-4 pr-14 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all resize-none border border-transparent focus:border-blue-500/50"
              rows={1}
              placeholder="Responda como un ejecutivo líder..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleSend()
                }
              }}
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="absolute right-3 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors shadow-md shadow-blue-500/20"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="mt-3 text-[10px] text-center text-slate-400 uppercase tracking-widest font-medium">
            Evaluando: Empatía • Asertividad • Contexto Local • Resolución
          </p>
        </footer>
      </main>
    </div>
  )
}
