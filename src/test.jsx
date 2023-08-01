import React, { useState } from 'react';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Toggle Dropdown
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded shadow-lg">
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={() => console.log('Option 1 clicked')}
          >
            Option 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={() => console.log('Option 2 clicked')}
          >
            Option 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            onClick={() => console.log('Option 3 clicked')}
          >
            Option 3
          </a>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
