import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchPost } from "../api/posts";
import { useNavigate } from "react-router-dom";

const Post = () => {
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

	if (isLoading) return "Loading...";
	if (isError) return `Error: ${error}`;

	console.table(post);
	return (
		<div>
			<button onClick={() => navigate("/")}>Revenir</button>
			<h1>{post.title}</h1>
			<p>{post.body}</p>
		</div>
	);
};

export default Post;
