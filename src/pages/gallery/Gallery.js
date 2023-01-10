import React from 'react';
import { GalleryCard, GalleryContainer } from '../../components/Gallery';
import GalleryData from './GalleryData';

const Gallery = () => {
  return (
    <>
      <h1 className="text-white text-center my-5 font-custom">Gallery</h1>
      <GalleryContainer>
        {GalleryData.map((image, index) => (
          <GalleryCard
            image={image.url}
            title={image.title}
            description={image.description}
            key={index}
          />
        ))}
      </GalleryContainer>
    </>
  );
};

export default Gallery;
