import React from "react";


function KeyGenerator({ setKey }) {
    return <button onClick={() => setKey("sup bitch")}>Generate Key!</button>;
}

export default KeyGenerator