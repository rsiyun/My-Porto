import Image from "next/image";

export default function About() {
    return(
        <main className="flex-grow pt-6 px-6 pb-[72px] overflow-auto">
            <div className="flex justify-between flex-col-reverse lg:flex-row">
                <div className="text-white">
                    <h1 className="font-bold text-3xl">About</h1>
                    <span className="text-2xl font-semibold bg-gradient-to-l from-blue-300 to-cyan-600 text-transparent bg-clip-text">Raihan Siyun</span>
                    <p className="mb-4 mt-4">I'm Mobile / Web Developer, Freelancer From Indonesia and an Adventure of my own mind, I like to express my feelings through code, and a quite place would be nice to have around me.
                    </p>
                    <p className="font-bold">education</p>
                    <p>I used to attend vocational high school at SMKN 2 Buduran majoring in Software Engineering.</p>
                    <p>right now studying at Telkom University Surabaya majoring in Software Engineering.</p>
                    <p className="font-bold mt-4">experience</p>
                    <ul className="list-disc pl-4">
                        <li>IT brain Solution As Web Developer</li>
                        <li>3rd place in Cyber ​​Security LKS Jawa Timur province 2022</li>
                        <li>Binar Inovasi Digital As Mobile Developer </li>
                        <li>Mars Coding As Course Instructor for kids</li>
                    </ul>
                </div>
                <div className="h-[240px] justify-center w-full flex">
                    <Image alt="Foto-Profile" className="h-[240px] w-[150px] rounded object-cover" src={"/asset/rs-croped.jpeg"} width={300} height={200}></Image>
                </div>
            </div>
            
        </main>
    )
}