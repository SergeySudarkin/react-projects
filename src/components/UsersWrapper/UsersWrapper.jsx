import { Success } from "../Success/Success";
import { Users } from "../Users/Users";
import { useEffect, useState } from 'react';

// Тут список пользователей: https://reqres.in/api/users

export const UsersWrapper = () => {
    const [success, setSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [invites, setInvites] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch("https://reqres.in/api/users", {
                    headers: { 'x-api-key': 'reqres-free-v1' }
                });
                const users = await response.json();
                setUsers(users.data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(true);
                console.warn(error.message);
            }
        }
        getUsers();
    }, [])

    const SendInviteHandler = () => { setSuccess(true) }

    const checkInvite = (id) => {
        if (invites.includes(id)) {
            setInvites(prev => prev.filter(_id => _id !== id));
        } else {
            setInvites(prev => [...prev, id]);
        }
    }

    return (
        <>
            {success ? <Success count={invites.length} /> : <Users items={users} isLoading={isLoading} sendInvite={SendInviteHandler} invites={invites} checkInvite={checkInvite} />}
        </>
    );
};
