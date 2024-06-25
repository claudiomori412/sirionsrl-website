import React from "react";
import imageUrl from "./../../../img/default/title-banner.jpg"
import Image from "next/image";
const Title = (props: any) => {
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
        <div className="text-center w-[70rem]">
            <h1 className="font-extrabold text-customWhite text-3xl sm:text-3xl md:text-4xl lg:text-4xl" >{props.title}</h1>
            {props.description &&
              <div className="w-100 flex-col flex items-center p-10">
                <p className="text-customWhite font-bold justify-center text-center  sm:text-lg md:text-xl lg:text-2xl">{props.description}</p>
                {props.description2 &&
                 
                    <p className="text-customWhite font-bold justify-center text-center  sm:text-lg md:text-xl lg:text-2xl">{props.description2}</p>
                
                }
              </div>
            }
        </div>
    </div>
</div>
  );
};

export default Title;