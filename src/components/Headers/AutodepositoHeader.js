import React, { useRef, useEffect } from "react";

function AutodepositoHeader() {
  

  return (
    <>
      <div className="page-header page-header-small">
        <img
          loading="lazy"
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/cuvalles/cuvalles-4_HD.jpg") + ")",
          }}
          
        ></img>
      </div>
    </>
  );
}

export default AutodepositoHeader;
