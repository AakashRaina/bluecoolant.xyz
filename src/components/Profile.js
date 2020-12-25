import React from 'react';
import Img from 'gatsby-image';
import useProfileImage from '../hooks/useProfileImage';
import '../css/profile.styl';

const Profile = props => {
  const data = useProfileImage();
  return (
    <div className="profile-container">
      <div className="profile-image">
        <Img className="image" fluid={data.file.childImageSharp.fluid} />
      </div>
      <div className="social-profiles">Icons here</div>
    </div>
  );
};

export default Profile;
