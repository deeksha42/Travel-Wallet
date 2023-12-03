import React from "react";
import "./PhotoGallery.css";
import img1 from "./gallery/img_1.jpg";
import img2 from "./gallery/img-5.jpg";
import img3 from "./gallery/img-8.jpg";
import img4 from "./gallery/img_10.jpg";
import img5 from "./gallery/img_11.jpg";
import img6 from "./gallery/img-6.jpg";
import img7 from "./gallery/img_3.jpg";
import img8 from "./gallery/img_7.jpg";
import img9 from "./gallery/img_2.jpg";
import img10 from "./gallery/img_8.jpg";
import img11 from "./gallery/img_4.jpg";
import img12 from "./gallery/img_9.jpg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

const PhotoGallery = () => {
  return (
    <>
      <div className="gallery">
        <div className="container_1">
          <div className="heading">
            <h3>
              <b>Photo Gallery</b>
            </h3>
          </div>

          <div className="box">
            <div className="dream">
              {images.slice(0, 4).map((src, index) => (
                <img key={index} src={src} alt={`Gallery ${index + 1}`} />
              ))}
            </div>

            <div className="dream">
              {images.slice(4, 8).map((src, index) => (
                <img key={index} src={src} alt={`Gallery ${index + 5}`} />
              ))}
            </div>

            <div className="dream">
              {images.slice(8, 12).map((src, index) => (
                <img key={index} src={src} alt={`Gallery ${index + 9}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
