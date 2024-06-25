import Link from "next/link";
import React from "react";
import Button from "./button";

const Description = (props: any) => {

  
  return (
    <div className="w-100 bg-customWhite flex-col flex items-center p-10 md:p-20">
        <p className="text-customBlack justify-center text-center text-xl">{props.text}</p> 
        {props.text2 && <p className="text-customBlack justify-center text-center text-xl">{props.text2}</p>}
        {props.text3 && <p className="text-customBlack justify-center text-center text-xl">{props.text3}</p>}
        {props.button && <Link className=" mt-5" href="/contact" >
                    <Button text="CONTATTACI" />
                </Link>}
        
    </div>
  );
};

export default Description;