import { createContext } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
    const contextValue = {};//this is an object
    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
}

export default ContextProvider;