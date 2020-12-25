import React from 'react';
import Img from 'gatsby-image';
import useProfileImage from '../hooks/useProfileImage';
import { FaTwitter, FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import useSiteMetadata from '../hooks/useSiteMetadata';
import '../css/profile.styl';

const Profile = _ => {
  const data = useProfileImage();
  const { github, twitter, linkedIn, mailto, resume } = useSiteMetadata();
  return (
    <div className="profile-container">
      <div className="profile-image">
        <Img className="image" fluid={data.file.childImageSharp.fluid} />
      </div>
      <div className="social-profiles">
        <span>
          <a href={twitter} target="_blank" rel="noreferrer">
            <FaTwitter color="var(--secondary-color)" />
          </a>
        </span>
        <span>
          <a href={linkedIn} target="_blank" rel="noreferrer">
            <FaLinkedin color="var(--secondary-color)" />
          </a>
        </span>
        <span>
          <a href={github} target="_blank" rel="noreferrer">
            <FaGithub color="var(--secondary-color)" />
          </a>
        </span>
        <span>
          <a href={mailto}>
            <FiMail color="var(--secondary-color)" />
          </a>
        </span>
        <span>
          <a href={resume} target="_blank" rel="noreferrer">
            <FaFilePdf color="var(--secondary-color)" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default Profile;
