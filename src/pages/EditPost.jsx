import { useParams } from "react-router-dom";
import PostForm from "../components/PostForm";

const EditPost = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Edit post {id}</h1>
            <PostForm />
        </div>
    );
};

export default EditPost;
