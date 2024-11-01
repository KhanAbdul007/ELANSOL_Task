import { useState, useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>All Users</h1>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <strong>Name:</strong> {user.name} {user.lastName}
              <br />
              <strong>Email:</strong> {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default Users;
