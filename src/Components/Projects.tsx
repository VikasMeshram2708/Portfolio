import './Styles/Projects.css';

import Data from '../Data/index';

import React,{ useEffect, useState } from 'react';

import { ReposBody } from '../Interfaces/ReposBody';

const Projects = () => {
  const [items, setItems] = useState<ReposBody []>([]);

  useEffect(() => {
    setItems(Data);
    console.log(items);
  },[]);

  return (
    <>
      <h3 className='text-center mt-3 myTitle'>My Projects</h3>
      <ul>
        {items.map((elem) => {
          return (
            <div key={elem.id} className='container'>
              <img src={elem.avatar_img} alt="images" className='card-img-top img-links' />
              <div className="text-center">
                <li className='list-items-title'>{elem.title}</li>
                <p className='mt-3'><i>{elem.description}</i></p>
                <i className='list-items-link'>{elem.link}</i>
              </div>
              <hr />
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default Projects;