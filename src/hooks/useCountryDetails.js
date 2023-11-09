import { useEffect, useState } from "react";
import { API_URL_BY_NAME, API_URL_BY_CODE } from "../constants/constants";

function useCountryDetails(countryName){
    const [countryDetails, setCountryDetails] = useState([])
    const [borderCountries, setBorderCountries] = useState();
    
    useEffect(()=> {
        fetch(API_URL_BY_NAME(countryName))
        .then( res => res.json())
        .then(data =>{
            setCountryDetails(data[0])
            if(data[0].borders && data[0].borders.length > 0){
                const borderCountryCodes = data[0].borders
                Promise.all(
                    borderCountryCodes.map( code => 
                            fetch(API_URL_BY_CODE(code)) 
                            .then( res => res.json())
                        )
                )
                .then((borderCountriesData) => {
                    setBorderCountries(borderCountriesData);
                })
                .catch((error) => {
                    console.error("Error fetching border countries:", error);
                });
            }
        })
    },[countryName])


    return { countryDetails, borderCountries }

}

export default useCountryDetails