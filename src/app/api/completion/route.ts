import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { GoogleGenerativeAIStream, StreamingTextResponse } from 'ai';

// Initialize the GoogleGenerativeAI instance with your API key
const genAI = new GoogleGenerativeAI('AIzaSyAiPInrVvSrRneWx9ViAeEA3Bspfs6Odyk');

// POST handler for the API route
export async function POST(req: NextRequest) {
  try {
    // Extract the `prompt` from the body of the request
    const { prompt } = await req.json();

    // Request completion from the Google Generative AI model
    const response = await genAI
      .getGenerativeModel({ model: 'gemini-pro' })
      .generateContentStream({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
      });

    // Convert the AI response into a streaming text response
    const stream = GoogleGenerativeAIStream(response);

    // Return the streamed response
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
