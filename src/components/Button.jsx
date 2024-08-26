import { useContext } from "react"
import { themeContext } from "../App"

function Button() {

    const theme = useContext(themeContext);

    return (
        <button style={{
            backgroundColor: theme === "light" ? "#333" : "#fff",
            color: theme === "light" ? "#fff" : "#333",
            padding: "6px 16px",
            border: "none",
            borderRadius: "4px",
        }}>Button</button>
    )
}

export default Button