import React from 'react';
import { HomeProps } from '../Interfaces/HomeProps';
import './Styles/Home.css';
import Carosuel from './Carosuel';

const Home = (props:HomeProps) => {
  return (
    <>
      <Carosuel />
      <div className="mt-3 container text-center">
        <h1 className="display-4 fw-normal title">{props.title}</h1>
        <p className="fs-5 text-muted desc">{props.description}</p>
      </div>
    </>
  );
};

Home.defaultProps = {
  title: 'Its Me',
  description: 'Enthusiastic engineering graduate with basic knowledge in coding and design. Proficient in C++, HTML, Css & JavaScript, MERN Stack, and TypeScript. Ability to learn new Technologies quickly. Capability to work in teams by providing valuable support.'
};

export default Home;