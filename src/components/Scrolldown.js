const Scroll = () => {
    return(
        <div className="w-96 h-auto ">
            <div className="flex flex-col ml-[13rem] mt-20 text-gray-500">
                <h1 className="text-xl">Basic Elements</h1>
                <h3 className="mt-4">Buttons</h3>
                <p className="text-[10px] mt-3">Pick your style</p>
                <div className="flex flex-row space-x-0.5 mt-4 text-xs">
                    <a href="#" className="bg-blue-500 border border-gray-300 text-gray-300 py-[4px] px-5 rounded-lg
                    ">Default </a>
                    <a href="#" className="bg-blue-500 border border-gray-300 text-gray-300 py-[4px] px-5 rounded-xl">Normal </a>
                    <a href="#" className="bg-blue-500 border border-gray-300 text-gray-300 py-[4px] px-5 rounded-2xl">Customise</a>
                    <a href="#" className="bg-blue-500 border border-gray-300 text-gray-300 py-[4px] px-5 rounded-[60%]">All </a>
                </div>
                <p className="mt-8 text-[10px]">Pick your Style</p>
                <div className="flex  flex-row space-x-0.5  text-xs mt-4">
                    <a href="#"  className="bg-transparent border border-red-600 text-red-600  py-[2px] px-5 rounded-sm ">Small</a>
                    <a href="#"  className="bg-transparent border border-red-600 text-red-600  py-[2px] px-5 rounded-sm ">Medium</a>
                    <a href="#"  className="bg-transparent border border-red-600 text-red-600  py-[2px] px-5 rounded-sm ">Large</a>
                    <a href="#"  className="bg-transparent border border-red-600 text-red-600  py-[2px] px-5 rounded-sm ">Larger</a>
                </div>
                <p className="mt-8 text-[10px]">Pick Your colour</p>
                <div className="flex flex-row space-x-0.5  text-[10px] mt-5">
                    <a href="#" className="bg-transparent border border-gray-600 text-gray-600  py-[2.5px] px-5 rounded-xl">DEFAULT</a>
                    <a href="#" className="bg-transparent border border-blue-400 text-blue-400  py-[2.5px] px-5 rounded-xl">PERMANENT</a>
                    <a href="#" className="bg-transparent border border-blue-500 text-blue-500  py-[2.5px] px-5 rounded-xl">INFO</a>
                    <a href="#" className="bg-transparent border border-green-600 text-green-600  py-[2.5px] px-5 rounded-xl">SUCCESS</a>
                    <a href="#" className="bg-transparent border border-yellow-600 text-yellow-600  py-[2.5px] px-5 rounded-xl">LEARNING</a>
                    <a href="#" className="bg-transparent border border-red-600 text-red-600  py-[2.5px] px-5 rounded-xl">DANGER</a>
                </div>
                <div className="flex flex-row space-x-0.5  text-[10px] mt-4 mb-9">
                <a href="#" className="bg-gray-500 border border-gray-600 text-gray-300 py-[4px] px-5 rounded-2xl">DEFAULT</a>
                    <a href="#"className="bg-blue-400 border border-blue-400 text-gray-300 py-[4px] px-5 rounded-2xl">PERMANENT</a>
                    <a href="#"className="bg-blue-600 border border-blue-600 text-gray-300 py-[4px] px-5 rounded-2xl">INFO</a>
                    <a href="#"className="bg-green-600 border border-green-600 text-gray-300 py-[4px] px-5 rounded-2xl">SUCCESS</a>
                    <a href="#"className="bg-yellow-600 border border-yellow-600 text-gray-300 py-[4px] px-5 rounded-2xl">LEARNING</a>
                    <a href="#"className="bg-red-600 border border-red-600 text-gray-300 py-[4px] px-5 rounded-2xl">DANGER</a>
                </div>
            </div>
        </div>
    )
}

export default Scroll;