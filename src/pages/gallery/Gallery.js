import React, { Component } from 'react';
import { GalleryCard, GalleryContainer } from '../../components/Gallery';
import GalleryData from './GalleryData';

export default class Gallery extends Component {
  componentDidMount() {
    // TODO: Add fetch for images
  }
  render() {
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
  }
}
