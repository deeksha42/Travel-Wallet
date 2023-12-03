// DestinationDetailPage.js
import jsonData from "./destinations.json";
import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import "./DestinationDetails.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const DestinationDetailPage = () => {
  const { id } = useParams();
  const imageContainerRef = useRef(null);
  const detailsContainerRef = useRef(null);

  useEffect(() => {
    const destinationId = parseInt(id);
    const destination = jsonData.find((item) => item.id === destinationId);

    // Display different content based on the ID
    const imageContainer = imageContainerRef.current;
    const detailsContainer = detailsContainerRef.current;

    if (destination) {
      const image = document.createElement("img");
      image.src = process.env.PUBLIC_URL + destination.photo;
      image.alt = destination.title;
      imageContainer.appendChild(image);

      detailsContainer.innerHTML += `<h2>${destination.title}</h2>`;

      const descriptionElement = document.createElement("p");
      detailsContainer.appendChild(descriptionElement);

      // Typing effect function for description
      function typeEffect(text, index) {
        if (index < text.length) {
          descriptionElement.innerHTML += text.charAt(index);
          index++;
          setTimeout(function () {
            typeEffect(text, index);
          }, 2); // Adjust the typing speed by changing the delay (in milliseconds)
        }
      }

      // Call the typing effect function
      typeEffect(destination.desc, 0);
    } else {
      detailsContainer.innerHTML = "<p>No details found for this ID</p>";
    }
  }, [id, jsonData]);

  return (
    <>
      <Header />
      <div>
        <div className="container1" id="destination-details">
          <div className="image-container" ref={imageContainerRef}></div>
          <div className="details-container" ref={detailsContainerRef}></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DestinationDetailPage;
