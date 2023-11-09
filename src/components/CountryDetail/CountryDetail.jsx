import { useParams, useNavigate } from "react-router-dom"
import { useContext} from "react";
import { themeContext } from "../../hooks/ThemeProvider";
import BorderButton from "./BorderButton/BorderButton";
import "./CountryDetail.css"
import useCountryDetails from "../../hooks/useCountryDetails";

function CountryDetail(){

    const navigate = useNavigate();
    const { countryName } = useParams();
    const { defaultTheme } = useContext(themeContext);
    const { background, shadow, fontColor, arrow, bgElements } = defaultTheme;
    const { countryDetails, borderCountries } = useCountryDetails(countryName);

    const handleReturn = () =>{
        navigate('/')
    }


    const navigateToBorder = (country) =>{
       navigate(`/country/${country}`)
    }

    const renderMultipleObjects = (objects, name) => {
        return Object.values(objects).map((object) => {
          if (name && object[name]) {
            return object[name];
          }else{
            return object;
          }
        }).join(', ');
      }

      const detailSectionStyles = {
        backgroundColor: background, 
        boxShadow: shadow, 
        color: fontColor 
      }

      const returnButtonStyles = {
        color:fontColor, 
        backgroundColor: 
        bgElements, 
        boxShadow:shadow
      }

    return (
    <section className="detail-section" style={ detailSectionStyles }>
        <button className="flex return-button" onClick={ handleReturn } style={ returnButtonStyles }>
            <img src={arrow} alt="" />
            Back
        </button>
        <article className="grid country-detail">
            <img src={countryDetails.flags?.svg} alt={`${countryName}-flag`}/>
            <aside className="detail-wrapper">
                <h1>{countryDetails.name?.common}</h1>
                <div className="grid country-info">
                    <div className="first-info">
                        <p><strong>Native Name: </strong>{countryDetails.name?.official}</p>
                        <p><strong>Population: </strong>{countryDetails?.population}</p>
                        <p><strong>Region: </strong>{countryDetails?.region}</p>
                        <p><strong>Sub Region: </strong>{countryDetails?.subregion}</p>
                        <p><strong>Capital: </strong>{countryDetails.capital}</p>
                    </div>
                    <div className="second-info">
                        <p><strong>Top Level Domain: </strong>{countryDetails?.tld}</p>
                        <p><strong>Currencies: </strong>{
                            countryDetails.currencies ?
                            renderMultipleObjects(countryDetails.currencies, 'name')
                            : ""
                        }</p>
                        <p><strong>Languages: </strong>{
                            countryDetails.languages? 
                            renderMultipleObjects(countryDetails.languages)
                            : 
                            ""
                        }</p>
                    </div>
                </div>
                <div className="flex country-info_footer">
                    <strong>Border countries: </strong>
                    <div className="flex buttons-wrapper">
                        {countryDetails.borders && borderCountries ?
                        <BorderButton borderCountries={borderCountries} navigateToBorder={navigateToBorder}/>
                        :
                        "It has no bordering country"
                        }
                    </div>
                </div>
            </aside>
        </article>
    </section>)
}

export default CountryDetail