import React from "react";
import PostCard from "./PostCard";
import { useDispatch, useSelector } from "react-redux";
import { postList } from "./postSlice";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router-dom";

const Posts = () => {
	// const dispatch = useDispatch();
	const posts = useSelector(postList);
	const navigate = useNavigate();

	const handleNavigate = () => {
		navigate("/posts/new");
	};

	return (
		<div className="Post">
			<div className="SpaceBetween">
				<div>
					<h1>Posts </h1>
				</div>
				<div>
					<Button
						variant="outlined"
						startIcon={<AddCircleOutlineIcon />}
						onClick={() => {
							handleNavigate();
						}}
					>
						Create
					</Button>
				</div>
			</div>
			{posts &&
				posts.map((post) => {
					return <PostCard post={post} key={post.id} />;
				})}
		</div>
	);
};

export default Posts;
