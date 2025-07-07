export default function Button(props) {
    return (
        <a href={props.link} className={`px-4 py-2 lg:w-fit rounded-md font-semibold ${props.bg} transition delay-0.2 cursor-pointer`}>{props.content}</a>
    )
}