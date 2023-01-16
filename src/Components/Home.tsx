import React from 'react';
import { HomeProps } from '../Interfaces/HomeProps';
import './Styles/Home.css';

const Home = (props:HomeProps) => {
  return (
    <>
      <div className="container text-center">
        <h1 className="display-4 fw-normal title">{props.title}</h1>
        <p className="fs-5 text-muted desc">{props.description}</p>
      </div>
    </>
  );
};

Home.defaultProps = {
  title: 'Its Me',
  description: 'Self motivated and hardworking fresher seeking for an opportunity to work challenging environment to prove my skills and utilize my knowledge and intelligence.'
};

export default Home;