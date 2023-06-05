import { useSelector } from "react-redux";
const PostAuthor = ({ userId }) => {
    const users = useSelector((state) => state.users);
    const author = users.find((el) => el.name === userId);

    return <span>by {author ? author.name : "unkonwn"}</span>;
};
export default PostAuthor;
