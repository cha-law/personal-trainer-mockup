import Button from "../global/Button"
import ScrollInto from "../global/ScrollInto";

export default function Hero() {
    return (
        <section className="px-5 py-20 h-150 flex place-items-center place-content-center text-gray-100 text-wrap bg-[url('../gym-backdrop.jpg')] mix-blend-darken bg-cover bg-no-repeat bg-center bg-fixed">
            <div className="flex flex-col gap-y-6 p-10 bg-red-950/60 rounded-lg shadow-xl max-w-[600px] z-3 backdrop-blur-sm backdrop-sepia">
                <h1 className="text-4xl font-bold text-white">Kickstart your fitness journey</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="flex flex-wrap gap-2">
                    <Button link="/contact" content="Get in touch" bg="text-red-950 bg-gray-100 hover:bg-gray-300" />
                    <ScrollInto element="services" content="Learn more" bg="text-gray-100 hover:bg-red-900 border-solid border-1 border-gray-100" />
                </div>  
            </div>
        </section>
    )
}