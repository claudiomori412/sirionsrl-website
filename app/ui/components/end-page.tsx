import React from "react";
import imageUrl from "./../../../img/default/BMW-LB.webp"
import Image from "next/image";
import Button from "./button";
import Link from "next/link";

const EndPage = (props: any) => {
  return (
    <div className="relative w-full h-[20rem] flex items-center justify-center">
      {/* Immagine */}
      <Image
        src={imageUrl}
        alt="Banner Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      {/* Overlay scuro */}
      <div className="absolute inset-0 bg-black opacity-60 bg-customBlack"></div>

      {/* Contenitore principale */}
      <div className="absolute inset-0 flex items-center justify-center p-10">
        {/* Contenitore del testo */}
        <div className="w-full md:w-[70%] flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h1 className="text-5xl text-customWhite  text-left font-extrabold mb-4 md:mb-0">
              Ricerca e Innovazione
            </h1>
            <p className="text-left text-customWhite ">
              Scopri come Sirion si impegna nella ricerca continua per innovare
              e soddisfare le esigenze dei clienti nel settore automobilistico.
            </p>
          </div>
          {/* Bottone */}
          <div className="mt-4 md:mt-0 md:ml-4">
            <Link href="/contact">
              <Button text="Contattaci" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EndPage;
