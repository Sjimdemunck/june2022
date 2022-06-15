import { createContext, useState } from 'react';

type UserContextState = {
    username: string,
    password: string,
    name: string,
    email: string,
    gender: string,
    age: number,
    status: string,
    authorized: boolean,
}

const UserContextDefaultValue = {
    user: {
        username: '',
        password: '',
        name: '',
        email: '',
        gender: '',
        age: 0,
        status: '',
        authorized: false,
    },
    setUser: (user: UserContextState) => {}
}

export const UserContext = createContext(UserContextDefaultValue);

export const UserProvider = ({ children }: any) => {
    const [user, setUser] = useState(UserContextDefaultValue.user);

    return (
        <UserContext.Provider value= {{user, setUser}}>   
            {children}
        </UserContext.Provider>
    )
}


export default UserContext;