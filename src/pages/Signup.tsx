import styled from "@emotion/styled";
import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import UserContext from "../providers/UserProvider";
import { LoginPaper } from "./Login";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface ISignupInputProps {
    name: string,
    email: string,
    password: string,
    gender: string,
    age: number
}

const SignupPaper = styled(LoginPaper)`
    height: unset;
`;

const SignupInput = styled(TextField)`
    margin-bottom: 10px;
`;

export const Title = styled.h2`
    margin-bottom: 10px;
    color: #1565c0;
`;

const SignupButton = styled(Button)`
    margin-top: 10px;
    margin-bottom: 10px;
`;

// customize error message in required().
const schema = yup
  .object()
  .shape({
    name: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().min(4).max(16).matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i).required(),
    gender: yup.string().min(4).max(6).required(),
    age: yup.number().min(18).max(110).required(),
  })

const Signup = () => {
    let navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm<ISignupInputProps>({
            resolver: yupResolver(schema),
        });

    const onSubmit = (data: any) =>  {
        navigate("/login");

        setUser({
            username: data.username,
            password: data.password,
            name: data.name,
            email: data.email,
            gender: data.gender,
            age: data.age,
            status: 'active',
            authorized: false,
        })
    }

    const { user, setUser } = useContext(UserContext);


    return (
        <Grid container >
            <SignupPaper >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Title>Register</Title>
                    <Grid item xs={12}>
                        <SignupInput
                            variant="outlined"
                            label='name'
                            autoFocus
                            placeholder='Name'
                            helperText={errors?.name?.message}
                            {...register('name',)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <SignupInput
                            variant="outlined"
                            label="password"
                            type="password"
                            autoFocus
                            placeholder='Password'
                            helperText={errors?.password?.message}
                            {...register('password')}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <SignupInput
                            variant="outlined"
                            label='email'
                            helperText={errors?.email?.message}
                            placeholder='E-mail' 
                            {...register('email')} 
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <SignupInput
                            variant="outlined"
                            type="select"
                            label='gender'
                            placeholder='Gender'
                            helperText={errors?.gender?.message}
                            {...register('gender')}>
                        </SignupInput>
                    </Grid>
                    <Grid item xs={12}>
                        <SignupInput
                            variant="outlined"
                            label='age' 
                            placeholder='age'
                            helperText={errors?.age?.message}
                            {...register('age')} />
                    </Grid>
                    <Grid item xs={12}>
                    <Box 
                    alignItems="flex-end"
                    display="flex"
                    justifyContent="flex-end">
                        <SignupButton type="submit" variant='contained' style={{marginBottom: "5px"}} >
                            Register
                        </SignupButton>
                    </Box>
                    </Grid>
                </form>
            </SignupPaper>
        </Grid>
    );
}

export default Signup;