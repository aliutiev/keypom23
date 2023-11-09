import React from "react";

import logoSRC from "../../../public/keypom_logo.png"


function GetLogo2({ }) {
    return <img src={logoSRC} alt="keypom logo" onClick={() => console.log("sup bitch 2")}/>;
}

export default GetLogo2