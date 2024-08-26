import { useContext } from "react"
import ButtonContainer from "./ButtonContainer"
import { themeContext } from "../App"

function Header() {
    const theme = useContext(themeContext);
    return (
        <header style={{
            backgroundColor: theme === "light" ? "#eee" : "#333"
        }}>
            <h1 style={{
                color: theme === "light" ? "#333" : "#fff"
            }}>Logo</h1>
            <ButtonContainer />
        </header>
    )
}

export default Header