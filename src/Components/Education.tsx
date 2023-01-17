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
    <div className="container mt-5">
      <h1 className="display-5 fw-bold lh-1 mb-3 clg-title">Rashtrasant Tukadoji Maharaj Nagpur University, Nagpur
July 2018 - July 2022</h1>
      <p className="lead fs-5">Bachelor of Engineering in Computer Science & Engineering
8.5 CGPA.
      <span>
        <hr />
      </span>
Related courses: Object Oriented Programming, Databases (no sql), Data Structures, Software Engineering.
      </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
      </div>
    </div>
  );
};

export default Education;
