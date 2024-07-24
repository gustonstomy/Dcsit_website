import React from 'react';
import './LatestNews.css';

const newsData = {
  category: 'Uncategorized',
  title: 'University of Cape Coast Welcomes Aspiring Computer Scientists and IT Enthusiasts for Exciting Admission Season',
  date: 'September 4, 2023',
  imgSrc: '/src/assets/images/ad.png', 
};

const LatestNews = () => {
  return (
    <div className="latest-news-section">
      <div className="latest-news-header">
        <h2>Latest News</h2>
      </div>
      <div className="latest-news-content">
        <div className="news-card">
          <img src={newsData.imgSrc} alt="News" className="news-image" />
          <div className="news-text">
            <p className="news-category">{newsData.category}</p>
            <h3 className="news-title">{newsData.title}</h3>
            <p className="news-date">{newsData.date}</p>
          </div>
        </div>
        <a href="/news-blog" className="view-all-news-btn">View all News</a>
      </div>
    </div>
  );
};

export default LatestNews;
