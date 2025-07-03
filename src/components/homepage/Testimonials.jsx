import Testimonial from "../global/Testimonial"

export default function Testimonials() {
    function slide() {
        const slider = document.getElementById("slider");

        if (slider) {
            slider.classList.toggle("-translate-x-[60%]");
        }
    };

    return (
        <section className="flex flex-col gap-8 place-items-center text-center py-20">
            <h1 className="text-4xl font-bold text-red-950">What my clients have to say</h1>
            <div className="max-w-[100%]">
                <div className="flex place-items-center gap-4">
                    <div onClick={slide} id="left-slider" className="p-2 rounded-full h-fit aspect-square border-solid border-1 border-red-800 hover:bg-red-200 transition delay-0.2s cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-red-800 w-6" viewBox="0 0 24 24"><title>arrow-left-thin</title><path d="M10.05 16.94V12.94H18.97L19 10.93H10.05V6.94L5.05 11.94Z" /></svg>
                    </div>
                    
                    <div className="grid max-w-[100%] overflow-hidden">
                        <div className="flex gap-8 transition" id="slider">
                            <Testimonial name="John Smith" />
                            <Testimonial name="Sarah Jones" />
                            <Testimonial name="Matthew Smith" />
                            <Testimonial name="Jacob Smith" />
                            <Testimonial name="Amelia Jones" />
                            <Testimonial name="James Smith" />
                        </div>
                    </div>

                    <div onClick={slide} id="right-slider" className="p-2 rounded-full h-fit border-solid border-1 border-red-800 hover:bg-red-200 transition delay-0.2s cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-red-800 w-6" viewBox="0 0 24 24"><title>arrow-right-thin</title><path d="M14 16.94V12.94H5.08L5.05 10.93H14V6.94L19 11.94Z" /></svg>
                    </div>
                </div>
            </div>
        </section>
    )
}