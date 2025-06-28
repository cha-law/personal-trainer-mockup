export default function About() {
    return (
        <section className="flex flex-col lg:flex-row gap-16 place-content-between place-items-center py-20">
            <div className="flex flex-col lg:w-[40%] gap-4">
                <h1 className="text-4xl font-bold text-red-950 mb-2">About me</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>

            <img src="/src/assets/images/pt-dumbbell.jpg" alt="trainer-photo" className="bg-gray-500 w-[70%] lg:w-[40%] aspect-square shadow-lg rounded-lg object-cover" />
        </section>
    )
}