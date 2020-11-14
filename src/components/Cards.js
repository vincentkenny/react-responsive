import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Checkout these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img2.jpg"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img1.jpg"
              text="Travel through the grassland of Madagascar"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img3.jpg"
              text="Sail on a boat through the rivers of Norway"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/img4.jpg"
              text="Watch the sun rise above the mountains of Greenland"
              label="Luxury"
              path="/services"
            />
            <CardItem
              src="images/img8.jpg"
              text="Enjoy your relaxation on the serene beaches of Bali"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
