import React from "react";

import logoSRC from "../../../public/keypom_logo_1.png"


function GetLogo({ }) {
    return <img src={logoSRC} alt="keypom logo" onClick={() => console.log("sup bitch")}/>;
}

export default GetLogo