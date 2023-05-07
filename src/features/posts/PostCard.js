import React, { useState } from "react";
import ReactionButtons from "./ReactionButtons";
import { Button } from "@mui/material";

const PostCard = ({ post }) => {
	const TextWithToggle = ({ text, maxChar }) => {
		const [showFullText, setShowFullText] = useState(false);

		const toggleText = () => {
			setShowFullText(!showFullText);
		};

		const displayedText = showFullText
			? text
			: text.substring(0, maxChar) + "...";

		return (
			<>
				<p>{displayedText} &nbsp;</p>
				<span>
					{text.length > maxChar && (
						<Button onClick={toggleText}>
							{showFullText ? "Show less" : "Show more"}
						</Button>
					)}
					{/* TODO: Edit the post */}
					{/* <u>
						<i className="EditBtn">edit</i>
					</u> */}
				</span>
			</>
		);
	};

	return (
		<div className="PostCard">
			<h2>{post.title}</h2>

			<TextWithToggle text={post.body} maxChar={100} />

			{/* <p>{post.body}</p> */}
			<div className="Flex">
				<ReactionButtons post={post} />
				&nbsp;{" "}
				<span>
					<i>{post.date}</i>
				</span>
			</div>
		</div>
	);
};

export default PostCard;
