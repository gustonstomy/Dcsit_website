import React from 'react';
import './ImageTextComponent.css';

const ImageTextComponent = () => {
  return (
    <div className="container1">
      <div className="card1">
        <img src="/src/assets/images/comput-SC.png" alt="Undergraduate" className="image"/>
        <h3 className="title">Undergraduate</h3>
        <p className="description">A Computer Science or Information Technology degree teaches fundamentals of computing and prepares for tech careers</p>
        <a href="/UnderGraduate" className="read-more">Read More</a>
      </div>
      <div className="card1">
        <img src="/src/assets/images/R&H.png" alt="Postgraduate" className="image"/>
        <h3 className="title">Postgraduate</h3>
        <p className="description">Advanced Computer Science or Information Technology degree for tech careers and research</p>
        <a href="/PostGraduate" className="read-more">Read More</a>
      </div>
    </div>
  );
};

export default ImageTextComponent;
