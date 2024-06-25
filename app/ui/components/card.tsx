"use client"
import { useState } from "react";
import ArrowDownIcon from "../icon/arrow-down";



const Card = () => {


  
    return (
        <div className=" bg-customDarkGrey round-sm">
            <div className="p-4 flex-col items-center">
                {/* Icona */}
                <div className="flex items-center">
                    <ArrowDownIcon color="#004F92" size='60px' ></ArrowDownIcon>
                    <h2 className="text-lg text-customBlack font-semibold mb-2">Co-engineering</h2>
                </div>
                <div>
                    <p className="text-customBlack">DeltAts è dotata dei più aggiornati strumenti CAD 3D che consentono di operare su tutti i formati di file in uso.</p>
                </div>
            </div>
        </div>
    );
};

export default Card;