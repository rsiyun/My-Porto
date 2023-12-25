import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="bg-[#181D31] min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Header></Header>
        <Component {...pageProps} /> 
        <Footer></Footer>
      </div>
    </div>
  )
};

export default api.withTRPC(MyApp);
