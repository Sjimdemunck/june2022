import { createContext, useState } from 'react';

type UserContextState = {
    username: string,
    password: string,
    name: string,
    email: string,
    gender: string,
    status: string,
}

const UserContextDefaultValue = {
    user: {
        username: '',
        password: '',
        name: '',
        email: '',
        gender: '',
        status: '',
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