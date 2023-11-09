import lMoon from '../assets/moon-light.svg'
import dMoon from '../assets/moon-dark.svg'
import lArrow from '../assets/arrow-ligth.svg'
import dArrow from '../assets/arrow-dark.svg'

export const themes = {
    light: {
        fontColor: "hsl(200, 15%, 8%)",
        background: "hsl(0, 0%, 98%)",
        bgElements: "hsl(0, 0%, 100%)",
        input: "hsl(0, 0%, 52%)",
        shadow: "0 0 12px -4px rgb(0 0 0 / 20%)",
        moon: lMoon,
        arrow: lArrow
    },
    dark: {
        fontColor: "hsl(0, 0%, 100%)",
        background: "hsl(207, 26%, 17%)",
        bgElements: "hsl(209, 23%, 22%)",
        input: "hsl(0, 0%, 100%)",
        shadow: "",
        moon: dMoon,
        arrow: dArrow
    }
}