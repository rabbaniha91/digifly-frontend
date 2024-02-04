import { createContext, useContext, useState } from "react";


const statesContext = createContext()


export const ContextProvider = ({ children }) => {
    const [brands, setBrands] = useState([])

    return <statesContext.Provider value={{ brands, setBrands }}>
        {children}
    </statesContext.Provider>
}


export const useStateContext = () => useContext(statesContext)