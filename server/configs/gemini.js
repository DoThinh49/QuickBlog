import { GoogleGenAI } from "@google/genai";

// Client gets API key from GEMINI_API_KEY env variable
const ai = new GoogleGenAI({});

async function main(prompt) {
  if (!prompt) throw new Error("Missing prompt");
  if (!process.env.GEMINI_API_KEY) throw new Error("Missing GEMINI_API_KEY");

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: prompt,
  });
  
  return response.text;
}

export default main;