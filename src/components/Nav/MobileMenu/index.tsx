import { useState } from 'react'
import Link from 'next/link'

const MobileMenu = (props: any) => {
    const [isDrawerVisible, setIsDrawerVisible] = useState(false)

    return (
        <div className={props.className}>
            {isDrawerVisible && (
                <div className="absolute -mt-16 w-full h-screen bg-night-sky text-white z-20">
                    <div className="m-8 mt-16 flex flex-col">
                        <div className="cursor-pointer flex w-full justify-end" onClick={() => { setIsDrawerVisible(!isDrawerVisible) }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                                <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                            </svg>
                        </div>
                    </div>

                    <div className="cursor-pointer flex w-full justify-start text-2xl">
                        <ul className="ml-8">
                            <li>
                                <Link href="/">
                                    <a className="relative block font-content px-2 my-4">
                                        Home
                                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-amber-300 to-indigo-300"></span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/coming_soon">
                                    <a className="relative block font-content px-2 my-4">
                                        Apply a Project
                                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300"></span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/coming_soon">
                                    <a className="relative block font-content px-2 my-4">
                                        Mint DegenDAO PFP
                                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-300 to-teal-400 via-yellow-300"></span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/coming_soon">
                                    <a className="relative block font-content px-2 my-4">
                                        Join DegenDAO
                                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-amber-200 to-teal-500"></span>
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/coming_soon">
                                    <a className="relative block font-content px-2 my-4">
                                        About
                                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-200 to-green-500 via-red-200"></span>
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>)
            }
            <div className="flex justify-end m-8">
                <div onClick={() => { setIsDrawerVisible(!isDrawerVisible) }} className="text-white cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
                    </svg>
                </div>
            </div>
        </div >
    )
}

export default MobileMenu