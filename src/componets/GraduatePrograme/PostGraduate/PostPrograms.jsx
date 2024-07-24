import React from 'react';
import './PostPrograms.css';

const PostPrograms = () => {
  return (
    <div className="programs-container">
      <div className="program-card">
        <h2>Mphil In Computer Science </h2>
        <p>
          The MPhil in Computer Science at the University of Cape Coast is a 2-year research degree that provides students 
          with advanced knowledge and skills in computer science.
           The program is open to graduates with a good first degree in
            computer science, mathematics, or a related field. Students will take courses in artificial intelligence, data mining, software engineering, and computer networks, and will complete a thesis on a topic of their choosing
        </p>
        <a href="/read-more" className="read-more-link">Read More</a>
      </div>
      <div className="program-card">
        <h2>PhD In Computer Science</h2>
        <p>
          The PhD in Computer Science at the University of Cape Coast is a 3-year research degree that prepares students for careers in research, 
          teaching, and industry. The program is open to graduates with an MPhil or 
          research degree in an appropriate field of study. Students will take courses in artificial intelligence, 
          machine learning, data science, and software engineering, and will
           complete a doctoral dissertation on a topic of their choosing
        </p>
        <a href="/read-more" className="read-more-link">Read More</a>
      </div>
    </div>
  );
};

export default PostPrograms;
