import { createContext, useContext } from "react";
import useCountry from "./useCountry";

export const countryContext = createContext();

function CountryProvider({ children }){
    const { countryList, searchByName, searchByRegion } = useCountry();

    const contextValue = { countryList, searchByName, searchByRegion }

    return(
        <countryContext.Provider value={contextValue}>
            {children}
        </countryContext.Provider>
    )
}

export default CountryProvider