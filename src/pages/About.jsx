import React from 'react';
import ReactDOM from 'react-dom';
import PhotoAlbum from "react-photo-album";
import '../App.css';

function About() {
  return (
    <div>
      <PhotoAlbum 
        layout="columns"
        photos={images}
        columns="1"
        spacing="30"
        padding="5"
        sizes="500px"
        />
    </div>
  );
}

export default About;