import React, { useState, useEffect } from 'react';
import './Nslider.css';

const NImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const slides = [
    { src: '/src/assets/images/NOT1.jpg', alt: 'Slide 1' },
    { src: '/src/assets/images/NOT2.jpg', alt: 'Slide 2' },
    { src: '/src/assets/images/NOT3.jpg', alt: 'Slide 3' },
    { src: '/src/assets/images/NOT4.jpg', alt: 'Slide 4' },
    { src: '/src/assets/images/NOT5.jpg', alt: 'Slide 5' },
    { src: '/src/assets/images/NOT6.jpg', alt: 'Slide 6' },
    { src: '/src/assets/images/NOT7.jpg', alt: 'Slide 7' },
  ];

  const nextSlide = () => {
    setTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTransitioning(false);
    }, 3000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="img-slider3">
      {slides.map((slide, index) => (
        <div
          className={`slider3 ${index === currentSlide ? 'active' : ''}`}
          key={index}
          style={{
            transition: transitioning && index === currentSlide ? 'opacity 0.5s ease' : 'none'
          }}
        >
          <img src={slide.src} alt={slide.alt} className="slide3" />
          
        </div>
      ))}
    </div>
  );
};

export default NImageSlider;
