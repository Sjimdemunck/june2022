import { useContext } from "react";
import  UserContext from "../providers/UserProvider";


const Home = () => {
    const { user } = useContext(UserContext);
    return (
        <>
            <main>
                <h2>Welcome {user ? user.username : ''}</h2>
            </main>
        </>
    )
}

export default Home