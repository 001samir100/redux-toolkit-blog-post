import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<>
			<div className="Navbar">
				<div className="logo">
					<h1>Blogs</h1>
				</div>
				<div className="nav">
					<ul>
						{/* <li>
							<Link to="/">home</Link>
						</li> */}
						<li>
							<NavLink to="/posts">post</NavLink>
						</li>
						<li>
							<NavLink to="/users">users</NavLink>
						</li>
					</ul>
				</div>
			</div>
			{/* <Outlet></Outlet> */}
		</>
	);
};

export default NavBar;
