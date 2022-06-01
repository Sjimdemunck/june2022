import { useQuery } from 'react-query';

async function fetchUsers() {
    const response = await fetch('https://gorest.co.in/public/v2/users/2945');

    return response.json();
}

const User = () => {
    const { data, status } = useQuery('user', fetchUsers);

    if (status === 'loading') {
        return <p>Loading..</p>
    }

    if (status === 'error') {
        return <p>Error!</p>
    }

    return (
        <div>
            <h2> 
            Welcome {data.name}!
            </h2>
        </div>
    )
}

export default User;