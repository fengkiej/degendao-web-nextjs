import Image from 'next/image'
import individualBackers from '../../constants/individual_backer_list.json'
import institutionBackers from '../../constants/institutional_backer_list.json'

const Backers = () => {
    return (
        <div className="w-full bg-night-sky p-2">
            <div className="flex flex-col text-white">
                <div className="text-center font-heading mt-8 text-3xl font-bold">The <span className="font-title">DegenDAO</span> Backers</div>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:mx-64">
                    { institutionBackers.map(item =>
                        <div key={item.id} className="flex flex-col items-center justify-between text-center m-8">
                            <div className="flex items-center flex-col">
                                <div className="w-64">
                                <Image
                                    src={item.imgSrc}
                                    width="128px"
                                    height="100%"
                                    alt={item.name}
                                    className="object-cover rounded rounded-lg p-16"
                                />
                                </div>

                                <div className="mt-1 text-center">
                                    <p className="text-sm font-medium text-light-indigo font-content font-bold">{item.name}</p>

                                    <p className="text-xs text-white font-content max-w-1/2">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 lg:mx-64">
                    { individualBackers.map(item =>
                        <div key={item.id} className="flex flex-col items-center justify-between text-center m-8">
                            <div className="flex items-center flex-col">
                                <div className="w-24 h-24">
                                <Image
                                    src={item.imgSrc}
                                    width="100%"
                                    height="100%"
                                    alt={item.name}
                                    className="object-cover rounded-full"
                                />
                                </div>

                                <div className="mt-1 text-center">
                                    <p className="text-sm font-medium text-light-indigo font-content font-bold">{item.name}</p>

                                    <p className="text-xs text-white font-content max-w-1/2">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Backers