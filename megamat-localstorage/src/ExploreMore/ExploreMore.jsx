import React from "react";
import "./ExploreMore.css";

const exploreItems = [
  { id: 1, img: "./src/assets/img/1.png", title: "Megapass" },
  { id: 2, img: "./src/assets/img/2.png", title: "Topwear" },
  { id: 3, img: "./src/assets/img/3.png", title: "Bottomwear" },
  { id: 4, img: "./src/assets/img/4.png", title: "Womenswear" },
  { id: 5, img: "./src/assets/img/5.png", title: "Kidswear" },
  { id: 6, img: "./src/assets/img/6.png", title: "Innerwear" },
];

const ExploreMore = () => {
  return (
    <div className="explore-container">
      <h2 className="explore-title">EXPLORE MORE</h2>

      <div className="explore-list">
        {exploreItems.map((item) => (
          <div key={item.id} className="explore-card">
            <div className="explore-img-box">
              <img src={item.img} alt={item.title} className="explore-img" />
            </div>
            <p
              className={`explore-name ${
                item.title === "Megapass" ? "megapass" : ""
              }`}
            >
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMore;
