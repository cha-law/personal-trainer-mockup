export default function NotFound() {
    return (
        <section className="px-[5%] lg:px-[10%] py-20 flex flex-col place-items-center gap-2">
            <h1 className="font-bold text-4xl">404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <p>You can go back to the <a href="/" className="font-medium underline hover:text-gray-800">Home</a> page or check out our <a href="/services" className="font-medium underline hover:text-gray-800">Services</a>.</p>
        </section>
    )
}