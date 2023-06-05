import { useState } from "react";
import { postAdd } from "./PostSlice";
import { useDispatch, useSelector } from "react-redux";

function PostAddForm() {
    const userLists = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [author, setAuthor] = useState("");

    const authorHandler = (e) => {
        setAuthor(e.target.value);
    };
    const titleHandler = (e) => {
        setTitle(e.target.value);
    };
    const textHandler = (e) => {
        setText(e.target.value);
    };
    const addPostHandler = (postTitle, content, userId) => {
        if (postTitle && content && userId) {
            dispatch(postAdd(postTitle, content, userId));
        }
    };
    return (
        <div>
            <div className="form_container">
                <label htmlFor="">Post Title</label>
                <input type="text" name="" id="" onChange={titleHandler} />{" "}
                <label htmlFor="">Author</label>
                <select name="" id="" onChange={authorHandler}>
                    {userLists.map((el) => {
                        return (
                            <option value={el.user} key={el.id}>
                                {el.name}
                            </option>
                        );
                    })}
                </select>
                <label htmlFor="">Content</label>
                <input type="text" name="" id="" onChange={textHandler} />
                <button onClick={() => addPostHandler(title, text, author)}>
                    Add
                </button>
            </div>
        </div>
    );
}

export default PostAddForm;
