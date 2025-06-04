
import React, { useState, useCallback } from 'react';
import SectionContainer from '../components/SectionContainer';
import GalleryItem from '../components/GalleryItem';
import { GALLERY_IMAGES_DATA } from '../constants';
import { GalleryImage } from '../types';

// Modal Component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: GalleryImage | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, image }) => {
  if (!isOpen || !image) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] p-4"
      onClick={onClose}
    >
      <div 
        className="bg-slate-800 p-2 rounded-lg shadow-2xl max-w-3xl max-h-[90vh] relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image
      >
        <img 
          src={image.src.replace('/800/600', '/1200/800')} // Request larger image for modal
          alt={image.alt} 
          className="object-contain w-full h-full max-h-[calc(90vh-4rem)] rounded" 
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-slate-700 hover:bg-slate-600 text-white rounded-full p-2 focus:outline-none transition-colors"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="absolute bottom-2 left-2 right-2 bg-black/50 text-white p-3 rounded-b-md">
          <h3 className="text-lg font-semibold">{image.alt}</h3>
          <p className="text-sm text-cyan-300">{image.category}</p>
        </div>
      </div>
    </div>
  );
};


const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [modalImage, setModalImage] = useState<GalleryImage | null>(null);

  const categories = ['All', ...new Set(GALLERY_IMAGES_DATA.map(img => img.category))];

  const filteredImages = selectedCategory === 'All' 
    ? GALLERY_IMAGES_DATA 
    : GALLERY_IMAGES_DATA.filter(img => img.category === selectedCategory);

  const openModal = useCallback((image: GalleryImage) => {
    setModalImage(image);
  }, []);

  const closeModal = useCallback(() => {
    setModalImage(null);
  }, []);

  return (
    <SectionContainer>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Our <span className="text-cyan-400">Work</span></h2>
        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
          Explore a selection of our completed projects, showcasing our commitment to quality and innovative design across various domains.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap justify-center gap-2 sm:gap-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300
              ${selectedCategory === category 
                ? 'bg-cyan-500 text-white shadow-lg' 
                : 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:text-white'
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredImages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredImages.map((image: GalleryImage) => (
            <GalleryItem key={image.id} image={image} onClick={() => openModal(image)} />
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-400 text-xl mt-10">No projects found for this category yet. Check back soon!</p>
      )}
      <Modal isOpen={!!modalImage} onClose={closeModal} image={modalImage} />
    </SectionContainer>
  );
};

export default GalleryPage;
