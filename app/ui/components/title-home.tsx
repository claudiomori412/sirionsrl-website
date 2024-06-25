import React from "react";
import imageUrl from "./../../../img/default/title-banner.jpg"
import Image from "next/image";
import './title-home.css'

const TitleHome = (props: any) => {
  return (
    <div className={`relative w-full flex items-center justify-center mt-14 ${props.description ? 'h-[30rem]' : 'h-[20rem]'}`}>
    {/* Immagine */}
    <Image
        src={imageUrl}
        alt="Banner Image"
        layout="fill" // Imposta il layout su 'fill' per adattare l'immagine al contenitore
        objectFit="cover" // Imposta objectFit su 'cover' per coprire completamente il contenitore
        quality={100} // Imposta la qualità dell'immagine
    />
    
    {/* Overlay scuro */}
    <div className="absolute inset-0 bg-black opacity-70 bg-customBlack"></div>
    
    <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[70rem]">
           
            {props.description &&
              <div className="w-100 flex-col flex items-end p-10">
              <h1 className="text-customWhite font-black justify-center text-left md:text-right w-full text-5xl mb-5">
  {props.description} {props.description2}
</h1>

{props.description3 && (
  <p className="text-customWhite font-normal justify-center text-left md:text-right w-full md:w-1/2 text-15px">
  {props.description3}
</p>
)}
              </div>
            }
        </div>
    </div>
</div>
  );
};

export default TitleHome;