import React, { useState, useEffect } from 'react';
import './slider.css';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const slides = [
    { src: '/src/assets/images/BS.png', alt: 'Slide 1' },
    { src: '/src/assets/images/GRAT1.jpg', alt: 'Slide 2', text: 'BSc. Computer Science Students\n who graduate from the programme will be able to apply their skills to a variety of industries' },
    { src: '/src/assets/images/gge.png', alt: 'Slide 3' },
    { src: '/src/assets/images/Alor.jpg', alt: 'Slide 4', text: 'Undergraduate Programmes \n Bachelor of Computer Science \n Bachelor of Information Technology' },
    { src: '/src/assets/images/NOT7.jpg', alt: 'Slide 5',text: 'Your further in Tech begins here!\n Apply now to secure your spot at \n UCC  and embark on a journey \n filled with  innovation and endless opportunities ' },
    // { src: '/src/assets/images/maam.jpg', alt: 'Slide 6', text: 'Example Text 6' },
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
    <div className="img-slider-10">
      {slides.map((slide, index) => (
        <div
          className={`slider-10 ${index === currentSlide ? 'active' : ''}`}
          key={index}
          style={{
            transition: transitioning && index === currentSlide ? 'opacity 0.5s ease' : 'none'
          }}
        >
          <img src={slide.src} alt={slide.alt} className="slide-10" />
          {slide.text && (
            <div className="slide-text-10">
              <h2>{slide.text?.split('\n').map((line, idx) => (
                <span key={idx}>{line}<br /></span>
              ))}</h2>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
