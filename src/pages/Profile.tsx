import { Grid } from "@mui/material";
import { useContext } from "react";
import User from "../components/User";
import  UserContext from "../providers/UserProvider";


const Profile = ( authorized: any) => {
    const { user } = useContext(UserContext);

    if (!authorized && !user) {
        return <div style={{color: "red"}}>You are not authorized</div>;
    }

    return (
        <>
            <h2>Welcome to your profile page:  {user ? user.username : ''}</h2>
            <Grid container>
                <h3>Other users (fetched from a random server):</h3>
                <User />
            </Grid>
        </>
    )
}

export default Profile