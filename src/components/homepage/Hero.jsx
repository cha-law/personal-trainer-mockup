import Button from "../global/Button"
import ScrollInto from "../global/ScrollInto";

export default function Hero() {
    return (
        <section className="py-20">
            <div className="flex flex-col gap-y-12 lg:flex-row place-items-center place-content-between bg-red-980 text-gray-100 text-wrap rounded-xl pt-20 pl-20 pr-20 shadow-2xl">
                <div className="flex flex-col place-content-center gap-4 lg:w-[50%] lg:pb-20">
                    <h1 className="text-4xl font-bold text-white">Kickstart your fitness journey</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="flex gap-2">
                        <Button link="/contact" content="Get in touch" bg="text-red-950 bg-gray-100 hover:bg-gray-300" />
                        <ScrollInto element="services" content="Learn more" bg="text-gray-100 hover:bg-red-900 border-solid border-1 border-gray-100" />
                    </div>
                    
                </div>

                <div className="bg-gray-500 w-[40%] aspect-square object-cover rounded-t-full faded-image" />
            </div>
        </section>
    )
}