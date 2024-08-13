import { NavLink } from "react-router-dom";

const PostLists = () => {
    return (
        <>
            <div>PostLists</div>
            <NavLink to={"/post/1/edit"}>Post 1</NavLink>;
        </>
    );
};

export default PostLists;
