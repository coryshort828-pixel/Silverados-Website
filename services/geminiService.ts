import { GoogleGenAI } from "@google/genai";
import { VENUE_INFO } from '../constants';

const SYSTEM_INSTRUCTION = `
You are the Virtual Concierge for Silverados WNC, a nightlife venue in Black Mountain, NC.
Your goal is to answer questions helpfully and enthusiastically about the venue.

CRITICAL INFORMATION YOU MUST KNOW:
1. WE DO NOT HOST OUTDOOR CONCERTS ANYMORE. The old Google data is outdated. If someone asks about outdoor shows or big festivals, politely inform them we focus on intimate indoor live music now.
2. We are a Bar & Lounge with Pool Tables. We take pride in our well-maintained tables.
3. We have Food Trucks on rotation - usually local favorites.
4. We are building a high-end Dog Park that opens in 2026. This is a major upcoming feature.
5. Address: ${VENUE_INFO.address}.
6. Email: ${VENUE_INFO.email}.
7. We are in Black Mountain, NC, just outside Asheville.

TONE:
Professional yet casual. Use "mountain-chill" language but stay precise. 
Keep answers concise (under 3 sentences). 
If asked about drinks, mention our local craft beer selection.
`;

let ai: GoogleGenAI | null = null;

const getAI = (): GoogleGenAI => {
  if (!process.env.API_KEY) {
    throw new Error("Missing API_KEY environment variable. Chat functionality disabled.");
  }
  if (!ai) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return ai;
};

export const chatWithConcierge = async (userMessage: string): Promise<string> => {
  try {
    const client = getAI();
    
    const response = await client.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7, // Add a bit of personality
        topP: 0.8,
      }
    });

    if (!response.text) {
      throw new Error("Empty response from AI");
    }

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    // Return a graceful fallback message that the component can handle
    return "I'm having a hard time connecting to the Silverados server right now. It might be the mountain weather! Please ask a staff member or check our social media for the latest.";
  }
};