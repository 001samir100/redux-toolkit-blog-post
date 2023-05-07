import React from "react";
import LanguageTwoToneIcon from "@mui/icons-material/LanguageTwoTone";
import Person4TwoToneIcon from "@mui/icons-material/Person4TwoTone";
import PermPhoneMsgTwoToneIcon from "@mui/icons-material/PermPhoneMsgTwoTone";
import MarkEmailReadTwoToneIcon from "@mui/icons-material/MarkEmailReadTwoTone";
import AddLocationAltTwoToneIcon from "@mui/icons-material/AddLocationAltTwoTone";
import FaceTwoToneIcon from "@mui/icons-material/FaceTwoTone";
const UserCard = ({ user }) => {
	return (
		<div className="UserCard">
			<h2 className="Row">
				{/* <FaceTwoToneIcon /> */}
				{user.name}
			</h2>
			<p className="Row">
				<AddLocationAltTwoToneIcon />
				{user.address.street}
			</p>
			<p className="Row">
				<MarkEmailReadTwoToneIcon />
				{user.email}
			</p>
			<p className="Row">
				<PermPhoneMsgTwoToneIcon />
				{user.phone}
			</p>
			<p className="Row">
				<Person4TwoToneIcon />
				{user.username} ( <i>Username</i>)
			</p>
			<a href={user.website}>
				<LanguageTwoToneIcon /> website
			</a>
		</div>
	);
};

export default UserCard;
