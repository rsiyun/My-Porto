import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

import { api } from "~/utils/api";

export default function Home() {
  // const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="bg-[#181D31] min-h-screen">
      <Header></Header>
      <main className="flex-grow pt-6">
        <div className="flex justify-center">
          <Image className="h-[370px] w-[300px]" height={260} width={421}  alt="mainImage" priority={true} src={"/myfoto.png"}></Image>
        </div>
        <div className="text-center pt-[56px] text-white">
          <p>Hi there my name is</p>
          <p className="text-3xl pt-2">Raihan Siyun</p>
          <p className="text-[#E2B714] text-3xl pt-2">Web / Mobile Developer</p>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
