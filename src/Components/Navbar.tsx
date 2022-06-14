import styled from "@emotion/styled";
import { useContext } from "react";
import { Link } from "react-router-dom";
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
    const { user } = useContext(UserContext);
    const emptyUser = Object.values(user) === Object.values(user).filter(value => value === '');

    return (
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                { emptyUser ?
                <NavButton>
                    <NavButtonLink to="/login">
                    Log out
                    </NavButtonLink>
                </NavButton>
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