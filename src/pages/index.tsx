import Image from "next/image";

export default function Home() {
  // const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
      <main className="flex-grow pt-6 container">
        <div className="flex justify-center">
          <Image className="h-[370px] w-[300px]" height={260} width={421}  alt="mainImage" priority={true} src={"/asset/myfoto.png"}></Image>
        </div>
        <div className="text-center pt-[56px] text-white">
          <p>Hi there my name is</p>
          <p className="text-3xl pt-2">Raihan Siyun</p>
          <p className="text-[#E2B714] text-3xl font-mono pt-2">Web / Mobile Developer</p>
        </div>
      </main>
  );
}
