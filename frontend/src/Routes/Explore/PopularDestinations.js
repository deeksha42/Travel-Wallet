// PopularDestinationsPage.js
import React from "react";
import { Link } from "react-router-dom";
import DestinationCard from "../../Components/DestinationCard";
import "./PopularDestinations.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import MainScreen from "../../Components/MainScreen/MainScreen";

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Manali",
      image: process.env.PUBLIC_URL + "/images/manali.jpg",
    },
    {
      id: 2,
      name: "Mumbai",
      image: process.env.PUBLIC_URL + "/images/mumbai.jpg",
    },
    {
      id: 3,
      name: "Mysuru",
      image: process.env.PUBLIC_URL + "/images/mysuru.jpg",
    },
    {
      id: 4,
      name: "Pondicherry",
      image: process.env.PUBLIC_URL + "/images/pondicherry.jpg",
    },
    {
      id: 5,
      name: "Wayanad",
      image: process.env.PUBLIC_URL + "/images/wayanad.jpg",
    },
    {
      id: 6,
      name: "Panaji",
      image: process.env.PUBLIC_URL + "/images/panaji.jpg",
    },
    {
      id: 7,
      name: "Jaipur",
      image: process.env.PUBLIC_URL + "/images/jaipur.jpg",
    },
    {
      id: 8,
      name: "Hyderabad",
      image: process.env.PUBLIC_URL + "/images/hyderabad.jpg",
    },
    {
      id: 9,
      name: "Kolkata",
      image: process.env.PUBLIC_URL + "/images/kolkata.jpg",
    },
  ];

  return (
    <>
      <Header />

      <div>
        <h3 className="popular">Popular Destinations</h3>
        <div className="card-container1">
          {destinations.map((destination) => (
            <Link key={destination.id} to={`/destination/${destination.id}`}>
              {/* Use Link to navigate to the destination detail page */}
              <DestinationCard {...destination} />
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PopularDestinations;
