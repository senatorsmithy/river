import { useState } from 'react'

export const RootRoute = () => {
    const [count, setCount] = useState(0)

    return (
        <div className="container flex min-h-screen flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-4xl font-bold">Vite + React + TypeScript</h1>
                <div className="">
                    <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test HMR
                    </p>
                </div>
            </div>
        </div>
    )
}
