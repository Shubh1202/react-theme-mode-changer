import ThemeSwitcher from "./component/ThemeSwitcher"
import Card from "./component/Card"

const App = () => {
    return (
        <div className="flex flex-wrap min-h-screen items-center">
            <div className="w-full">
                <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                    <ThemeSwitcher />
                </div>
                <div className="w-full max-w-sm mx-auto">
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default App