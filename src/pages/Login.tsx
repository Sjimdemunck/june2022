import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';


const Login = () => {
    return (
        <Grid>
            <Paper elevation={3}> 
                <Avatar>
                    <LockIcon/>
                </Avatar>
                Sign in
            </Paper>
        </Grid>
    )
}

export default Login