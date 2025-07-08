import React from "react";

function Footer(props) {
  return (
    <div>
      <span>
        Welcome: {props.name}, Id: {props.id}
      </span><br></br>
      <span>Like Lion Class</span>
    </div>
  );
}

export default Footer;
