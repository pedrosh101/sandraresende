import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import picOne from "../public/images/pic1.jpg";
import picTwo from "../public/images/pic2.jpg";
import picThree from "../public/images/pic3.jpg";
import picFour from "../public/images/pic4.jpg";
import picSix from "../public/images/pic6.jpg";
import picSeven from "../public/images/pic7.jpg";
import picEight from "../public/images/pic8.jpg";
import picNine from "../public/images/pic9.jpg";

const Home: NextPage = () => {
  return (
    <div className="m-2">
      <Head>
        <title>Sandra Resende</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="md:flex gap-2 bg-clr1">
        <div className="md:pr-16 px-1 flex justify-between font-nhaas md:place-items-start place-items-center">
          <h1 className="text-2xl font-bold">Sandra Resende</h1>

        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 relative gap-2 mt-5">
          <Image
            src={picOne}
            alt="pic1"
            className="row-start-1 row-end-3"
            style={{ height: "100%", width: "100%" }}
          />
          <Image src={picTwo} alt="pic2" className="row-start-1 row-end-2" />
          <Image
            src={picThree}
            alt="pic3"
            className="row-start-1 row-end-3"
            style={{ height: "100%", width: "100%" }}
          />
          <Image
            src={picFour}
            alt="pic4"
            className="col-start-2 row-start-2 row-end-3"
          />
          <Image src={picSix} alt="pic6" className="row-start-3 row-end-5" />
          <Image src={picSeven} alt="pic7" className="row-start-3 row-end-5" />
          <Image
            src={picEight}
            alt="pic8"
            className="col-start-1 row-start-3 row-end-4 "
            style={{ height: "100%", width: "100%" }}
          />
          <Image
            src={picNine}
            alt="pic9"
            className=""
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
