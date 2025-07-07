export default function Testimonial(props) {
    return (
        <div className="flex flex-col gap-2 min-w-80 max-w-80 p-8 text-start place-content-start shadow-lg border-solid border-1 border-gray-400 rounded-md">
            <div className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-yellow-700 w-6" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-yellow-700 w-6" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-yellow-700 w-6" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-yellow-700 w-6" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-yellow-700 w-6" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
            </div>
            <h3 className="text-lg font-semibold">{props.name}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    )
}