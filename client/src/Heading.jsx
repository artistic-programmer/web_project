import React from "react";

const Headstyle = {
  width:"100%",
  height: "60px",
  lineHeight: "60px",
  background:"#0ff",
  color: "#fff",
  textAlign: "center",
  textShadow: "0px 0px 5px #000"
  
}

export default function Heading(){
  return(
    <h1 style={Headstyle}>
      Anshu Kumar
    </h1>
    );
}