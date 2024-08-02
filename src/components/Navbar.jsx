// import { Switch } from "@nextui-org/switch";
import React, { useState } from "react";
import Switch from "./Switch";

const Navbar = () => {

  const [clicked, setClicked] = useState(false)


  const darkTheme = {
    background: "flex gap-4 justify-between py-4 px-24 border-1 border-slate-500 bg-black text-white ",
    text: "",
    
  }
  const lightTheme = {
    background: "flex gap-4 justify-between py-4 px-24 border-1 border-slate-500 bg-white text-black ",
    text: "text-black",

  }

  const theme = clicked ? darkTheme: lightTheme

  return (
    <div className={theme.background}>
      <div className="text-white">
        <p className={`tracking-[1px] text-lg ${theme.text}`}>
          <span className="text-green-500">J</span>ay{" "}
          <span className="text-green-500">S</span>hankar
        </p>
      </div>
      <div className="flex gap-7">
        {/* <Switch /> */}
        <Switch clicked={clicked} setClicked={setClicked}/>
        <div>
          <h3>Home</h3>
        </div>
        <div>
          <h3>About Me</h3>
        </div>
        <div>
          <h3>Contact</h3>
        </div>
        <div>
          <h3>Skills</h3>
        </div>
        <div className="w-20 bg-green-500 rounded-3xl flex justify-center items-center">
          <p className="text-sm">CV</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
