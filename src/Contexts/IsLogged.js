import {useState, createContext } from "react";

export const IsLoggedContext = createContext();

const IsLoggedContextProvider = ({ children }) => {

    const [isLogged, setIsLogged] = useState(false);

    return (
        <IsLoggedContext.Provider value={{isLogged, setIsLogged}}>
            {children}
        </IsLoggedContext.Provider>
    );
}

export default IsLoggedContextProvider;