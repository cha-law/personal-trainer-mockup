export default function Services() {
    return (
        <section className="py-20 flex  flex-col place-items-center gap-2">
            <h1 className="font-bold text-4xl">Our Services</h1>
            <p>We offer a range of services to suit your personal needs and goals.</p>

            <div className="flex flex-wrap gap-8 mt-10 text-wrap">
                <div className="flex flex-col max-w-100 gap-2 p-6 border border-gray-300 rounded-md shadow-md hover:shadow-xl transition-shadow duration-200">
                    <div className="flex gap-8 place-content-between place-items-center">
                        <h2 className="font-bold text-3xl">£49/month</h2>
                        <div className="p-2 text-sm font-medium border border-gray-300 text-gray-500 rounded-md">Basic</div>
                    </div>

                    <p>A basic plan for beginners looking to build a solid foundation.</p>
                    <h3 className="font-medium">What's included?</h3>
                    <ul className="flex flex-col gap-1">
                        <li className="flex gap-2 place-items-start">
                            <svg className="min-w-6 max-w-6 fill-green-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>
                            <p>Personalized 4-week workout plan.</p>
                        </li>
                        <li className="flex gap-2 place-items-start">
                            <svg className="min-w-6 max-w-6 fill-green-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>
                            <p>Weekly check-ins.</p>
                        </li>
                        <li className="flex gap-2 place-items-start">
                            <svg className="min-w-6 max-w-6 fill-green-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>
                            <p>Basic nutrition guide.</p>
                        </li>
                        <li className="flex gap-2 place-items-start">
                            <svg className="min-w-6 max-w-6 fill-green-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>
                            <p>24/7 support.</p>
                        </li>
                    </ul>
                    <a className="mt-4 p-4 border border-gray-400 text-gray-600 w-full text-center rounded-md cursor-pointer hover:bg-red-100 transition duration-200">Contact us</a>
                </div>

                <div className="flex flex-col max-w-100 gap-2 p-6 border border-gray-300 rounded-md shadow-md hover:shadow-xl transition-shadow duration-200">
                    <div className="flex gap-8 place-content-between place-items-center">
                        <h2 className="font-bold text-3xl">£79/month</h2>
                        <div className="p-2 text-sm font-medium border border-blue-300 text-blue-500 rounded-md">Premium</div>
                    </div>

                    <p>Ideal for those ready to take their training to the next level.</p>
                    <h3 className="font-medium">What's included?</h3>
                    <ul className="flex flex-col gap-1">
                        <li className="flex gap-2 place-items-start">
                            <svg className="min-w-6 max-w-6 fill-green-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>
                            <p>Personalized monthly workout plan.</p>
                        </li>
                        <li className="flex gap-2 place-items-start">
                            <svg className="min-w-6 max-w-6 fill-green-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>
                            <p>Weekly check-ins.</p>
                        </li>
                        <li className="flex gap-2 place-items-start">
                            <svg className="min-w-6 max-w-6 fill-green-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>
                            <p>Basic nutrition guide.</p>
                        </li>
                        <li className="flex gap-2 place-items-start">
                            <svg className="min-w-6 max-w-6 fill-green-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>
                            <p>24/7 support.</p>
                        </li>
                    </ul>
                    <a className="mt-4 p-4 border border-gray-400 text-gray-600 w-full text-center rounded-md cursor-pointer hover:bg-red-100 transition duration-200">Contact us</a>
                </div>

                <div className="flex flex-col max-w-100 gap-2 p-6 border border-gray-300 rounded-md shadow-md hover:shadow-xl transition-shadow duration-200">
                    <div className="flex gap-8 place-content-between place-items-center">
                        <h2 className="font-bold text-3xl">£99/month</h2>
                        <div className="p-2 text-sm font-medium border border-red-800 text-red-900 rounded-md">Elite</div>
                    </div>

                    <p>For athletes or clients needing elite coaching.</p>
                    <h3 className="font-medium">What's included?</h3>
                    <ul className="flex flex-col gap-1">
                        <li className="flex gap-2 place-items-start">
                            <svg className="min-w-6 max-w-6 fill-green-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>
                            <p>Fully personalized monthly workout and nutrition plan.</p>
                        </li>
                        <li className="flex gap-2 place-items-start">
                            <svg className="min-w-6 max-w-6 fill-green-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>
                            <p>Lifestyle coaching (sleep, stress).</p>
                        </li>
                        <li className="flex gap-2 place-items-start">
                            <svg className="min-w-6 max-w-6 fill-green-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>
                            <p>One-on-one coaching.</p>
                        </li>
                        <li className="flex gap-2 place-items-start">
                            <svg className="min-w-6 max-w-6 fill-green-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>
                            <p>24/7 support.</p>
                        </li>
                    </ul>
                    <a className="mt-4 p-4 border border-gray-400 text-gray-600 w-full text-center rounded-md cursor-pointer hover:bg-red-100 transition duration-200">Contact us</a>
                </div>
            </div>
        </section>
    )
}