import { GoogleGenAI } from "@google/genai";
import { VENUE_INFO } from '../constants';

const SYSTEM_INSTRUCTION = `
You are the Virtual Concierge for Silverados WNC, a nightlife venue in Black Mountain, NC.
Your goal is to answer questions helpfully and enthusiastically about the venue.

CRITICAL INFORMATION YOU MUST KNOW:
1. WE DO NOT HOST OUTDOOR CONCERTS ANYMORE. The old Google data is outdated. If someone asks about outdoor shows or big festivals, politely inform them we focus on intimate indoor live music now.
2. We are a Bar & Lounge with Pool Tables.
3. We have Food Trucks on rotation.
4. We are building a Dog Park that opens in 2026.
5. Address: ${VENUE_INFO.address}.
6. Email: ${VENUE_INFO.email}.
7. We are in Black Mountain, NC.

TONE:
Friendly, welcoming, casual, "local bar" vibes.
Keep answers concise (under 3 sentences unless asked for detail).
`;

let ai: GoogleGenAI | null = null;

const getAI = (): GoogleGenAI => {
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export const chatWithConcierge = async (userMessage: string): Promise<string> => {
  try {
    const client = getAI();
    
    // Using a simple generateContent call for a single turn Q&A for simplicity in this demo,
    // but in a real persistent chat, we would use ai.chats.create().
    // We treat every message as a fresh query with context in the system instruction for this specific UI implementation.
    
    const response = await client.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I'm having a little trouble hearing you over the music! Try asking again.";
  } catch (error) {
    console.error("Error talking to Gemini:", error);
    return "Sorry, I'm taking a quick break. Ask a bartender (or try again later)!";
  }
};