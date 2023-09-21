import React from 'react';

function NotFound() {
  return (
    <div className="bg-darkPurple min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-500">404</h1>
        <p className="text-xl font-semibold text-gray-700 mb-4">Page Not Found</p>
        <p className="text-gray-600">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <a href="/" className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Go to Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;
