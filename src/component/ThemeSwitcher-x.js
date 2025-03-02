import { useContext, useEffect } from "react"
import ThemeContext from "../context/ThemeContext"

const ThemeSwitcher = () => {
    const {lightMode, setLightMode} = useContext(ThemeContext)

    const handleMode = (modeValue) => {
        const htmlNode = document.querySelector('html')
        htmlNode.classList.remove("dark")
        htmlNode.classList.add(modeValue)
        console.log(htmlNode)   
    }

    useEffect(() => {
        const htmlNode = document.querySelector('html')
        htmlNode.classList.remove("dark")
        htmlNode.classList.add(lightMode)
        console.log(htmlNode)        
    }, [lightMode])

    return (
        <div className="row-start-5 grid lg:col-start-3">
            <div>
                <div className="mx-auto flex w-full flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8 max-w-2xl lg:max-w-5xl">
                    <div
                        className="relative z-0 inline-grid grid-cols-2 gap-1 rounded-full bg-gray-200 dark:bg-gray-800 p-1 text-gray-950 dark:text-white"
                        role="radiogroup"
                    >
                        {/* Light Mode Button */}
                        <span
                            className="cursor-pointer rounded-full p-2 transition-all duration-300 hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 dark:focus:ring-white"
                            aria-label="Light theme"
                            role="radio"
                            onClick={e => handleMode('dark')}
                        >
                            <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
                                <circle cx="14" cy="14" r="3.5" stroke="currentColor"></circle>
                                <path d="M14 8.5V6.5" stroke="currentColor" strokeLinecap="round"></path>
                                <path d="M17.889 10.1115L19.3032 8.69727" stroke="currentColor" strokeLinecap="round"></path>
                                <path d="M19.5 14L21.5 14" stroke="currentColor" strokeLinecap="round"></path>
                                <path d="M17.889 17.8885L19.3032 19.3027" stroke="currentColor" strokeLinecap="round"></path>
                                <path d="M14 21.5V19.5" stroke="currentColor" strokeLinecap="round"></path>
                                <path d="M8.69663 19.3029L10.1108 17.8887" stroke="currentColor" strokeLinecap="round"></path>
                                <path d="M6.5 14L8.5 14" stroke="currentColor" strokeLinecap="round"></path>
                                <path d="M8.69663 8.69711L10.1108 10.1113" stroke="currentColor" strokeLinecap="round"></path>
                            </svg>
                        </span>

                        {/* Dark Mode Button */}
                        <span
                            className="cursor-pointer rounded-full p-2 transition-all duration-300 bg-white dark:bg-gray-700 text-black dark:text-white ring-2 ring-gray-500 dark:ring-gray-300"
                            aria-label="Dark theme"
                            role="radio"
                            onClick={e => handleMode('light')}
                        >
                            <svg viewBox="0 0 28 28" fill="none" className="w-6 h-6">
                                <path d="M10.5 9.99914C10.5 14.1413 13.8579 17.4991 18 17.4991C19.0332 17.4991 20.0176 17.2902 20.9132 16.9123C19.7761 19.6075 17.109 21.4991 14 21.4991C9.85786 21.4991 6.5 18.1413 6.5 13.9991C6.5 10.8902 8.39167 8.22304 11.0868 7.08594C10.7089 7.98159 10.5 8.96597 10.5 9.99914Z" stroke="currentColor" strokeLinejoin="round"></path>
                                <path d="M16.3561 6.50754L16.5 5.5L16.6439 6.50754C16.7068 6.94752 17.0525 7.29321 17.4925 7.35607L18.5 7.5L17.4925 7.64393C17.0525 7.70679 16.7068 8.05248 16.6439 8.49246L16.5 9.5L16.3561 8.49246C16.2932 8.05248 15.9475 7.70679 15.5075 7.64393L14.5 7.5L15.5075 7.35607C15.9475 7.29321 16.2932 6.94752 16.3561 6.50754Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                                <path d="M20.3561 11.5075L20.5 10.5L20.6439 11.5075C20.7068 11.9475 21.0525 12.2932 21.4925 12.3561L22.5 12.5L21.4925 12.6439C21.0525 12.7068 20.7068 13.0525 20.6439 13.4925L20.5 14.5L20.3561 13.4925C20.2932 13.0525 19.9475 12.7068 19.5075 12.6439L18.5 12.5L19.5075 12.3561C19.9475 12.2932 20.2932 11.9475 20.3561 11.5075Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ThemeSwitcher