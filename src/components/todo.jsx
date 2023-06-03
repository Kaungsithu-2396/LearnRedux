import React, { useReducer, useState } from "react";
const initialTask = [{ id: 1, task: "first one", done: false }];
console.log(initialTask.id)
const taskReducer = (state, action) => {
    switch (action.type) {
        case "add":
            return [...state, action.payload];
        case "delete":
            return state.filter((el) => el.id !== action.payload.id);
    }
};
export default function Todo() {
    const [task, dispatch] = useReducer(taskReducer, initialTask);
    const [text, setText] = useState("");
    const delTask = (e) => {
        e.preventDefault();
        dispatch({
            type: "delete",
        });
    };
    const addTask = (e) => {
        e.preventDefault();
        dispatch({
            type: "add",
            payload: {
                task: text,
                done: false,
            },
        });
        console.log(task);

        setText("");
    };
    return (
        <>
            <form action="" onSubmit={addTask}>
                <input
                    type="text"
                    name=""
                    onChange={(e) => setText(e.target.value)}
                    id=""
                    value={text}
                />
            </form>
            <div className="output">
                {task?.map((el, id) => {
                    return (
                        <div className="" key={id}>
                            <div className="todo__gp">
                                <h1 className="todo__title">{el.task}</h1>
                                {/* <button onClick={delTask}> Del</button> */}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
