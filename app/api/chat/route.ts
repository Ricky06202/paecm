import { model } from '@/lib/gemini'

export const runtime = 'edge'

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    if (!messages || !Array.isArray(messages)) {
      return new Response('Messages are required', { status: 400 })
    }

    const history = messages.slice(0, -1).map((m: any) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }],
    }))

    // Filtramos para que empiece con 'user' si el historial contiene algo
    const firstUserIndex = history.findIndex((m: any) => m.role === 'user')
    const validHistory =
      firstUserIndex !== -1 ? history.slice(firstUserIndex) : []

    const chat = model.startChat({
      history: validHistory,
      generationConfig: {
        maxOutputTokens: 2048,
      },
    })

    const lastMessage = messages[messages.length - 1].content
    const result = await chat.sendMessageStream(lastMessage)

    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of result.stream) {
          const text = chunk.text()
          controller.enqueue(encoder.encode(text))
        }
        controller.close()
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    })
  } catch (error: any) {
    console.error('Chat API Error:', error)
    return new Response(error.message || 'Internal Server Error', {
      status: 500,
    })
  }
}
