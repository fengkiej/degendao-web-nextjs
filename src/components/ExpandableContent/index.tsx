import { useState } from 'react'

const ExpandableContent = (props: any) => {
    const [expanded, setExpanded] = useState(true)

    return (
        <div className={props.className}>
            <div className="rounded rounded-lg text-white text-2xl flex flex-row justify-center mx-10 mt-8 items-center font-heading">
                <h1>{props.title}</h1>
            </div>

            <div className="text-white flex flex-col font-content text-lg mx-8 sm:mx-16 md:mx-32 lg:mx-64 xl:mx-96">
                {typeof window !== "undefined" && ((window.innerWidth > 640 && !expanded) || (window.innerWidth < 640 && expanded)) && <div className="text-start mx-2">{props.shortText}</div>}
                {typeof window !== "undefined" && ((window.innerWidth > 640 && !expanded) || (window.innerWidth < 640 && expanded)) && <a className="cursor-pointer text-vaporware-blue mx-2 mb-4" onClick={() => setExpanded(!expanded)}>[Read more]</a>}
                {typeof window !== "undefined" && ((window.innerWidth > 640 && expanded) || (window.innerWidth < 640 && !expanded)) && <div className="text-start mx-2">{props.children}</div>}
                {typeof window !== "undefined" && ((window.innerWidth > 640 && expanded) || (window.innerWidth < 640 && !expanded)) && <a className="cursor-pointer text-vaporware-blue mx-2 mb-4" onClick={() => setExpanded(!expanded)}>[Collapse]</a>}
            </div>

        </div>
    )
}

export default ExpandableContent