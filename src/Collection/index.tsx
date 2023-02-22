import Link from "next/link";
import Image from "next/image";
import { CollectionProp } from "../@types/main";


const Collection = ({description, img}: CollectionProp) => {
  return (
    <>
      <div className="p-2 bg-clr1 min-h-screen">
        <div className="md:pr-16 px-1 flex md:flex-col justify-between md:justify-start font-nhaas md:place-items-start place-items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold">Sandra Resende</h1>
          </Link>
        </div>
        <div className="flex flex-col mt-5 font-nhaas place-items-center gap-4 text-lg md:text-xl">
          <Image src={img} width={700} height={700} alt="pic1" />
          <p className="md:w-7/12 md:text-center">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Collection;
