import { useContext } from 'react'
import './FilterSection.css'
import { themeContext } from '../../hooks/ThemeProvider'
import { REGIONS } from '../../constants/constants'
import { countryContext } from '../../hooks/CountryProvider';

function FilterSection(){

    const { defaultTheme } = useContext(themeContext);
    const { bgElements, shadow, fontColor, search } = defaultTheme;
    const { searchByName, searchByRegion } = useContext(countryContext)

    const inputStyles = {
        backgroundColor: bgElements,
        boxShadow: shadow,
        color: fontColor
    };

    const selectStyles = {
        boxShadow: shadow,
        backgroundColor: bgElements,
        color: fontColor,
    };

    return (
        <section className='filter-section'>
            <form action="" className="flex filter-wrapper">
                <label htmlFor="country-select" className='flex input-wrapper' style={inputStyles}>
                    <img src={search} alt="" className='icon'/>
                    <input type="text" id='country' placeholder="Search for a country..." onChange={(e) => searchByName(e)} />
                </label>
                <select  name="country-selector" id="country-select" style={selectStyles} onChange={(e) => searchByRegion(e)} className='filter-region'>
                <option defaultValue="" hidden>Filter by region</option>
                    {
                        REGIONS.map( region => (
                            <option key={region} value={region} >
                                {region}
                            </option>
                        ))
                    }
                </select>
            </form>  
        </section>
    )
}

export default FilterSection

