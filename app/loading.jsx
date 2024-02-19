import Image from 'next/image';
import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="border-t-8 border-orange-400 rounded-full w-28 h-28 animate-spin mb-8"></div>
      <p className="text-2xl font-bold">...Loading</p>
    </div>
  );
};

export default Loading;
