import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import picOne from "../public/images/pic1.jpg";
import picTwo from "../public/images/pic2.jpg";
import picThree from "../public/images/pic3.jpg";
import picFour from "../public/images/pic4.jpg";
import picSix from "../public/images/pic6.jpg";
import picSeven from "../public/images/pic7.jpg";
import picEight from "../public/images/pic8.jpg";
import picNine from "../public/images/pic9.jpg";
import NavBar from "../src/Navbar";

const Home: NextPage = ({users}) => {
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
              src={picOne}
              alt="pic1"
              style={{ height: "100%", width: "100%" }}
            />
          </Link>
          <Link href="collection/2" className="row-start-1 row-end-2">
            <Image src={picTwo} alt="pic2" />
          </Link>
          <Link href="collection/3" className="row-start-1 row-end-3">
            <Image
              src={picThree}
              alt="pic3"
              style={{ height: "100%", width: "100%" }}
            />
          </Link>
          <Link
            href="collection/4"
            className="col-start-2 row-start-2 row-end-3"
          >
            <Image src={picFour} alt="pic4" />
          </Link>
          <Link href="collection/5" className="row-start-3 row-end-5">
            <Image src={picSix} alt="pic6" />
          </Link>
          <Link href="collection/6" className="row-start-3 row-end-5">
            <Image src={picSeven} alt="pic7" />
          </Link>
          <Link
            href="collection/7"
            className="col-start-1 row-start-3 row-end-4 "
          >
            <Image
              src={picEight}
              alt="pic8"
              style={{ height: "100%", width: "100%" }}
            />
          </Link>
          <Link href="collection/8">
            <Image
              src={picNine}
              alt="pic9"
              style={{ height: "100%", width: "100%" }}
            />
          </Link>
        </div>
      </main>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}
