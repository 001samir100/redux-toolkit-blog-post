import React from "react";
import { useDispatch } from "react-redux";
import { updatePostReactionAsync } from "./postSlice";

const reactionEmoji = {
	thumbsUp: "👍",
	wow: "😮",
	heart: "❤️",
};

const ReactionButtons = ({ post }) => {
	const dispatch = useDispatch();

	// useCallbackhere;
	const updatedReaction = (post, name) => {
		const updatedPost = {
			...post,
			reactions: { ...post.reactions, [name]: post.reactions[name] + 1 },
		};

		dispatch(updatePostReactionAsync(updatedPost));
	};

	const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
		return (
			<button
				key={name}
				type="button"
				onClick={() => {
					updatedReaction(post, name);
				}}
			>
				{emoji} {post.reactions[name]}
			</button>
		);
	});

	return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
