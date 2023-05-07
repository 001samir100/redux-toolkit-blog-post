import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserList } from "../users/userSlice";
import { useFormik } from "formik";
import * as Yup from "yup";

import AddIcon from "@mui/icons-material/Add";
import { addPostAsync } from "./postSlice";

import { randomNumberGenerator } from "../../util/RandomNumberGen";

const PostForm = () => {
	const users = useSelector(getUserList);
	const dispatch = useDispatch();

	const userOptions = users.map((user) => {
		return (
			<MenuItem key={user.id} value={user.id}>
				{user.name}
			</MenuItem>
		);
	});

	// Validation schema, it validates for using yup library
	const validationSchema = Yup.object({
		title: Yup.string("Enter title here").required("Title is required"),
		body: Yup.string("Enter title description here").required(
			"Description is required"
		),
		userId: Yup.number("Select user").required("User must be selected"),
	});

	// Formik = useFormik Hook is used
	const formik = useFormik({
		initialValues: { title: "", body: "", userId: 0 },
		validationSchema: validationSchema,
		onSubmit: (values) => {
			if (values.userId > 0) {
				const id = randomNumberGenerator();
				const post = { ...values, id };
				console.log("Post form: " + JSON.stringify(post));
				dispatch(addPostAsync(post));
			} else {
				// todo: How to handle throw error
				throw new Error();
			}
			// alert(JSON.stringify(values));
		},
	});

	const handleSelectUser = (e) => {
		console.log("User id: " + e.target.value);
		formik.setFieldValue("userId", e.target.value);
	};

	return (
		<div className="Post">
			<h1>New Post</h1>
			<div className="PostCard">
				<div className="PostForm">
					<form onSubmit={formik.handleSubmit}>
						<TextField
							fullWidth
							label="Title"
							id="title"
							name="title"
							value={formik.values.title}
							onChange={formik.handleChange}
							error={formik.errors.title}
						/>
						<span>&nbsp;</span>
						<TextField
							fullWidth
							label="Description"
							id="body"
							name="body"
							value={formik.values.body}
							onChange={formik.handleChange}
							error={formik.errors.body}
						/>
						<span>&nbsp;</span>
						<br />
						<FormControl fullWidth>
							<InputLabel id="userId">User</InputLabel>
							<Select
								labelId="userId"
								id="userId"
								label="user"
								name="userId"
								value={formik.values.userId}
								onChange={handleSelectUser}
								error={formik.errors.userId}
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								{userOptions}
							</Select>
						</FormControl>
						<span>&nbsp;</span>
						<br />
						<Button
							className="Row JustifyCenter"
							variant="contained"
							endIcon={<AddIcon />}
							type="submit"
						>
							Create
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default PostForm;
