/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import '../../components/common/styles/main.scss';

export default function NotFound() {
  return (
    <section className="page-not-found">
      <h1 className="page-not-found__title animated rubberBand">404</h1>
      <p className="page-not-found__description">
        Upsss, parece que esta página no existe{' '}
        <span role="img" aria-label="Surprised Emoji">
          😯
        </span>
      </p>
    </section>
  );
}
