import { useState } from "react";

import Testimonial from "../global/Testimonial"

export default function Testimonials() {
    const [sliderIndex, setSliderIndex] = useState(0);

    const Testimonials = [
        { name: "John Smith" },
        { name: "Sarah Jones" },
        { name: "Matthew Smith" },
        { name: "Jacob Smith" },
        { name: "Amelia Jones" },
        { name: "James Smith" }
    ];

    function slide(direction) {
        const slider = document.getElementById("slider");
        let newIndex = sliderIndex;

        if (slider) {
            // Toggle the slider's position
            if (sliderIndex >= Testimonials.length - 1 && direction === 1) {
                newIndex = 0;
            } else if (sliderIndex <= 0 && direction === -1) {
                newIndex = Testimonials.length - 1;
            } else {
                newIndex = sliderIndex + direction;
            }
            // Update the slider's transform style
            slider.style.transform = `translateX(-${newIndex * 352}px)`;
            setSliderIndex(newIndex);
        }
    };

    const testimonialsList = Testimonials.map((testimonial, index) =>
        <Testimonial key={index} name={testimonial.name} />
    );

    return (
        <section className="px-[5%] lg:px-[10%] flex w-[100%] flex-col gap-8 place-items-center text-center py-20">
            <h1 className="text-4xl font-bold text-red-950">What our clients have to say</h1>
            <div className="w-full">
                <div className="flex place-items-center flex-col sm:flex-row gap-4">
                    <div onClick={() => slide(-1)} id="left-slider" className="p-2 rounded-full h-fit aspect-square border-solid border-1 border-red-800 hover:bg-red-200 transition delay-0.2s cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-red-800 w-6" viewBox="0 0 24 24"><title>arrow-left-thin</title><path d="M10.05 16.94V12.94H18.97L19 10.93H10.05V6.94L5.05 11.94Z" /></svg>
                    </div>
                    
                    <div className="grid max-w-80 md:max-w-[75vw] overflow-hidden">
                        <div className="flex gap-8 transition ease-out duration-800" id="slider">
                            {testimonialsList}
                        </div>
                    </div>

                    <div onClick={() => slide(1)} id="right-slider" className="p-2 rounded-full h-fit border-solid border-1 border-red-800 hover:bg-red-200 transition duration-[10s] cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-red-800 w-6" viewBox="0 0 24 24"><title>arrow-right-thin</title><path d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z" /></svg>
                    </div>
                </div>
            </div>
        </section>
    )
}