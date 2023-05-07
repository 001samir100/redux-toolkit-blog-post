import React from "react";
import { useSelector } from "react-redux";
import { getUserList } from "./userSlice";
import UserCard from "./UserCard";

const Users = () => {
	const UserList = useSelector(getUserList);
	console.log(UserList);
	return (
		<div className="Users">
			<h1>Users</h1>
			{UserList &&
				UserList.map((user) => {
					return <UserCard key={user.id} user={user} />;
				})}
		</div>
	);
};

export default Users;
