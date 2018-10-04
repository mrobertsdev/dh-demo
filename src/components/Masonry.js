import React from 'react';
import Gallery from 'react-photo-gallery';
 
const Masonry = (props) => {
  
  let PHOTO_SET = [
    {
      src: 'https://placeimg.com/300/320/' + props.cat,
      width: 1,
      height: 1
    },
    {
      src: 'https://placeimg.com/200/340/' + props.cat,
      width: 2,
      height: 3
    },
    {
      src: 'https://placeimg.com/293/320/' + props.cat,
      width: 1,
      height: 1
    },
    {
      src: 'https://placeimg.com/201/373/' + props.cat,
      width: 2,
      height: 3
    },
    {
      src: 'https://placeimg.com/201/376/' + props.cat,
      width: 2,
      height: 3
    },
    {
      src: 'https://placeimg.com/205/379/' + props.cat,
      width: 2,
      height: 3
    }
  ];
  return (
      <Gallery photos={PHOTO_SET} />
  );
}

export default Masonry;