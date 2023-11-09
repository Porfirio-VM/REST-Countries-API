import { useState, createContext } from "react";

export const CountryContext = createContext();

function CountryProvider({ children }){
    const [countryList, setCountryList] = useState([])

    const contextValue = {
        countryList,
        setCountryList
    }

    return(
        <CountryContext.Provider value={contextValue}>
            {children}
        </CountryContext.Provider>
    )
}

export default CountryProvider