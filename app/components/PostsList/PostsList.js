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

const posts = [
  {
    id: 1,
    title: 'Las deudas te ahogan?',
    subtitle: `Los intereses que pagas en tus deudas cuentan y te pueden
          perjudicar.`,
    imgSrc:
      'https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80',
    imgAlt: 'Person Drowning',
  },
  {
    id: 2,
    title: 'Aprende a crear tu presupuesto',
    subtitle: `Determina en que estas gastando tu dinero y que cantidad.`,
    imgSrc:
      'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    imgAlt: 'Budgeting',
  },
  {
    id: 3,
    title: 'Desarrolla el habito de ahorrar',
    subtitle: `Ya sea para obtener lo que quieres o para alcanzar tus metas.`,
    imgSrc:
      'https://images.unsplash.com/photo-1567427013953-88102117053a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    imgAlt: 'Saving',
  },
  {
    id: 4,
    title: 'Invierte como debe ser',
    subtitle: `La mayoría de personas deberían invertir siempre a largo plazo
                  y de manera consistente.`,
    imgSrc:
      'https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
    imgAlt: 'Investing',
  },
];

function PostsList() {
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
