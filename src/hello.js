import React from "react";

const Hello = ({ name = 'anonim', gretting = 'selamat datang' }) => {
    return <div> Hello {name}! {gretting} </div>
}

export default Hello