import { useContext } from "react";
import  UserContext from "../providers/UserProvider";


const Home = () => {
    const { user } = useContext(UserContext);
    return (
        <>
            <main>
                <h2>Welcome {user ? user.username : ''}</h2>
                <p>Hi</p>
            </main>
        </>
    )
}

export default Home