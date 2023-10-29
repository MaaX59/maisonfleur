import { React, useRef } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import "./Gallery.css";

import image1 from "../../images/gallery/1.webp";
import image2 from "../../images/gallery/2.jpg";
import image3 from "../../images/gallery/3.webp";
import image4 from "../../images/gallery/4.webp";
import image5 from "../../images/gallery/5.webp";
import image6 from "../../images/gallery/6.webp";
import image7 from "../../images/gallery/7.jpg";
import image8 from "../../images/gallery/8.png";
import image9 from "../../images/gallery/9.jpg";

const galleryImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 250;
    } else {
      current.scrollLeft += 250;
    }
  };

  return (
    <div className="app__gallery app__bg" id="gallery">
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="app__gallery-images_card"
              key={`gallery_image- ${index + 1}`}
            >
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
      </div>
    </div>
  );
};

export default Gallery;
