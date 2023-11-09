import { createContext, useState } from 'react'
import { themes } from '../themes/themes';

export const themeContext = createContext();

function ThemeProvider({ children }){
    const[defaultTheme, setTheme] = useState(themes.light)

    const changeTheme = () =>{
    setTheme( defaultTheme === themes.light? themes.dark : themes.light )
  }

    const contextValue = {
        defaultTheme,
        changeTheme
    }

    return(
        <themeContext.Provider value={contextValue}>
            {children}
        </themeContext.Provider>
    )
}

export default ThemeProvider