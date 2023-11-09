import { themeContext } from '../../../hooks/ThemeProvider'
import './BorderButton.css'
import { useContext } from 'react'

function BorderButton({ borderCountries, navigateToBorder }){

    const { defaultTheme } = useContext(themeContext)
    const { bgElements, shadow, fontColor } = defaultTheme

    const borderButtonStyles = {
        backgroundColor: bgElements, 
        color: fontColor, 
        boxShadow: shadow
    }

    return(
        
            borderCountries.map( borderCountry => (
                <button style={ borderButtonStyles } className='country-button' key={borderCountry[0].name.common} 
                 onClick={() => navigateToBorder(borderCountry[0].name.common) }>
                    {borderCountry[0].name.common}
                </button>
            ))
        
    )
}

export default BorderButton