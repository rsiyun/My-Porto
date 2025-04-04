import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Footer from "~/components/Footer";
import Header from "~/components/Header";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="bg-background min-h-screen antialiased py-6 px-6">
      <div className="max-w-2xl mx-auto">
        <Header></Header>
        <Component {...pageProps} /> 
        <Footer></Footer>
      </div>
    </div>
  )
};

export default api.withTRPC(MyApp);
