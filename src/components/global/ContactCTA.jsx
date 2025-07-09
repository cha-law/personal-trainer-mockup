import Button from "./Button";

export default function ContactCTA() {
    return (
        <section className="px-[5%] lg:px-[10%] py-20">
            <div className="flex flex-col gap-y-12 lg:flex-row place-items-center place-content-between bg-red-980 text-gray-100 text-wrap rounded-xl p-8 sm:p-20 shadow-2xl">
                <img src="pt-coach2.jpg" alt="coach-picture" className="bg-gray-500 w-[40%] aspect-square object-cover" />

                <div className="flex flex-col place-content-center gap-4 lg:w-[50%]">
                    <h1 className="text-4xl font-bold text-white">Get In Touch</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="flex gap-2">
                        <Button link="/contact" content="Contact us" bg="text-red-950 bg-gray-100 hover:bg-gray-300" />
                    </div>
                </div>
            </div>
        </section>
    )
}