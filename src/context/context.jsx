import { createContext, useState } from "react";
import runChat from "../config/gemini.js";
export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord)=>{
        setTimeout(function (){
            setResultData(prev=>prev+nextWord);
        },75*index)
    }

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setPrevPrompts(prev => [...prev, input]);
        let response;
        try {
            if (prompt !== undefined) {
                response = await runChat(prompt);
                setRecentPrompt(prompt);
            } else {
                setPrevPrompts(prev => [...prev, input]);
                setRecentPrompt(input);
                response = await runChat(input);
            }
        } catch (error) {
            console.error("Error in onSent:", error);
            response = "Sorry, there was an error processing your request.";
        }
        // Convert markdown to HTML
        let newResponse = response
            .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')  // **bold** to <b>bold</b>
            .replace(/\*(.*?)\*/g, '<i>$1</i>')      // *italic* to <i>italic</i>
            .replace(/\n/g, '<br/>')                 // newlines to <br/>
            .replace(/##(.*?)(?=\n|$)/g, '<h2>$1</h2>') // ## heading
            .replace(/#(.*?)(?=\n|$)/g, '<h1>$1</h1>');  // # heading

        let newResponse2 = newResponse;
        let newResponseFinal = newResponse2.split(" ");
        
        setLoading(false);
        setResultData("");
        
        for(let i = 0; i < newResponseFinal.length; i++){
            const nextWord = newResponseFinal[i];
            delayPara(i, nextWord + " ");
        }
        setInput("");
    }

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider;