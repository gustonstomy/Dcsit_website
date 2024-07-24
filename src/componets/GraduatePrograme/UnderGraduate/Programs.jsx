import React from 'react';
import './Programs.css';

const Programs = () => {
  return (
    <div className="programs-container-12">
      <div className="program-card-12">
        <h2>BSc. Computer Science</h2>
        <p>
          A BSc Computer Science degree program offers a comprehensive education in computer technology,
          software development, and computational problem-solving. Students learn programming, algorithms,
          software development, computer architecture, and more. Graduates are prepared for careers in
          software development, data analysis, cybersecurity, and research, with opportunities in various
          technology fields. This degree also serves as a foundation for advanced studies in computer science
          or entry into the tech industry.
        </p>
        <a href="/read-more" className="read-more-link-12">Read More</a>
      </div>
      <div className="program-card-12">
        <h2>BSc. Information Technology</h2>
        <p>
          A Bachelor of Science in Information Technology (BSc IT) undergraduate program is designed to equip
          students with the knowledge and skills needed to excel in the rapidly evolving world of technology.
          This program covers a wide range of topics, including software development, database management,
          network administration, cybersecurity, and IT project management. Graduates of the BSc IT program are
          well-prepared for careers in IT consulting, database administration, and other technology-related roles.
        </p>
        <a href="/read-more" className="read-more-link-12">Read More</a>
      </div>
    </div>
  );
};

export default Programs;
