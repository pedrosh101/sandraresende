import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { serie } from "../data/serie";
import NavBar from "../src/Navbar";

const Home: NextPage = () => {
  return (
    <div className="p-2 bg-clr1">
      <Head>
        <title>Sandra Resende</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="md:flex gap-2">
        <div className="md:pr-16 px-1 flex md:flex-col justify-between md:justify-start font-nhaas md:place-items-start place-items-center">
          <h1 className="text-2xl font-bold">Sandra Resende</h1>
          <ul className="hidden md:flex flex-col mt-1">
            <li>Arquivo</li>
            <li>Biografia</li>
            <li>Contato</li>
          </ul>
          <NavBar />
        </div>
        <div className="flex flex-col md:grid md:grid-cols-3 relative gap-2 md:mt-0 mt-5">
          <Link href="collection/1" className="row-start-1 row-end-3">
            <Image
              src={serie[0].image}
              width={1000}
              height={1000}
              alt="pic1"
              style={{ height: "100%", width: "100%" }}
            />
          </Link>
          <Link href="collection/2" className="row-start-1 row-end-2">
            <Image src={serie[1].image} width={1000} height={1000} alt="pic2" />
          </Link>
          <Link
            href="collection/3"
            className="col-start-2 row-start-2 row-end-3"
          >
            <Image
              src={serie[2].image}
              width={1000}
              height={1000}
              alt="pic3"
            />
          </Link>
          <Link href="collection/4" className="row-start-1 row-end-3">
            <Image src={serie[3].image} width={1000} height={1000} alt="pic4" style={{ height: "100%", width: "100%" }}/>
          </Link>
          <Link href="collection/5" className="col-start-1 row-start-3 row-end-4">
            <Image src={serie[4].image} width={1000} height={1000} alt="pic5" style={{ height: "100%", width: "100%" }}/>
          </Link>
          <Link href="collection/6">
            <Image src={serie[5].image} width={1000} height={1000} alt="pic6" style={{ height: "100%", width: "100%" }} />
          </Link>
          <Link
            href="collection/7"
            className="row-start-3 row-end-5"
          >
            <Image
              src={serie[6].image}
              width={1000}
              height={1000}
              alt="pic7"

            />
          </Link>
          <Link href="collection/8" className="row-start-3 row-end-5">
            <Image
              src={serie[7].image}
              width={1000}
              height={1000}
              alt="pic8"

            />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
