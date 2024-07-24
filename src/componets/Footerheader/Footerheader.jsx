import React, { useRef, useEffect } from 'react';
import './Footerheader.css';

const Footerheader = () => {
    // Use useRef to create a reference to the component element
    const sectionRef = useRef(null);

    // Intersection Observer setup
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add a CSS class to start the animation when in view
                    entry.target.classList.add('slide-in');
                }
            });
        }, {
            threshold: 0.5 // Trigger when 50% of the component is visible
        });

        // Start observing the sectionRef element
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        // Clean up the observer on component unmount
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className='footer1-section'>

            <h2>Still wondering where to start?</h2>

            <div className='footer-CTA'>
                <a href="/contact"><button className="StudyBtn">Contact us</button></a>
            </div>

        </div>
    );
}

export default Footerheader;
