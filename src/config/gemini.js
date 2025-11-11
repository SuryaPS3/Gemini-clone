import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";

// Load environment variables from .env file
dotenv.config({ path: './src/config/.env' });

// Get API key from environment variable
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  throw new Error("GEMINI_API_KEY is not set in environment variables");
}

// Initialize the Gemini AI client
const genAI = new GoogleGenerativeAI(API_KEY);

async function runChat(prompt) {
  try {
    // Get the generative model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Generate content based on user prompt
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return text;
  } catch (error) {
    console.error("Error generating response:", error);
    throw error;
  }
}

export default runChat;