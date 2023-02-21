import Link from "next/link";
import Image from "next/image";

type CollectionProp = {
  description: string
  img: string
}

const Collection = ({description, img}: CollectionProp) => {
  return (
    <>
      <div className="p-2 bg-clr1">
        <div className="md:pr-16 px-1 flex md:flex-col justify-between md:justify-start font-nhaas md:place-items-start place-items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold">Sandra Resende</h1>
          </Link>
        </div>
        <div className="md:flex md:mt-0 mt-5 font-nhaas text-justify">
          <Image src={img} width={500} height={500} alt="pic1" />
          <p className="mt-2">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Collection;
