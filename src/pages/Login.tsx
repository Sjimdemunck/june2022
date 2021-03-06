import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';
import UserContext from '../providers/UserProvider';
import styled from '@emotion/styled';
import { Box } from '@mui/system';
import { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface ILoginFormInputProps {
    username: string,
    password: string,
}

export const Title = styled.h2`
    color: #1565c0;
`;

export const LoginPaper = styled(Paper)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    margin: auto;
    margin-top: 100px;
    padding: 20px;
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.4);
`;

const IconWrapper = styled(Box)`
    display: flex;
    flex-flow: column;
    align-items: center;
`;
    
const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    `;

// for larger schema's I should create a separate file
const schema = yup
  .object()
  .shape({
    username: yup.string().required(),
    password: yup.string().min(4).max(16).required(),
  })

const Login = () => {
    let navigate = useNavigate();

    const { user, setUser } = useContext(UserContext);
    const {register, handleSubmit, formState: { errors } } = useForm<ILoginFormInputProps>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data:any) => {
        navigate("/profile");
        setUser({
            username: data.username,
            password: data.password,
            name: '',
            email: '',
            gender: '',
            age: 0,
            status: 'active',
            authorized: true,
        });
    }

    return (
        <Grid container spacing={2}>
            <LoginPaper elevation={3}> 
                <IconWrapper mb={3}>
                    <Avatar>
                        <LockIcon/>
                    </Avatar>
                <Title>Sign in</Title>
                </IconWrapper>
                <Grid item>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField 
                        label='Username'
                        placeholder='Enter Username'
                        {...register("username", { required: true})} 
                        error={!!errors?.username} 
                        helperText={errors?.username?.message}
                        fullWidth 
                        required
                        style={{marginBottom: 15}}
                    />                    
                    <TextField 
                        label='Password'
                        placeholder='Enter Passsword'
                        type='password'
                        {...register("password", { required: true})}
                        error={!!errors?.password}
                        helperText={errors?.password?.message}
                        fullWidth 
                        required/>
                    <ButtonWrapper>
                        <Box mb={2} mt={2}>
                            <Button type="submit" variant='contained' fullWidth style={{marginBottom: "5px"}} >Log in</Button>
                            <Button href='#' variant='outlined' fullWidth>Register</Button>
                        </Box>
                    </ButtonWrapper>
                    </form>
                </Grid>
            </LoginPaper>
        </Grid>
    )
}

export default Login