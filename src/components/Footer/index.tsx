import Link from 'next/link'

const Footer = () => {
    return (
        <div className="w-full bg-gradient-to-tl from-vaporware-blue to-lovely-peach via-neon-pink p-2">
            <div className="pt-4 text-white sm:mx-32 lg:mx-60 xl:mx-96">
                <ul className="p-2 flex flex-row justify-around">
                    <li>
                        <Link href="/">
                            <a className="relative block font-content px-2">
                                Home
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-amber-300 to-indigo-300"></span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/coming_soon">
                            <a className="relative block font-content px-2">
                                Apply a Project
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-green-300 via-yellow-300 to-pink-300"></span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/coming_soon">
                            <a className="relative block font-content px-2">
                                About
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-200 to-green-500 via-red-200"></span>
                            </a>
                        </Link>
                    </li>
                </ul>

                <ul className="p-2 flex flex-row justify-around">
                    <li>
                        <Link href="/coming_soon">
                            <a className="relative block font-content px-2">
                                Mint DegenDAO PFP
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-300 to-teal-400 via-yellow-300"></span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/coming_soon">
                            <a className="relative block font-content px-2">
                                Join DegenDAO
                                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-amber-200 to-teal-500"></span>
                            </a>
                        </Link>
                    </li>
                </ul>

                <div className="text-center text-5xl p-2 mt-4 font-title">DegenDAO</div>
                <div className="text-center text-sm font-misc">by DegenScore Citadel</div>
                <div className="text-center text-sm font-content p-2">Copyleft (ɔ) 2021</div>
            </div>
        </div>
    )
}

export default Footer