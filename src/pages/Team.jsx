export default function Team() {
    return (
        <section className="px-[5%] lg:px-[10%] py-20 flex flex-col items-center">
            <h1 className="font-bold text-4xl">Meet the Team</h1>
            <p>Our team of dedicated professionals are here to help you achieve your fitness goals.</p>
            <div className="flex flex-col sm:flex-row gap-8 place-items-center max-w-140 p-8 border border-gray-300 rounded-md shadow-md mt-8">
                <img className="rounded-md aspect-square min-w-22 object-cover" src="pt-coach.jpg" alt="coach-picture" />
                <div>
                    <h2 className="font-semibold text-3xl">John Doe</h2>
                    <p className="font-medium text-gray-500">Founder</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div className="flex flex-wrap place-content-center place-items-center mt-8 gap-8 text-center">
                <div className="flex flex-col place-items-center max-w-80 gap-1 p-8 border border-gray-300 rounded-md shadow-md">
                    <div className="p-4 bg-gray-300 aspect-square rounded-full w-20">
                        <svg className="fill-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>account</title><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>
                    </div>
                    <h3 className="font-semibold text-xl">Jane Smith</h3>
                    <p className="font-medium text-gray-500">Nutritionist</p>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="flex flex-col place-items-center max-w-80 gap-1 p-8 border border-gray-300 rounded-md shadow-md">
                    <div className="p-4 bg-gray-300 aspect-square rounded-full w-20">
                        <svg className="fill-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>account</title><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>
                    </div>
                    <h3 className="font-semibold text-xl">Matthew Jones</h3>
                    <p className="font-medium text-gray-500">Personal Trainer</p>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className="flex flex-col place-items-center max-w-80 gap-1 p-8 border border-gray-300 rounded-md shadow-md">
                    <div className="p-4 bg-gray-300 aspect-square rounded-full w-20">
                        <svg className="fill-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>account</title><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>
                    </div>
                    <h3 className="font-semibold text-xl">Sarah Davis</h3>
                    <p className="font-medium text-gray-500">Sports Physiologist</p>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </section>
    )
}