import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
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
    <div className="relative w-full h-[20rem] lg:h-[35rem]">
      {slides.map((slide, index) => (
        <div
          className={`absolute w-full h-full transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          key={index}
        >
          <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
