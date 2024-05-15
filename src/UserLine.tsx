import User from './types/User';

import styled from 'styled-components';

const UserLineStyled = styled.div`
	margin-bottom: 32px;
	overflow: hidden;
	line-height: 24px;
`;

const Initial = styled.div`
	width: 80px;
	height: 80px;
	margin-right: 16px;
	float: left;
	background-color: #eaf2fa;
	color: #2b71c7;
	text-align: center;
	font-size: 32px;
	line-height: 80px;
`;

const Role = styled.span`
	text-transform: lowercase;
	display: inline-block;
	&::first-letter {
		text-transform: uppercase;
	}
`;

const UserLine = ({name, role} : User) => {
	return <UserLineStyled>
		<Initial>{name[0]}</Initial>
		<div>{name}</div>
		<Role>{role}</Role>
	</UserLineStyled>;
};

export default UserLine;
