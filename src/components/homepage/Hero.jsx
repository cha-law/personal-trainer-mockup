import Button from "../global/Button"

export default function Hero() {
    return (
        <section className="py-20">
            <div className="flex place-content-between bg-indigo-950 text-gray-100 text-wrap rounded-lg p-20">
                <div className="flex flex-col place-content-center gap-4">
                    <h1 className="text-4xl font-bold text-white">Kickstart your fitness journey</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Button content="Get in touch" bg="text-indigo-950 bg-gray-100 hover:bg-gray-200" />
                </div>

                <img src="" alt="coach-picture" className="bg-gray-500 w-[30%] aspect-square" />
            </div>
        </section>
    )
}