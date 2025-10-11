import { useState } from "react";


function Input({ title }) {
    return <input placeholder={title} />
}

function TodoList() {
    const [currentInput, setCurrentInput] = useState("");

    return (
        <>
            <form>
                <Input  title={currentInput} />
                <Input title={"garri"} />
            </form>
        </>
    )
}

export default TodoList;