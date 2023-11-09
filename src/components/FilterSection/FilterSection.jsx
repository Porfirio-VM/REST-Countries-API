import { useContext } from 'react'
import './FilterSection.css'
import { themeContext } from '../../hooks/ThemeProvider'
import useCountry from '../../hooks/useCountry'
import { REGIONS } from '../../constants/constants'

function FilterSection(){

    const { defaultTheme } = useContext(themeContext);
    const { bgElements, shadow, fontColor } = defaultTheme;
    const { searchCountry, filterByRegion } = useCountry();

    const inputStyles = {
        backgroundColor: bgElements,
        boxShadow: shadow,
    };

    const selectStyles = {
        boxShadow: shadow,
        backgroundColor: bgElements,
        color: fontColor,
    };

    return (
        <section className='filter-section'>
            <form action="" className="flex filter-wrapper">
                <label htmlFor="country" className='input-wrapper' style={inputStyles}>
                    <input type="text" id='country' placeholder="Search for a country..." onChange={(e) => searchCountry(e)} />
                </label>
                <select name="" id="" style={selectStyles} onChange={(e) => filterByRegion(e)} className='filter-region'>
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

