import type { NextPage } from 'next'
import Nav from '../components/Nav'
import Link from 'next/link';

const Home: NextPage = () => {
    return (
        <div>
            <div className="w-full bg-gradient-to-b from-dark-indigo to-lovely-peach via-neon-pink py-2 pb-16">
                <Nav />
                <div className="text-white text-center text-5xl sm:text-6xl font-title">
                    <Link href="/">
                        <a>DegenDAO</a>
                    </Link>
                </div>
                <div className="text-white text-center text-md font-misc mx-4 sm:mx-32 lg:mx-96">
                    A community-owned managed fund & VC DAO of <a href="https://degenscore.com" target="_blank" rel="noreferrer"><span className="text-light-indigo">Degens</span></a>
                </div>
                <div className="flex flex-row text-6xl h-screen text-white justify-center font-misc mt-64">
                    Coming Soon!
                </div> 
            </div>
        </div>
    )
}

export default Home
