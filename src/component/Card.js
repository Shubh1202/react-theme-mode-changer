const Card = () => {
    return (
        <div className="relative flex flex-col bg-white dark:bg-gray-900 shadow-sm border border-slate-200 dark:border-gray-700 rounded-lg w-96">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                    alt="card-image" />
            </div>
            <div className="p-4">
                <div className="mb-2 flex items-center justify-between">
                    <p className="text-slate-800 dark:text-gray-200 text-xl font-semibold">
                        What is an AI Agent
                    </p>
                    <p className="text-cyan-600 dark:text-cyan-400 text-xl font-semibold">
                        $95.00
                    </p>
                </div>
                <p className="text-slate-600 dark:text-gray-400 leading-normal font-light">
                    With plenty of talk and listen time, voice-activated Siri access, and
                    an available wireless charging case.
                </p>
                <button className="rounded-md w-full mt-6 bg-cyan-600 dark:bg-cyan-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-cyan-700 focus:shadow-none active:bg-cyan-700 hover:bg-cyan-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                    Read More
                </button>
            </div>
        </div>

    )
}

export default Card