import { GoogleGenerativeAI } from '@google/generative-ai'
import { SYSTEM_PERSONA, PAECM_METRICS } from './paecm/rules'

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || ''
const genAI = new GoogleGenerativeAI(apiKey)

export const getSystemPrompt = () => {
  return `
${SYSTEM_PERSONA}

MÉTRICAS DE EVALUACIÓN (PAECM):
${JSON.stringify(PAECM_METRICS, null, 2)}

INSTRUCCIONES CRÍTICAS:
1. **INICIO INMEDIATO**: Tan pronto como el usuario diga algo como "hola" o "empezar", NO respondas de forma genérica. Debes presentarte como el CLIENTE/EMPLEADO/ACCIONISTA en crisis y plantear el problema de forma directa y urgente.
2. **MANTÉN EL PERSONA**: No admitas ser una IA evaluadora durante la simulación. Actúa el papel del provocador hasta que la crisis se resuelva o el usuario pida feedback.
3. **CONTEXTO PANAMÁ**: Usa referencias a leyes locales, instituciones panameñas (CSS, Mitradel, MEF si aplica) o situaciones de la plaza.
4. **FORMATO**: Usa Markdown para que el texto sea legible.
`
}

export const model = genAI.getGenerativeModel({
  model: 'gemini-2.5-flash', // Using 2.5 Flash as it's the current recommended free/fast model
  systemInstruction: getSystemPrompt(),
})
