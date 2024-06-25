"use client"
import { useState } from "react";
import ArrowDownIcon from "../icon/arrow-down";



const CardIcon = () => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
        <div className="w-full bg-white shadow rounded h-full" style={{padding:'26px'}}>
        <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="absolute text-customBlack top-0 right-0 h-28 w-28 bg-customGrey hover:bg-customBlueRgb rounded-bl-full flex justify-end" style={{marginRight:'15px'}}>

        <ArrowDownIcon size='16px' color={isHovered ? 'blue' : 'red'} ></ArrowDownIcon>
        </div>
        <p className="text-customBlack text-lg" style={{width:'calc(100% - 160px)', marginBottom:'20px'}}>Struttura e sede operativa</p>
        <div style={{width: '20px', background: 'blue', height: '3px', marginBottom:'20px'}}></div>
        <p className="text-customBlack" style={{width:'calc(100% - 65px)'}}>L’attività viene svolta in due unità produttive attigue, per un totale di 7.000 mq. coperti su un’area di 30.000 mq</p>
        </div>
    );
};

export default CardIcon;