import React from "react";
import "./category_card.css";
import { FaUser, FaStar } from "react-icons/fa";

export default function CategoryCard({ color = "#E26A9F", isFav = false }) {
  return (
    <div className="category-card" style={{ background: color }}>
      <div class="card-top">
        <div class="icon-div">
          <FaUser color={color} />
        </div>
        {isFav && <FaStar color="yellow" />}
      </div>
      <div class="card-bottom">
        <span className="title-text">Videos</span>
        <span className="subtitle-text">30 Files</span>
      </div>
    </div>
  );
}
