import { useState } from "react"
import ThemeContext from "./ThemeContext"

const ThemeContextProvider = (({children}) => {

    const [lightMode, setLightMode] = useState('light')
    return (
        <ThemeContext.Provider value={{lightMode, setLightMode}}>
            {children}
        </ThemeContext.Provider>
    )
})

export default ThemeContextProvider