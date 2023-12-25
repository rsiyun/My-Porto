import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
export default function Project() {
    return(
        <main className="flex-grow pt-6 px-6 pb-[72px] overflow-auto">
            <div className="flex justify-between flex-col-reverse lg:flex-row ">
                <div className="flex-grow">
                    <div className="text-white">
                        <h1 className="font-bold text-3xl">Project</h1>
                        <p className="text-lg font-semibold">Personal Project, I created it based on my knowledge and experience</p>
                    </div>
                    <div className="pt-8">
                        <div className="flex items-center bg-[#384269] w-full gap-4 p-3 rounded">
                            <MagnifyingGlassIcon className="h-6 w-6 text-gray-500"></MagnifyingGlassIcon>
                            <input type="text" className="bg-transparent text-white flex-grow focus:outline-none" placeholder="Search..."/>
                        </div>
                    </div>

                    <div className="pt-12">
                        <h2 className="font-bold text-2xl text-white">Personal Project</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}