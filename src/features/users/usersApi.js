import axios from "axios";

const USERS_URL = "http://localhost:8080/user";

export function getUsers() {
	return axios.get(USERS_URL);
}
