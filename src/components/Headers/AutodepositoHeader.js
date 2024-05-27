import React, { useRef, useEffect } from "react";

function AutodepositoHeader() {
  const pageHeader = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        if (pageHeader.current) {
          let windowScrollTop = window.pageYOffset / 3;
          pageHeader.current.style.transform =
            "translate3d(0," + windowScrollTop + "px,0)";
        }
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  }, []);

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
          ref={pageHeader}
        ></img>
      </div>
    </>
  );
}

export default AutodepositoHeader;
