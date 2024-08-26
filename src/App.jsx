import { createContext, useState } from "react"
import Header from "./components/Header"

export const themeContext = createContext(null);

function App() {

    const [theme, setTheme] = useState("dark");

    return (
        <>
            <themeContext.Provider value={theme}>
                <Header />
            </themeContext.Provider>
        </>
    )
}

export default App











// import { useEffect, useState } from "react"

// function App() {

//     const [count, setCount] = useState(0);
//     const [color, setColor] = useState("red");

//     // useEffect(callBackFunction,dependenciesArray)

//     useEffect(() => {
//         console.log("I will run on every re-render");
//     })

//     useEffect(() => {
//         console.log("App Mounted");
//         return () => {
//             console.log("App UnMounted");
//         }
//     }, [])

//     useEffect(() => {
//         console.log(`${count} / ${color}`);
//     }, [count, color]);

//     return (
//         <>

//             {
//                 show && <Counter />
//             }

//             <p style={{
//                 color: color
//             }}>
//                 Count: {count}
//             </p>
//             <button onClick={() => setCount(count + 1)}>Increase</button>
//             <button onClick={() => setCount(count - 1)}>Decrease</button>

//             <button onClick={() => setColor(color === "red" ? "blue" : "red")}>Toggle Color</button>
//         </>
//     )
// }

// export default App

