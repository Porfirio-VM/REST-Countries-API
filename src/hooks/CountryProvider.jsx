import { useState, createContext } from "react";

export const countryContext = createContext();

function CountryProvider({ children }){
    const [countryList, setCountryList] = useState([])

    const contextValue = {
        countryList,
        setCountryList
    }

    return(
        <countryContext.Provider value={contextValue}>
            {children}
        </countryContext.Provider>
    )
}

export default CountryProvider