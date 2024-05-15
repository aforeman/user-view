import UserLine from './UserLine';
import User from './types/User';

const UserList = ({users, role} : {users: User[] | undefined, role: string}) => {
	return <div>
		{users?.filter(user => user.role === role)?.map(user => <UserLine name={user.name} role={user.role} />) }
	</div>;
};

export default UserList;
