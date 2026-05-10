import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const ollamaHost = process.env.OLLAMA_HOST || 'http://localhost:11434';

    const response = await fetch(`${ollamaHost}/api/generate`, {
      method: 'POST',
      body: JSON.stringify({
        model: 'llama3', // or phi3
        prompt: prompt,
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error('Ollama service unavailable');
    }

    const data = await response.json();
    return NextResponse.json({ response: data.response });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
