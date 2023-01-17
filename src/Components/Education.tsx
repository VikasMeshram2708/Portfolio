import React from 'react';
import './Styles/Education.css';

/* 
EDUCATION
Rashtrasant Tukadoji Maharaj Nagpur University, Nagpur
July 2018 - July 2022
Bachelor of Engineering in Computer Science & Engineering
8.5 CGPA
Related courses: Object Oriented Programming, Databases, Data Structures, Software Engineering
*/
const Education = () => {
  return (
    <div className="container">

      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src="https://source.unsplash.com/1400x400/?education" className="card-img-top" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3 clg-title">Rashtrasant Tukadoji Maharaj Nagpur University, Nagpur
July 2018 - July 2022</h1>
          <p className="lead fs-5">Bachelor of Engineering in Computer Science & Engineering
8.5 CGPA
          <span>
            <hr />
          </span>
Related courses: Object Oriented Programming, Databases, Data Structures, Software Engineering.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
