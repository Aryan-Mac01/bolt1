import React from 'react';

const BrandsCard = ({ brand, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center cursor-pointer transition-transform hover:scale-105"
      onClick={() => onClick(brand)}
    >
      <img 
        src={brand.logo} 
        alt={`${brand.name} logo`} 
        className="h-20 object-contain mb-4" 
      />
      <h3 className="text-lg font-medium text-gray-900">{brand.name}</h3>
    </div>
  );
};

export default BrandsCard;