"use client";
import { useEffect, useState } from "react";

const slides = [
    "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
];

export default function Carousel() {
    const [current, setCurrent] = useState(0);

    // Auto slide every 3s
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrent((prev) => (prev + 1) % slides.length);
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className="relative w-full h-64 md:h-96 overflow-hidden">
            {/* Slides */}
            {slides.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${current === index ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}

            {/* Controls */}
            <div className="absolute left-0 right-0 top-1/2 flex justify-between px-4 -translate-y-1/2">
                <button
                    onClick={() =>
                        setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
                    }
                    className="btn btn-circle"
                >
                    ❮
                </button>
                <button
                    onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
                    className="btn btn-circle"
                >
                    ❯
                </button>
            </div>
        </div>
    );
}
