import React, { useRef, useEffect } from 'react';

const Footerheader = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in');
                }
            });
        }, {
            threshold: 0.5
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className="transform px-2 md:py-5 md:px-2 py-5 xl:px-40 lg:py-20 xl:py-20 bg-blue-900 flex justify-between items-center transition-all duration-500 ease-in-out">
            <h2 className="text-white text-lg md:text-[2.4rem]">Still wondering where to start?</h2>

            <div className="">
                <a href="/contact">
                    <button className="bg-orange-500 hover:bg-white hover:text-orange-500 text-white border border-orange-500 rounded-full py-1 px-5 md:py-3 md:px-12 lg:mr-8 text-[0.9rem] md:text-[1.3rem] font-medium transition-colors duration-500">
                        Contact us
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Footerheader;
