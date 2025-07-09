import Button from "../global/Button"

export default function Services() {
    return (
        <section className="px-[5%] lg:px-[10%] flex w-[100%] flex-col gap-2 place-items-center text-center py-20" id="services">
            <h1 className="text-4xl font-bold text-red-950">What I offer</h1>
            <p className="max-w-150">I offer a range of personalised services, from creating customized workout plans to working with you and helping you achieve your goals</p>
            <Button link="/services" content="See my services" bg="text-gray-200 bg-red-900 hover:bg-red-950 mb-8" />

            <div className="flex flex-wrap gap-12 place-content-center">
                <div className="flex gap-8 shadow-lg border-solid border-1 border-gray-400 p-8 rounded-md text-start max-w-120">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-28 fill-gray-700 place-self-start" viewBox="0 0 24 24"><title>account-supervisor</title>
                        <path d="M16.5,12A2.5,2.5 0 0,0 19,9.5A2.5,2.5 0 0,0 16.5,7A2.5,2.5 0 0,0 14,9.5A2.5,2.5 0 0,0 16.5,12M9,11A3,3 0 0,0 12,8A3,3 0 0,0 9,5A3,3 0 0,0 6,8A3,3 0 0,0 9,11M16.5,14C14.67,14 11,14.92 11,16.75V19H22V16.75C22,14.92 18.33,14 16.5,14M9,13C6.67,13 2,14.17 2,16.5V19H9V16.75C9,15.9 9.33,14.41 11.37,13.28C10.5,13.1 9.66,13 9,13Z" />
                    </svg>
                    <div>
                        <h2 className="text-lg font-semibold">1-on-1 Personal Training</h2>
                        <p>Tailored fitness sessions designed for your goals. Full guidance, proper form, and real results.</p>
                    </div>
                </div>

                <div className="flex gap-8 shadow-lg border-solid border-1 border-gray-400 p-8 rounded-md text-start max-w-120">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-28 fill-gray-700 place-self-start" viewBox="0 0 24 24"><title>weight-lifter</title>
                        <path d="M12 5C10.89 5 10 5.89 10 7S10.89 9 12 9 14 8.11 14 7 13.11 5 12 5M22 1V6H20V4H4V6H2V1H4V3H20V1H22M15 11.26V23H13V18H11V23H9V11.26C6.93 10.17 5.5 8 5.5 5.5L5.5 5H7.5L7.5 5.5C7.5 8 9.5 10 12 10S16.5 8 16.5 5.5L16.5 5H18.5L18.5 5.5C18.5 8 17.07 10.17 15 11.26Z" />
                    </svg>
                    <div>
                        <h2 className="text-lg font-semibold">Group Fitness Classes</h2>
                        <p>Fun, energetic group workouts to make lifelong friendships and achieve your goals.</p>
                    </div>
                </div>

                <div className="flex gap-8 shadow-lg border-solid border-1 border-gray-400 p-8 rounded-md text-start max-w-120">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-28 fill-gray-700 place-self-start" viewBox="0 0 24 24"><title>monitor-account</title>
                        <path d="M21 2C22.05 2 22.92 2.81 23 3.85L23 4V16C23 17.05 22.18 17.92 21.15 18L21 18H14V20H16V22H8V20H10V18H3C1.95 18 1.08 17.18 1 16.15L1 16V4C1 2.94 1.81 2.08 2.85 2L3 2H21M21 4H3V16H21V4M12 11C14.21 11 16 11.9 16 13V14H8V13C8 11.9 9.79 11 12 11M12 6C13.11 6 14 6.9 14 8S13.11 10 12 10 10 9.11 10 8 10.9 6 12 6Z" />
                    </svg>
                    <div>
                        <h2 className="text-lg font-semibold">Online Coaching</h2>
                        <p>Train from anywhere with frequent video checkins and customized plans.</p>
                    </div>
                </div>

                <div className="flex gap-8 shadow-lg border-solid border-1 border-gray-400 p-8 rounded-md text-start max-w-120">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-28 fill-gray-700 place-self-start" viewBox="0 0 24 24"><title>food-variant</title>
                        <path d="M22,18A4,4 0 0,1 18,22H15A4,4 0 0,1 11,18V16H17.79L20.55,11.23L22.11,12.13L19.87,16H22V18M9,22H2C2,19 2,16 2.33,12.83C2.6,10.3 3.08,7.66 3.6,5H3V3H4L7,3H8V5H7.4C7.92,7.66 8.4,10.3 8.67,12.83C9,16 9,19 9,22Z" />
                    </svg>
                    <div>
                        <h2 className="text-lg font-semibold">Nutrition Guidance</h2>
                        <p>Personalised meal planning and sustainable diet strategies to support your training and health.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}