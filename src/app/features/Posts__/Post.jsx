import { useSelector } from "react-redux";
import PostAddForm from "./PostAddForm";
import PostAuthor from "./PostAuthor";
function Post() {
    const postLists = useSelector((state) => state.addPost);
    console.log(postLists);
    return (
        <>
            <div className="">
                <PostAddForm />
                {postLists?.map((el, i) => {
                    return (
                        <div className="post__card" key={el.id}>
                            <h3> Title: {el?.title}</h3>
                            <h4>
                                {el.text.length > 20
                                    ? el.text.slice(0, 30) + "..."
                                    : el.text}
                            </h4>
                            <h5>
                                <PostAuthor userId={el.userId} />
                            </h5>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Post;
