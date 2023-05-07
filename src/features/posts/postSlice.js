import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addPost, fetchPost, updatePost } from "./postApi";
import { formatDistanceToNow } from "date-fns";

const initialState = {
	posts: [],
	status: "idle",
	error: null,
};

export const addPostAsync = createAsyncThunk("posts/add", async (post) => {
	try {
		const response = await addPost(post);
		return response.data;
	} catch (error) {
		return error.message;
	}
});

export const fetchPostAsync = createAsyncThunk(
	"posts/fetchAllPost",
	async () => {
		try {
			const response = await fetchPost();
			return response.data;
		} catch (error) {
			return error.message;
		}
	}
);

export const updatePostReactionAsync = createAsyncThunk(
	"posts/updateReactions",
	async (updatedPost) => {
		try {
			const response = await updatePost(updatedPost);
			return response.data;
		} catch (error) {
			return error.message;
		}
	}
);

export const postSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		// addPost: (state, action) => {},
		// reactionAdded: (state, action) => {
		// 	const { postId, name } = action.payload;
		// 	const existingPost = state.posts.find((post) => post.id === postId);
		// 	if (existingPost) {
		// 		existingPost.reactions[name]++;
		// 		updatePostReactionAsync(existingPost);
		// 	}
		// },
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPostAsync.pending, (state) => {
				state.status = "pending";
			})
			.addCase(fetchPostAsync.fulfilled, (state, action) => {
				state.status = "fulfilled";

				//add some properties also
				const actualPost = action.payload.map((post) => {
					post.date = formatDistanceToNow(new Date(), { addSuffix: true });
					post.reactions = { thumbsUp: 0, wow: 0, heart: 0 };
					return post;
				});
				state.posts = state.posts.concat(actualPost);

				// const date = new Date();
				// const distance = formatDistanceToNow(date, { addSuffix: true });
				// console.log(distance);
			})
			.addCase(fetchPostAsync.rejected, (state, action) => {
				state.status = "rejected";
				state.error = action.error.message;
			})
			.addCase(updatePostReactionAsync.pending, (state) => {
				state.status = "pending";
			})
			.addCase(updatePostReactionAsync.fulfilled, (state, action) => {
				state.status = "fulfilled";
				const payload = action.payload;
				state.posts = state.posts.map((post) => {
					if (post.id === payload.id) {
						return payload;
					}
					return post;
				});
			})
			.addCase(updatePostReactionAsync.rejected, (state, action) => {
				state.status = "rejected";
				state.error = action.error.message;
			})
			.addCase(addPostAsync.pending, (state) => {
				state.status = "pending";
			})
			.addCase(addPostAsync.fulfilled, (state, action) => {
				state.status = "fulfilled";
				// state.posts = state.posts.push(action.payload);
			})
			.addCase(addPostAsync.rejected, (state) => {
				state.status = "rejected";
			});
	},
});

export const { reactionAdded } = postSlice.actions;

export const postList = (state) => state.posts.posts;
export const postStatus = (state) => state.posts.status;
export const postError = (state) => state.posts.error;

export default postSlice.reducer;
