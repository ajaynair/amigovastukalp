
import React from 'react';
import { GalleryImage } from '../types';

interface GalleryItemProps {
  image: GalleryImage;
  onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, onClick }) => {
  return (
    <div 
      className="group relative rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:shadow-cyan-500/50 hover:scale-105"
      onClick={onClick}
    >
      <img src={image.src} alt={image.alt} className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
        <h3 className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">{image.alt}</h3>
        <p className="text-cyan-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{image.category}</p>
      </div>
    </div>
  );
};

export default GalleryItem;
