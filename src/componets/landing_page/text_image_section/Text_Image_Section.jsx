import React from 'react';
import './textImageSection.css';
import logo from '../../../assets/images/hod.png';

const TextImageSection = () => {
  return (
    <div className="container-4">
      <div className="text-section-4" >
        <p>The University of Cape Coast has established the Department of Computer Science and Information Technology to address the need for trained computer scientists and information technologists in Ghana’s rapidly growing economy.</p><br/>
        <p>This move aims to overcome the shortage of qualified IT professionals worldwide that hinders socio-economic development.</p>
        <p>The department offers programs such as BSc Computer Science, BSc Information Technology, and a PhD in Computer Science and Application.</p><br/>
        <p>These programs provide a comprehensive education covering various aspects of Computer Science and Information Technology, including software engineering, artificial intelligence, internet systems, computer security, and more.</p><br/>
        <p>The department’s focus is to prepare qualified high school graduates for careers in computing through these programs.</p>
      </div>
      <div className='Yussif-4'>
        <div className="image-section-4">
            <img src={logo} alt="Person" />
        <div>
            <h1>Dr. Abdul-Lateef Yussif</h1>
            <h4>Head Of Department</h4>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default TextImageSection;
