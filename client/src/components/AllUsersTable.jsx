import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/allUsers.css';

const AllUsersTable = () => {
    const [users, setUsers] = useState([]);

console.log(users)
    useEffect(() => {
        axios.get('http://localhost:8000/api/users', users)
            .then((response) => setUsers(response.data))
            .catch((error) => console.log(error));
    }, []);
    const handleDelete = id => {
        axios.delete(`http://localhost:8000/api/user/${id}`)
            .then(() => {
                axios.get('http://localhost:8000/api/user')
                    .then((response) => setUsers(response.data))
                    .catch((error) => console.log(error));
            })
            .catch(err => console.log(err))
    };
    return (
        <div>
            <h2>all Users</h2>
            <table className="table-user">
                <thead>
                    <tr>
                        <th>User First Name</th>
                        <th>User Last Name</th>
                        <th>User Email</th>
                        <th>Role</th>
                        <th>User Phone Number</th>
                        <th className="sam">Actions</th>
                    </tr>
                </thead>
                
<tbody>
    {users && users.data && users.data.length > 0 ? (
        users.data.map((user, index) => (
            <tr key={user._id}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.phoneNumber}</td>
                <td>
                    <button onClick={() => handleDelete(user._id)} className="delet-user">Delete</button>
                </td>
            </tr>
        ))
    ) : (
        <tr>
            <td colSpan="5">No users found</td>
        </tr>
    )}
</tbody>


            </table>
        </div>
    );
};
export default AllUsersTable;
