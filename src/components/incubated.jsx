import React from 'react';
import { EP } from '../assets';

const IncubationLogo = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl font-bold mt-4 text-white">Incubated & Mentored</h2>
      <div className="flex items-center justify-center mt-2 border rounded-md p-4">
        <img
          src={EP}
          alt="Incubated and Mentored Logo"
          className="w-40 md:w-60 h-auto"
          style={{ border: "1px solid #33DFF0",}}
        />
      </div>
    </div>
  );
};

export default IncubationLogo;
