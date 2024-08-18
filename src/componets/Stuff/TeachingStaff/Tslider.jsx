import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const slides = [
    { src: '/src/assets/images/T12.jpg', alt: 'Slide 1', text: 'PhD In Computer Science' },
    { src: '/src/assets/images/pro.jpg', alt: 'Slide 2', text: 'Mphil In Computer Science' },
    { src: '/src/assets/images/T6.jpg', alt: 'Slide 3', text: 'MSc Information Technology' },
    { src: '/src/assets/images/T4.jpg', alt: 'Slide 4', text: 'Example Text 4' },
    { src: '/src/assets/images/T5.png', alt: 'Slide 5', text: 'Example Text 5' },
    { src: '/src/assets/images/Reg.jpg', alt: 'Slide 6', text: 'Example Text 6' },
    { src: '/src/assets/images/T7.jpg', alt: 'Slide 7', text: 'Example Text 7' },
    { src: '/src/assets/images/NOT6.jpg', alt: 'Slide 8', text: 'Example Text 8' },
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
