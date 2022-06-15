import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../providers/UserProvider";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: black;
    border-bottom: 1px solid #ccc;
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:hover {
        transition: all 0.3s ease-in-out;
        color: #1976d2;
    }
`

const NavButton = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 85px;
    height: 50px;
    border-radius: 25%;
    background-color: #1976d2;
    margin: 0 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        transition: all 0.3s ease-in-out;
        background-color: #1565c0;
        color: unset;
    }
`

const NavButtonLink = styled(Link)`
    text-decoration: none;
    color: white;
`

const Navbar = () => {
    const { user, setUser } = useContext(UserContext);
    const emptyUser = user.username === '';

    let navigate = useNavigate();
    const logout = () => {
        navigate('/login');
        setUser({
            username: '',
            password: '',
            name: '',
            email: '',
            gender: '',
            age: 0,
            status: '',
            authorized: false,
        });
    }

    return (
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                <NavLink to="/groceries">Groceries</NavLink>
                { !emptyUser ?
                <Button onClick={logout}>
                    Log Out
                </Button>
                :  <NavButton>
                <NavButtonLink to="/login">
                Log in
                </NavButtonLink>
            </NavButton>
            }
            </Nav>
    )
}

export default Navbar