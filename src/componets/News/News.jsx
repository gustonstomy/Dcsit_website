import React from 'react';
import './News.css';

const newsData = {
  category: 'Uncategorized',
  title: 'University of Cape Coast Welcomes Aspiring Computer Scientists and IT Enthusiasts for Exciting Admission Season',
  date: 'September 4, 2023',
  imgSrc: '/src/assets/images/ad.png', 
  details: 'The University of Cape Coast is thrilled to announce its latest admission season for Computer Science and Information Technology (IT) programs. Aspiring students are invited to embark on a journey […]'
};

const News = () => {
  return (
    <div className="latest-news-section-2">
      <div className="latest-news-content-2">
        <div className="news-card-2">
          <a href="#"><img src={newsData.imgSrc} alt="News" className="news-image-2" /></a>
          <div className="news-text-2">
           <div className="dateDiv">
             <p className="news-category-2">{newsData.category}</p>
            <p className="news-date2">{newsData.date}</p>
           </div>
            <a href="#"><h3 className="news-title-2">{newsData.title}</h3></a>
            <p className="details">{newsData.details}</p>
          </div>
        </div>
        <a href="#" className="learn-more2">Learn More ➜</a>
      </div>
    </div>
  );
};

export default News;
