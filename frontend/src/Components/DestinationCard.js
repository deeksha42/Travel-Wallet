// DestinationCard.js
import React from "react";
import "./DestinationCard.css";
import { useNavigate } from "react-router-dom";

const DestinationCard = ({ id, name, image }) => {
  const navigate = useNavigate();

  const redirectToDetail = (id) => {
    // Use React Router's navigate to navigate to the destination detail page
    navigate(`/destination/${id}`);
  };
  return (
    <div className="card1" onClick={() => redirectToDetail(id)}>
      <img src={image} alt={name} />
      <div className="card-content1">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default DestinationCard;
