"use client";

import { useState } from "react";

interface GalleryProps {
  images: string[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  const handlePrevious = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  return (
    <div>
      <button onClick={handlePrevious}>Previous</button>
      <img 
        src={images[currentImage]} 
        alt={`Image ${currentImage}`} 
        width="500"
        height="300"
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Gallery;
