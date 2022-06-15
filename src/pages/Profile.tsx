import { Grid } from "@mui/material";
import { useContext } from "react";
import User from "../components/User";
import  UserContext from "../providers/UserProvider";
import styled from '@emotion/styled';
import { Title } from "./Login";

export const H3 = styled.h3`
    color: #1565c0;
`

const Profile = ( authorized: any) => {
    const { user } = useContext(UserContext);

    if (!authorized && !user) {
        return <div style={{color: "red"}}>You are not authorized</div>;
    }

    return (
        <>
            <Title>Welcome to your profile page  {user ? user.username : ''}</Title>
            <Grid container>
                <H3 >Other users</H3>
                <User />
            </Grid>
        </>
    )
}

export default Profile