import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Welcome to the Safe Ride Auth Client</h2>
        <p className="text-gray-600 text-center mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet justo ac metus rutrum, eu laoreet nunc interdum. Fusce malesuada dapibus risus, ac feugiat elit tristique vel.
        </p>
        <div className="flex justify-center">
          <Link to="/login">
            <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Log In Here
            </button>
          </Link>
        </div>
        <p className="mt-4 text-center text-gray-500 text-sm">
          Don't have an account? <Link to="/register" className="text-indigo-600">Register now</Link>
        </p>
      </div>
    </div>
  );
};

export default HomePage;