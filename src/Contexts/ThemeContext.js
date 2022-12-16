import {createContext, useState} from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) =>
{

    const [isDark, setIsDark] = useState(false);

    const chooseTheme = () => setIsDark(!isDark);


    return(
        <ThemeContext.Provider value={{isDark, chooseTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;