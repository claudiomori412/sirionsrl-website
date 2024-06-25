"use client"
import { useState } from "react";
import ArrowDownIcon from "../icon/arrow-down";



const CardDoubleColor = (props:any) => {

    let doubleColor = props.doubleColor
    let border = doubleColor ? '1px solid #f4f7fd' : ''
    let background = doubleColor ? '#FFFFFF' : '#F5F7FD'

    return (
        <div className=" bg-customDarkGrey round-sm">
            <div className="p-5 flex flex-col items-center justify-center" style={{border: border, background: background}}>
                {/* <img src={props.img} style={{marginBottom:'20px !important'}} alt="" /> */}
                <h2 className="text-4xl text-center text-customBlack">{props.title}</h2>
                <h2 className="text-4xl  text-center text-customBlack font-bold">{props.subtitle}</h2>
                <p className="text-customBlack text-center" style={{marginTop:'12px !important'}}>{props.text}</p>
            </div>
        </div>
    );
};

export default CardDoubleColor;