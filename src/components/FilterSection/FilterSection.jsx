import { useContext } from 'react'
import './FilterSection.css'
import { themeContext } from '../../hooks/ThemeProvider'
import useCountry from '../../hooks/useCountry'
import { REGIONS } from '../../constants/constants'

function FilterSection(){

    const { defaultTheme } = useContext(themeContext);
    const { bgElements, shadow, fontColor, search } = defaultTheme;
    const { searchByName, searchByRegion } = useCountry();

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
                <label htmlFor="country" className='flex input-wrapper' style={inputStyles}>
                    <img src={search} alt="" className='icon'/>
                    <input type="text" id='country' placeholder="Search for a country..." onChange={(e) => searchByName(e)} />
                </label>
                <select name="" id="" style={selectStyles} onChange={(e) => searchByRegion(e)} className='filter-region'>
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

