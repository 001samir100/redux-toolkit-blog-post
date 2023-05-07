import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Blogs from "./features/blog/Blogs";
import PostForm from "./features/posts/PostForm";
import Posts from "./features/posts/Posts";
import Users from "./features/users/Users";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/posts" element={<Posts />} />
				<Route path="/posts/new" element={<PostForm />} />
				<Route path="/users" element={<Users />} />
			</Routes>
		</>
	);
}

export default App;
