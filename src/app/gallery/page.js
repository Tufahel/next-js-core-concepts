import Image from "next/image";
import nextImage from "@/assets/next js image.png";
import React from "react";

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">Image Optimization</h1>
      <h2 className="text-center text-2xl">Regular Image Tag</h2>
      <img
        src="https://global.discourse-cdn.com/auth0/original/2X/a/ae35edce19e64c53e5d455b22e8a2c82d093d4c9.png"
        alt=""
        width={500}
        height={500}
        className="mx-auto"
      />
      <h2 className="text-center text-2xl">Next Js Image Component</h2>
      <Image
        src="https://global.discourse-cdn.com/auth0/original/2X/a/ae35edce19e64c53e5d455b22e8a2c82d093d4c9.png"
        alt="next-image"
        width={500}
        height={500}
        className="mx-auto"
      />
      <h2 className="text-center text-2xl">Local Image Component</h2>
      <Image
        src={nextImage}
        alt="next-image"
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
