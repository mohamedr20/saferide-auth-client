import React, { useEffect, useState } from 'react';
import { fetchAllUsers, User } from '../client/safeRideApiClient';

const UserList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsersData = async () => {
      try {
        const usersResponse = await fetchAllUsers();
        if (usersResponse) {
          console.log(usersResponse.data.data);
          setUsers(usersResponse.data.data);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        setUsers([]);
        setLoading(false);
      }
    };

    fetchUsersData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (users.length === 0) {
    return <div>No users found.</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {users.map((user) => (
          <div key={user.id} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">{user.username}</h3>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
