import React from 'react';
import { FaTimes } from 'react-icons/fa';

const ProjectModal = ({ image, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-white p-4 rounded-lg">
        <button
          className="absolute top-2 right-2 text-black"
          onClick={onClose}
        >
          <FaTimes size={24} />
        </button>
        <img src={image} alt="Full Size" className="max-w-full max-h-[80vh]" />
      </div>
    </div>
  );
};

export default ProjectModal;
