import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./usersApi";

const initialState = {
	users: [],
	status: "idle",
	error: null,
};

export const fetchUsersAsync = createAsyncThunk("users/fetch", async () => {
	try {
		const response = await getUsers();
		return response.data;
	} catch (error) {
		return error.message;
	}
});

export const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUsersAsync.pending, (state) => {
				state.status = "pending";
			})
			.addCase(fetchUsersAsync.fulfilled, (state, action) => {
				state.status = "fulfilled";
				state.users = action.payload;
			})
			.addCase(fetchUsersAsync.rejected, (state) => {
				state.status = "rejected";
			});
	},
});

export const getUserList = (state) => state.users.users;

export default userSlice.reducer;
