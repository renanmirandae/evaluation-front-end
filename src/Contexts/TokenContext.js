import {createContext } from "react";

export const TokenContext = createContext();

const TokenContextProvider = ({ children }) => {
    const setTokenInStorage = (token) =>
    {
        return localStorage.setItem("token", JSON.stringify(token))
    }

    const getTokenFromStorage = () =>
    {
        return JSON.parse(localStorage.getItem("token"));
    }

    const removeTokenFromStorage = () =>
    {
        return localStorage.removeItem("token");
    }

    // const [token, setToken] = useState(getTokenFromStorage());

    // useEffect(() => 
    // {
    //     setTokenInStorage(token);
    // }, [])


    return (
    <TokenContext.Provider value={{removeTokenFromStorage, setTokenInStorage, getTokenFromStorage}}>
        {children}
    </TokenContext.Provider>);
}

export default TokenContextProvider;