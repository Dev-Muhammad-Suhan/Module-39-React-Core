import { useEffect, useState } from "react"
import './useEffect.css'
import Friends from "./showFriends";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUsers(data))
    }, [])

    return (
        <div className="box">
            <h3>Users: {users.length}</h3>

            {
                users.map(friend => <Friends friends={friend}></Friends>)
            }
        </div>
    )
}