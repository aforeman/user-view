import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import UserList from './UserList';
import User from './types/User';

const ViewUsers = ({users} : {users?: User[]}) => {
	const [userType, setUserType] = useState('MANAGER');

	const handleUserTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUserType((event.target as HTMLInputElement).value);
	};

	return <div>
		<h5>User Types</h5>
		<div>
			<FormControl>
				<RadioGroup
					name="radio-user-types"
					value={userType}
					onChange={handleUserTypeChange}
				>
					<FormControlLabel value="MANAGER" control={<Radio />} label="Manager" />
					<FormControlLabel value="ADMIN" control={<Radio />} label="Admin" />
				</RadioGroup>
			</FormControl>
		</div>
		<h5>Admin Users</h5>
		<div>
			<UserList users={users} role={userType} />
		</div>
	</div>;
};

export default ViewUsers;
