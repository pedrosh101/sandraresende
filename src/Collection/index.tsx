import React from "react";
import Image from "next/image";
import picOne from "../../public/images/pic1.jpg";
import Link from "next/link";

const Collection = () => {
  return (
    <>
      <div className="p-2 bg-clr1">
        <div className="md:pr-16 px-1 flex md:flex-col justify-between md:justify-start font-nhaas md:place-items-start place-items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold">Sandra Resende</h1>
          </Link>
        </div>
        <div className="md:flex md:mt-0 mt-5 font-nhaas text-justify">
          <Image src={picOne} alt="pic1" />
          <p className="mt-2">
            Ut tempus, felis quis ullamcorper pharetra, turpis turpis dapibus
            quam, at dapibus felis sem quis magna. Donec sit amet lobortis
            magna. Nam ultrices vitae leo ut congue. Sed rhoncus turpis id magna
            interdum ornare. Aenean ut pulvinar nisi. Praesent pellentesque elit
            ac augue pharetra, at tristique eros egestas. In malesuada tempus
            nunc, ut fringilla felis aliquam mollis. Maecenas aliquet mauris at
            rutrum luctus. In ut massa finibus, mattis enim et, pulvinar arcu.
            Pellentesque sed laoreet magna. Aenean pretium eu orci nec
            porttitor. Integer vestibulum orci ac nibh mattis, vel commodo ante
            hendrerit. Suspendisse ac massa efficitur, bibendum ipsum eu,
            pulvinar velit. Cras sed fringilla augue, iaculis commodo orci.
            Fusce vitae arcu et nulla facilisis ultrices.
          </p>
        </div>
      </div>
    </>
  );
};

export default Collection;

