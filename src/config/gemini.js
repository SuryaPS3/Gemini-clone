import { GoogleGenAI } from "@google/genai";

// Get API key from environment variable
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error("VITE_GEMINI_API_KEY is not set in environment variables");
}

// The client gets the API key from the environment variable
const ai = new GoogleGenAI({
  apiKey: API_KEY
});

async function runChat(prompt) {
  try {
    // Generate content using the new API format (matching documentation)
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error generating response:", error);
    throw error;
  }
}

export default runChat;