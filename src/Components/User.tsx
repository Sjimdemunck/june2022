import { useQuery } from 'react-query';
import styled from '@emotion/styled'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

export interface IUser {
    username: string,
    password: string,
    name: string,
    email: string,
    gender: string,
    status: string,
}

const Item = styled(Paper)`
    height: 210px;
    display: flex;
    flex-direction: column;
    backgroundColor: lightgray;
    padding: 10px;
    margin: 10px;
    overflow: hidden;
`;

const SpanKey = styled.span`
    margin-top: 5px;
    font-weight: bold;
`;

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
                <Grid item xs={3} direction="column" key={user.name + user.email}>
                        <Item>
                            <SpanKey>Name: </SpanKey> <span>{user.name} </span>
                            <SpanKey>Email: </SpanKey>{user.email}
                            <SpanKey>Gender: </SpanKey> {user.gender}
                            <SpanKey>Status: </SpanKey>{user.status}
                        </Item>
                </Grid>
            ))}
        </Grid>
    );
}

export default User;