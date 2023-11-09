import { useContext } from "react"
import CountrySection from "../CountrySection/CountrySection"
import FilterSection from "../FilterSection/FilterSection"

import './Main.css'
import { themeContext } from "../../hooks/ThemeProvider"
function Main(){
    const { defaultTheme } = useContext(themeContext)
    const { background, shadow } = defaultTheme

    const mainStyles = {
        backgroundColor: background, 
        boxShadow: shadow
    }

    return(
        <main className="main-section" style={ mainStyles }>
            <FilterSection />
            <CountrySection />
        </main>
    )
}

export default Main