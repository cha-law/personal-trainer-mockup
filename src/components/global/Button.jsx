export default function Button(props) {
    return (
        <button className={`px-4 py-2 w-fit rounded-md font-semibold ${props.bg} transition delay-0.2 cursor-pointer`}>{props.content}</button>
    )
}