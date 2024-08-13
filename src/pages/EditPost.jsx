import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchPost } from "../api/posts";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";

const EditPost = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const {
		isLoading,
		isError,
		data: post,
		error,
	} = useQuery({
		queryKey: ["posts", id],
		queryFn: () => fetchPost(id),
	});

	console.table(post);

	if (isLoading) return "Loading...";
	if (isError) return `Error: ${error.message}`;

	const handleSubmit = (updatedPost) => {
		console.log(updatedPost);
	};
	return (
		<div>
			<h1>Edit post {id}</h1>
			<PostForm onSubmit={handleSubmit} initialValue={post} />
		</div>
	);
};

export default EditPost;
