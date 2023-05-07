import axios from "axios";

const POST_URL = " http://localhost:8080/posts";

export function fetchPost(post) {
	return axios.get(POST_URL);
}

export function addPost(post) {
	return axios.post(POST_URL, post);
}

export function updatePost(updatedPost) {
	return axios.put(`${POST_URL}/${updatedPost.id}`, updatedPost);
}
