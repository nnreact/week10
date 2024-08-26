import Button from "./Button"

function ButtonContainer() {
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px"
        }}>
            <Button />
            <Button />
        </div>
    )
}

export default ButtonContainer