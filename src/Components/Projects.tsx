import React from 'react';

const Projects = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
          </div>
          <div className="col-md-5">
            <div className="container">

              <img src="https://source.unsplash.com/300x400/?technology" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;