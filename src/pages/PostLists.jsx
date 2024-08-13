import { useQuery } from "@tanstack/react-query";
import AddPost from "../components/AddPost";
import { fetchPosts } from "../api/posts";
import { useNavigate } from "react-router-dom";

const PostLists = () => {
	const navigate = useNavigate();
	const {
		isLoading,
		isError,
		data: posts,
		error,
	} = useQuery({
		queryKey: ["posts"],
		queryFn: fetchPosts,
	});

	console.table(posts);

	if (isLoading) return "Loading...";
	if (isError) return `Error: ${error}`;

	return (
		<>
			<AddPost />
			{posts.map((post) => (
				<div key={post.id} style={{ background: "#777" }}>
					<h4
						style={{
							cursor: "pointer",
							textDecoration: "underline",
						}}
						onClick={() => navigate(`/post/${post.id}`)}>
						{post.title}
					</h4>
					<button onClick={() => navigate(`/post/${post.id}/edit`)}>
						Edit
					</button>
					<button>Delete</button>
				</div>
			))}
		</>
	);
};

export default PostLists;
