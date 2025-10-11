import { useState } from "react";

function TodoList() {
    let [todo, setTodo] = useState([]);
    const [currentValue, setCurrentValue] = useState("")



    return (
        <>
            <input id="inputArea" value={currentValue} onChange={(e) => {
                setCurrentValue(e.target.value)
            }} />
            <button onClick={(e) => {
                setTodo((prevTodos) => [...prevTodos, currentValue])
                setCurrentValue("")
            }}>Add</button>

            <div>
                <ul>
                    {todo.map(function (input) {
                        return <li>{input}</li>
                    })}
                </ul>
            </div>
        </>
    )
}

export default TodoList;