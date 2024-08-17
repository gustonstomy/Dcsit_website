import React, { useState, useEffect } from 'react';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  const slides = [
    { src: '/src/assets/images/BS.png', alt: 'Slide 1' },
    { src: '/src/assets/images/GRAT1.jpg', alt: 'Slide 2', text: 'BSc. Computer Science Students\n who graduate from the programme will be able to apply their skills to a variety of industries' },
    { src: '/src/assets/images/gge.png', alt: 'Slide 3' },
    { src: '/src/assets/images/Alor.jpg', alt: 'Slide 4', text: 'Undergraduate Programmes \n Bachelor of Computer Science \n Bachelor of Information Technology' },
    { src: '/src/assets/images/NOT7.jpg', alt: 'Slide 5',text: 'Your further in Tech begins here! Apply now to secure your spot at UCC  and embark on a journey filled with  innovation and endless opportunities ' },
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
    <div className="relative w-full h-[35rem] mb-8">
      {slides.map((slide, index) => (
        <div
          className={`absolute w-full h-full ${index === currentSlide ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out`}
          key={index}
        >
          <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
          {slide.text && (
            <div className="absolute bottom-[10%] left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md">
              <h2 className="m-0 w-[16em] text-2xl whitespace-pre-wrap">
                {slide.text.split('\n').map((line, idx) => (
                  <span key={idx}>{line}<br /></span>
                ))}
              </h2>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
