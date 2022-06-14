import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import { useContext, useState } from 'react';
import UserContext from '../providers/UserProvider';

const Login = () => {
    const { user, setUser } = useContext(UserContext);
    const [ username, setUsername ] = useState('');
    const handleChange = (event: any) => { 
        setUsername(event.target.value);
    }

    const changeUser = () => {
        setUser({
            username: username,
            password: '',
            name: '',
            email: '',
            gender: '',
            status: '' ,
               });
    }
    
    return (
        <Grid container>
            <Paper elevation={3}> 
                <Grid alignItems='center' justifyContent='center'>
                    <Avatar>
                        <LockIcon/>
                    </Avatar>
                    Sign in
                </Grid>
                <TextField label='username' placeholder='Enter Username' value={username} onChange={handleChange} fullWidth required/>
                <TextField label='password' placeholder='Enter Passsword' type='password' fullWidth required/>
                <Button variant='contained' onClick={changeUser} fullWidth>Log in</Button>
                <pre>1{JSON.stringify(user, null, 2)}</pre>
                <Button href='#' variant='outlined' fullWidth>Register</Button>
            </Paper>
        </Grid>
    )
}

export default Login