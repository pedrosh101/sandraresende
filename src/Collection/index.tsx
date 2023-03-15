import Link from "next/link";
import Image from "next/image";
import { CollectionProp } from "../@types/main";
import NavBar from "../Navbar";


const Collection = ({description, img}: CollectionProp) => {
  return (
    <>
      <div className="min-h-screen p-2 bg-clr1">
        <div className="flex justify-between px-1 md:pr-16 md:flex-col md:justify-start font-nhaas md:place-items-start place-items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold">Sandra Resende</h1>
          </Link>
          <NavBar />
        </div>
        <div className="flex flex-col gap-4 mt-5 text-lg font-nhaas place-items-center md:text-xl">
          <Image src={img} width={700} height={700} alt="pic1" />
          <p className="md:w-7/12 md:text-center">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Collection;
