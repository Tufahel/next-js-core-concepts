import Image from "next/image";
import React from "react";

const GalleryPage = () => {
  return (
    <div>
      <h1 className="text-4xl text-center">Image Optimization</h1>
      <h2 className="text-center text-2xl">Regular Image Tag</h2>
      <img
        src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*9ToWmeRH2_mgrDss"
        alt=""
        width={500}
        height={500}
        className="mx-auto"
      />
      <h2 className="text-center text-2xl">Next Js Image Tag</h2>
      <Image
        src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*9ToWmeRH2_mgrDss"
        alt="next-image"
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
