
import { Link } from 'react-router-dom'
import { useContext, memo} from 'react'
import { themeContext } from '../../hooks/ThemeProvider'
import useCountry from '../../hooks/useCountry';

function CountryCard(){

    const { defaultTheme } = useContext(themeContext);
    const { bgElements, fontColor, shadow } = defaultTheme;

    const { countryList } = useCountry();

    const countryCardStyle = {
        backgroundColor: bgElements, 
        boxShadow: shadow
    }

    const linkToDetailsStyle = {
        textDecoration : "none", 
        color: fontColor
    }

    return(
       <>
        {
            countryList.map( country => (
                <article className='country' key={country.name.common} style={ countryCardStyle }>
                    <Link to={`/country/${country.name.common}`} style={ linkToDetailsStyle }>
                        <img src={country.flags.png} alt="" />
                        <div className="info-wrapper">
                            <h2>{country.name.common}</h2>
                            <p><strong>Population:</strong> {country.population}</p>
                            <p><strong>Region:</strong> {country.region}</p>
                            <p><strong>Capital:</strong> {country.capital}</p>
                        </div>
                    </Link>
                </article>
            )) 
        }
       </>
    )
}

export default memo(CountryCard)