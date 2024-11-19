"use client";
import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Slide {
    title: string;
    subtitle: string;
    image: string;
    button: string;
    buttonStyle: string; // New field for custom button styles
}

const slides: Slide[] = [
    {
        title: "CRYORIC TAKU",
        subtitle: "Minimalistic PC Case",
        image: "image/file.png",
        button: "SHOP NOW",
        buttonStyle: "bg-[#f7b345;] text-white font-bold", // Custom button styles for Slide 1
    },
    {
        title: "ELECTRIC SHAVER",
        subtitle: "WIRELESS CHARGER ADAPTER",
        image: "image/file(1).png",
        button: "BUY NOW",
        buttonStyle: "bg-[#43B02A] text-white font-bold", // Custom button styles for Slide 2
    },
    {
        title: "GOOGLE HOME",
        subtitle: "YOUR PERSONAL ASSISTANT",
        image: "/image/white-electronics-s2-img.png",
        button: "BUY NOW",
        buttonStyle: "bg-[#66A7F0] text-white font-bold", // Custom button styles for Slide 3
    },
];

const ImageSlider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center z-10">
            {/* Left Arrow */}
            <button className="absolute left-5 lg:left-10 text-3xl p-2 z-20" onClick={prevSlide}>
                <FiChevronLeft />
            </button>

            {/* Slide */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <div className="flex min-h-screen flex-col lg:flex-row items-center justify-center p-6">
                        {/* Text Content */}
                        <div className="text-center lg:mr-36 animate-fade-in-up lg:text-left lg:max-w-lg space-y-4">
                            <h2 className="text-sm lg:text-lg uppercase font-bold text-gray-400 tracking-widest">
                                {slide.subtitle}
                            </h2>
                            <h1 className="text-6xl lg:text-9xl font-bold text-gray-800">
                                {slide.title}
                            </h1>
                            <div className="flex items-center justify-center  lg:mr-48 space-x-4">
                                <button
                                    className={`px-4 lg:px-7 py-2 lg:py-3 rounded-full transition duration-300 ease-in-out transform ${slide.buttonStyle}`} // Custom button styles applied here
                                >
                                    {slide.button}
                                </button>
                                <button className="px-4 lg:px-7 py-2 lg:py-3 font-bold border border-gray-400 text-gray-900 hover:bg-gray-300 hover:text-gray-700 rounded-full transition duration-300">
                                    VIEW MORE
                                </button>
                            </div>
                        </div>

                        {/* Image */}
                        <div className="mt-8 lg:mt-0 lg:ml-12">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full max-w-md object-contain animate-fade-in-right"
                            />
                        </div>
                    </div>
                </div>
            ))}

            {/* Right Arrow */}
            <button className="absolute right-5 lg:right-10 text-3xl p-2 z-20" onClick={nextSlide}>
                <FiChevronRight />
            </button>

            {/* Dots */}
            <div className="absolute bottom-5 left-5 lg:left-10 flex space-x-2 z-20 p-3 bg-white rounded-full shadow-lg">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-3 w-3 rounded-full transition-colors duration-300 ease-in-out ${currentSlide === index ? "bg-gray-800" : "bg-gray-400"}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default ImageSlider;
