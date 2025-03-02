import { createContext, useContext, useState } from "react";

export const ThemeContext = createContext({
    themeMode: 'light',
    setLightMode: () => {},
    setDarkMode: () => {}
})

export const ThemeContextProvider = (({children}) => {
    const [themeMode, setThemeMode] = useState('light')

    const setLightMode = (value) => {
        setThemeMode(value)
    }

    const setDarkMode = (value) => {
        setThemeMode(value)
    }

    return (
        <ThemeContext.Provider value={{themeMode, setLightMode, setDarkMode}}>
            {children}
        </ThemeContext.Provider>
    )
})

// export const ThemeContextProvider = ThemeContext.Provider

export function useThemeMode(){
    return useContext(ThemeContext)
}