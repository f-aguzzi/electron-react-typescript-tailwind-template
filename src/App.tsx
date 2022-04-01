import React from "react"

export default function App() {
    return(
        <div className="App h-screen w-screen bg-gray-700">
            <div className="p-5 text-gray-100">
                <h1 className="text-6xl text-bold text-red-500 text-center my-5">Electron - React - Typescript</h1>
                <h2>Welcome!</h2>
                <b>Start using this template by:</b>
                <ul className="list-disc mx-5">
                    <li>editing the <i>App.tsx</i> page</li>
                    <li>creating React components with the <i>.tsx</i> extension</li>
                    <li>adding <i>className="your-tailwind-properties"</i> to your JSX elements</li>
                </ul>
            </div>
        </div>
    )
}