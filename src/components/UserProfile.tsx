import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { Link } from 'react-router-dom';
import { fetchUserById, Token, User } from '../client/safeRideApiClient';

const UserProfile = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        try {
          const decodedToken: Token = jwtDecode(token);
          const userResponse = await fetchUserById(decodedToken.userId);
          if (userResponse) {
            console.log(userResponse.data.data)
            setUser(userResponse.data.data);
            setLoading(false);
          }
        } catch (error) {
          console.error('Error fetching user:', error);
          setUser(null);
          setLoading(false);
        }
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Welcome to the Safe Ride Auth Client
        </h2>
        <div>
          {user ? (
            <div>
              User Name: {user.username}
              <br />
              Email: {user.email}
              {/* Render other user details */}
            </div>
          ) : (
            <div>User not found</div>
          )}
        </div>
        <div className="flex justify-center">
          <Link to="/users">
            <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Click here to view all users
            </button>
          </Link>
        </div>
        <p className="mt-4 text-center text-gray-500 text-sm">
          Don't have an account?{' '}
          <Link to="/register" className="text-indigo-600">
            Register now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
