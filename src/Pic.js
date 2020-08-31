import React from "react";

function Pic(props) {
  console.log(props.hdurl);
  return <img src={props.image} />;
}
export default Pic;