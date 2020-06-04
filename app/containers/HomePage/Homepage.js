/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState, useMemo } from 'react';
import './Homepage.scss';
// import Header from '../../components/Header/Header.js';
// import Footer from '../../components/Footer/Footer.js';
import { Helmet } from 'react-helmet-async';
import PostsList from '../../components/PostsList/PostsList';

const homepagePosts = [
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

function useSearchPosts(posts) {
  const [query, setQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useMemo(() => {
    // eslint-disable-next-line arrow-body-style
    const result = posts.filter((post) => {
      return (
        `${post.title}`.toLowerCase().includes(query.toLowerCase()) ||
        `${post.subtitle}`.toLowerCase().includes(query.toLowerCase())
      );
    });
    setFilteredPosts(result);
  }, [posts, query]);

  return { query, setQuery, filteredPosts };
}

function HomePage() {
  const { query, setQuery, filteredPosts } = useSearchPosts(homepagePosts);

  return (
    <div className="home-page">
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <section className="main">
        <h1 className="main__title">¿Sobre que temas quieres aprender?</h1>
        <input
          className="input"
          type="text"
          placeholder="Buscar..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </section>

      <section className="carousel">
        <div className="carousel__container">
          {filteredPosts ? (
            <PostsList posts={filteredPosts} />
          ) : (
            <PostsList posts={homepagePosts} />
          )}
        </div>
      </section>
    </div>
  );
}
export default HomePage;
