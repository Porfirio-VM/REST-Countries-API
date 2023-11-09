import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './Header.css'
import { themeContext } from '../../hooks/ThemeProvider'

function Header(){

    const navigate = useNavigate();
    const { defaultTheme, changeTheme } = useContext( themeContext );
    const { bgElements, fontColor, moon } = defaultTheme;

    const returnHome = () =>{
        navigate('/');
    }

    const headerStyles = {
        background: bgElements, 
        color: fontColor
    }

    const buttonStyles = {
        color: fontColor
    }

    return (
        <header className="flex header-section" style={ headerStyles }>
            <h1 onClick={returnHome}>Where in the world?</h1>
            <button onClick={changeTheme} className='flex theme-switcher' style={ buttonStyles }>
                <img src={moon} alt="" className=' icon'/>
                Dark Mode
            </button>
        </header>
        )
}

export default Header