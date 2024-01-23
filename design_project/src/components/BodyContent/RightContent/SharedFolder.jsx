import React from "react";
import "./shared_folder.css";

export default function SharedFolder() {
  return (
    <div className="all-user">
      <UserProfile img="https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg" />
      <UserProfile img="https://pxbar.com/wp-content/uploads/2023/09/instagram-profile-picture.jpg" />
      <UserProfile img="https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg" />
      <UserProfile img="https://pxbar.com/wp-content/uploads/2023/09/instagram-profile-picture.jpg" />
      <UserProfile img="https://i.pinimg.com/474x/98/51/1e/98511ee98a1930b8938e42caf0904d2d.jpg" />
    </div>
  );
}

function UserProfile({ img }) {
  return (
    <div className="user-div">
      <div className="user">
        <img src={img} alt="" />
      </div>
    </div>
  );
}
