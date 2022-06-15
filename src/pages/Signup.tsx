import styled from "@emotion/styled";
import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import UserContext from "../providers/UserProvider";
import { LoginPaper } from "./Login";


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


const Signup = () => {
    let navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm();

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
                            placeholder='name'
                            {...register('name', { required: true })}
                        />
                    </Grid>
                        {errors.name && <p>Name is required.</p>}
                    <Grid item xs={12}>
                    <SignupInput
                        variant="outlined"
                        label='email'
                        placeholder='E-mail' {...register('email', { required: true, pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "invalid email address"
                        }})} 
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <SignupInput
                        variant="outlined"
                        type="select"
                        label='gender'
                        placeholder='Gender' {...register('gender', {required: true })}>
                    </SignupInput>
                    </Grid>
                    <Grid item xs={12}>
                        <SignupInput
                            variant="outlined"
                            label='age' 
                            placeholder='age'
                            {...register('age', { pattern: /\d+/, min: 18, max: 69 })} />
                            {errors.age && <p>Please enter number for age.</p>}
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