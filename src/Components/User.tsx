import { useQuery } from 'react-query';
import { Paper } from '@mui/material';

export interface IUser {
    id: string,
    name: string,
    email: string,
    gender: string,
    status: string,
}
async function fetchUsers() {
    const response = await fetch('https://gorest.co.in/public/v2/users');

    return response.json();
}

const User = () => {
    const { data, status } = useQuery('user', fetchUsers);
    if (status === 'loading') {
        return <p>Loading..</p>
    }

    if (status === 'error') {
        return <p>Error!</p>
    }

    console.log(data);

    return (
        <Paper>
            {data.map((user:IUser) => (
                <div key={user.id}>
                <span>name:  {user.name}</span>
                <span>email: {user.email}</span>
                <span>gender: {user.gender}</span>
                <span>status: {user.status}</span>
            </div>
            ))}
            
        </Paper>
    );
}

export default User;