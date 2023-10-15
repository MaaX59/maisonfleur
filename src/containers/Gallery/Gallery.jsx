import {React, useRef} from "react";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import './Gallery.css'
import { images } from '../../images/gallery';
const galleryImages =[images.image1, images.image2, images.image3, images.image4, images.image5, images.image6, images.image7, images.image8 ]


const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };
  return (
    <div><div className="app__gallery-images">
    <div className="app__gallery-images_container" ref={scrollRef}>
      {galleryImages.map((image, index)=> (
        <div className="app__gallery-images_card flex__center" key={`gallery_image- ${index + 1}`} > 
        
        <img src={image} alt="gallery" />
        </div>
      ))}
    </div>
    <div className="app__gallery-images_arrows">
      <BsArrowLeftShort
        className="gallery__arrow-icon"
        onClick={() => scroll("left")}
      />
      <BsArrowRightShort
        className="gallery__arrow-icon"
        onClick={() => scroll("right")}
      />
    </div>
  </div></div>
  )
}

export default Gallery