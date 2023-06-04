import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, delTask } from "./todoSlice";
function Todo() {
    const dispatch = useDispatch();
    const taskCollection = useSelector((state) => state.todo);
    const [task, setTask] = useState("");
    const onChangeHandler = (e) => {
        setTask(e.target.value);
    };
    const addTaskHandler = () => {
        dispatch(
            add({
                title: task,
            })
        );
        setTask("");
    };
    const delTaskHandler = (id) => {
        dispatch(
            delTask({
                id,
            })
        );
    };
    return (
        <div>
            <input type="text" onChange={onChangeHandler} value={task} />
            <button onClick={addTaskHandler}>Add</button>
            <div className="">
                {taskCollection?.map((el, i) => {
                    return (
                        <div className="" key={i}>
                            <span>{el.task}</span>
                            <button onClick={() => delTaskHandler(el.id)}>
                                Del
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Todo;
