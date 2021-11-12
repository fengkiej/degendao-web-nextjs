import Link from 'next/link'
import { useState } from 'react'

const Collapse = (props: any) => {
    const [expanded, setExpanded] = useState(false)

    return (
        <div className={props.className}>
            <div onClick={() => setExpanded(!expanded)} className="cursor-pointer rounded rounded-lg text-white flex items-center font-heading p-4 bg-dark-indigo">
                <h2 className="flex-1">{props.title}</h2>
                <a className="flex-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M16.939 7.939 12 12.879l-4.939-4.94-2.122 2.122L12 17.121l7.061-7.06z"></path>
                    </svg>
                </a>
            </div>

            {expanded && <div className="rounded-b-lg -mt-2 text-white flex items-center font-content p-4 bg-night-sky">
                <span className="flex-1">{props.children}</span>
            </div>}

        </div>
    )
}

export default Collapse