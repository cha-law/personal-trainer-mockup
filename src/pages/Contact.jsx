export default function Contact() {
    return (
        <section className="px-[5%] lg:px-[10%] py-20 flex  flex-col place-items-center gap-2">
            <h1 className="font-bold text-4xl">Get in Touch</h1>
            <p>Still unsure? Feel free to contact us and ask any questions!</p>

            <div className="flex flex-col md:flex-row gap-8 mt-10">
                <div className="flex flex-col place-items-start">
                    <h2 className="font-semibold text-xl">Want to contact us directly?</h2>
                    <p className="text-gray-600 mb-5">You can use one of the options below to contact us directly.</p>

                    <div className="flex gap-4 mb-4">
                        <svg className="border-solid border-1 border-gray-400 rounded-md p-4 w-16 fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email-outline</title><path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" /></svg>
                        <div className="flex flex-col place-content-center">
                            <h3>Email Address:</h3>
                            <p className="font-medium">trainer@email.com</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="border-solid border-1 border-gray-400 rounded-md p-4 w-16 fill-gray-500" viewBox="0 0 24 24"><title>phone</title>
                            <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                        </svg>
                        <div className="flex flex-col place-content-center">
                            <h3>Phone Number:</h3>
                            <p className="font-medium">(+44) 5432 567890</p>
                        </div>
                    </div>
                </div>

                <div className="w-[1px] bg-gray-400 invisible md:visible"></div>

                <form action="#" className="flex flex-col gap-4.5 w-full max-w-md">
                    <div>
                        <label htmlFor="email" className="font-medium">Email Address: <span className="text-xl text-red-800">*</span></label>
                        <input type="email" id="email" name="email" placeholder="example@gmail.com" className="mt-1 w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-950" required />
                    </div>
                    <div>
                        <label htmlFor="number" className="font-medium">Phone Number: <span className="text-xl text-red-800">*</span></label>
                        <input type="tel" id="number" name="number" placeholder="05432 567890" className="mt-1 w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-950" required />
                    </div>
                    <div>
                        <label htmlFor="name" className="font-medium">Full Name: <span className="text-xl text-red-800">*</span></label>
                        <input type="text" id="name" name="name" placeholder="John Doe" className="mt-1 w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-950" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="font-medium">Message: <span className="text-xl text-red-800">*</span></label>
                        <textarea name="message" id="message" className="max-h-90 min-h-10 mt-1 w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-950"></textarea>
                    </div>
                    <button type="submit" className="place-self-end px-4 py-2 w-fit rounded-md text-gray-200 bg-red-900 hover:bg-red-950 font-semibold transition delay-0.2 cursor-pointer">Submit</button>
                </form>
            </div>
        </section>
    )
}