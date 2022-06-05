import { useQuery } from 'react-query';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export interface IUser {
    id: string,
    name: string,
    email: string,
    gender: string,
    status: string,
}

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

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
    
    return (
        <Grid container spacing={2}>
            {data.map((user:IUser) => (
                <Grid item xs={3} direction="column" key={user.id}>
                        <Item>
                            <div>name:  {user.name}</div>
                            <div>email: {user.email}</div>
                            <div>gender: {user.gender}</div>
                            <div>status: {user.status}</div>
                        </Item>
                </Grid>
            ))}
        </Grid>
    );
}

export default User;