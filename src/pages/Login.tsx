import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import { useState } from 'react';
import User, { IUser } from '../components/User';


const Login = () => {
    const [user, setUser] = useState<IUser>({
        username: '',
        password: '',
        name: '',
        email: '',
        gender: '',
        status: '',
    })

    return (
        <Grid container>
            <Paper elevation={3}> 
                <Grid alignItems='center' justifyContent='center'>
                    <Avatar>
                        <LockIcon/>
                    </Avatar>
                    Sign in
                </Grid>
                <TextField label='username' placeholder='Enter Username' fullWidth required/>
                <TextField label='password' placeholder='Enter Passsword' type='password' fullWidth required/>
                <Button type='submit' variant='contained' fullWidth onClick={() => setUser({username: '', password: '', name: 'Sjim', email: 's.demunck@gmail.com', gender: 'male', status: 'active'})}>Log in</Button>
                <Button href='#' variant='outlined' fullWidth>Register</Button>
            </Paper>
            <User/>

        </Grid>
    )
}

export default Login