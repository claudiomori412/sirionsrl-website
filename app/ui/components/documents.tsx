import React from "react";
import imageUrl from "./../../../img/document/photo_2023-08-20_11-52-50.jpg"
import Image from "next/image";
import Link from "next/link";

const Documents = (props: any) => {
    return (
      <div className="relative w-full h-[30rem] flex items-center justify-center">
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
        <div className="absolute inset-0 flex flex-col items-center justify-center p-10">
          {/* Titolo */}
          <h1 className="text-customWhite text-4xl font-bold text-center mb-14">Documenti</h1>
          
          {/* Contenitore del testo */}
          <div className="w-full md:w-[70%] flex flex-col md:flex-row items-center">
            <div className="text-center md:text-left">
                <Link target="_blank" href={'/IATF Sirion.pdf'}>
                    <p className="text-customWhite mb-4 text-2xl">&#8226; IATF</p>
                </Link>
                <Link target="_blank" href={'/Sirion S.r.l._ISO 9001 2015_cambio ragione sociale.pdf'}>
                    <p className="text-customWhite mb-4 text-2xl">&#8226; ISO9001</p>
                </Link>
                <Link target="_blank" href={'/Codice Etico Sirion.pdf'}>
                    <p className="text-customWhite mb-4 text-2xl">&#8226; Codice Etico</p>
                </Link>
                <Link target="_blank" href={'/CALCOLO_DELL’_IMPRONTA_DI_CARBONIO_CFPDI_ORGANIZZAZIONE_Sirion_Srl.pdf'}>
                  <p className="text-customWhite mb-4 text-2xl">&#8226; Impronta C02</p>
                </Link>
            </div>
            {/* Bottone */}
            <div className="mt-4 md:mt-0 md:ml-4">
             
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default Documents;
