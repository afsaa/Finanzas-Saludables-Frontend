/**
 *
 * PostsList
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import './PostsList.scss';
import playIcon from '../common/assets/images/play-icon.png';

function PostsList({ posts }) {
  return posts.map(({ id, imgSrc, imgAlt, title, subtitle }) => (
    <div key={id} className="carousel-item">
      <img className="carousel-item__img" src={imgSrc} alt={imgAlt} />
      <div className="carousel-item__details">
        <div>
          <img src={playIcon} alt="Play icon" />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">{subtitle}</p>
      </div>
    </div>
  ));
}

PostsList.propTypes = {};

export default PostsList;
