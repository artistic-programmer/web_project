import React from "react";

const Headstyle = {
  width:"100%",
  height: "60px",
  lineHeight: "60px",
  background:"#0ff",
  color: "#fff",
  textAlign: "center"
  
}

export default function Heading(){
  return(
    <h1 style={Headstyle}>This is heading</h1>
    );
}