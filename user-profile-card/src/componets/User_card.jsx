import React from 'react';
import './User_card.css'

const UserProfileCard = ({ name, email, profilePicture, followers, likes, photos, age, jobTitle, location, articles }) => {
  return (
    <div className="user-profile-card">
      <div className="profile-header">
        <img src={profilePicture} alt="profile" className="profile-image" />
        <h2>{name}, {age}</h2>
        <p>{jobTitle}</p>
        <p>{location}</p>
      </div>
      <div className="stats">
        <div className="stat">
          <h4>{followers}</h4>
          <p>Followers</p>
        </div>
        <div className="stat">
          <h4>{likes}</h4>
          <p>Likes</p>
        </div>
        <div className="stat">
          <h4>{photos}</h4>
          <p>Photos</p>
        </div>
        <div className="stat">
          <h4>{articles}</h4>
          <p>Articles</p>
        </div>
      </div>
      <div className="footer">
        <a href={`mailto:${email}`} className="email-link">Contact</a>
      </div>
    </div>
  );
};

export default UserProfileCard;
