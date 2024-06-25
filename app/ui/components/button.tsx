import React from "react";

const Button = (props: any) => {
  return (
    <button className="radiantthemes-button hover-style-four uppercase bg-customBlue hover:bg-customHoverButton text-customWhite hover:text-customWhite py-3 px-5 rounded-full">
      {props.text}
    </button>
  );
};

export default Button;