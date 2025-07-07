export default function ScrollInto(props) {
    return (
        <button onClick={() => {document.getElementById(props.element).scrollIntoView()}} className={`${props.bg} px-4 py-2 w-fit rounded-md font-semibold transition delay-0.2 cursor-pointer`}>{props.content}</button>
    )
}