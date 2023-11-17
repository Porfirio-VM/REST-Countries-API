import './CountryCard.css'
import { useNavigate } from 'react-router-dom'
import { useContext, memo} from 'react'
import { themeContext } from '../../hooks/ThemeProvider'
import { countryContext } from '../../hooks/CountryProvider';

function CountryCard(){
    const navigate = useNavigate()
    const { defaultTheme } = useContext(themeContext);
    const { countryList } = useContext(countryContext);
    const { bgElements, shadow, fontColor } = defaultTheme;


    const countryCardStyle = {
        color: fontColor,
        backgroundColor: bgElements, 
        boxShadow: shadow
    }

    const toDetailsPage = (countryName) =>{
        navigate(`/country/${countryName}`)
    }
    
    return(
       <>
        {
            countryList.map( country => (
                <article 
                    className='country' 
                    key={country.name.common} 
                    style={ countryCardStyle } 
                    onClick={() => toDetailsPage(country.name.common)}>
                        <img src={country.flags.png} alt="country flag" />
                        <div className="info-wrapper">
                            <h2>{country.name.common}</h2>
                            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
                            <p><strong>Region:</strong> {country.region}</p>
                            <p><strong>Capital:</strong> {country.capital}</p>
                        </div>
                </article>
            )) 
        }
       </>
    )
}

export default memo(CountryCard)