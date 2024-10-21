import React from 'react';

const DarkButton = ({ text, onClick}) => {
  return (
    <button
      className="mt-8 px-6 py-2 bg-[#1D1D1F] hover:bg-gray-700 text-gray-300 text-lg rounded-lg transition duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default DarkButton;