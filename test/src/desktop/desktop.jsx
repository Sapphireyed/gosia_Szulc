import React, { forwardRef, useEffect, useRef } from "react";
import * as fn from '../functions.js';

export const Desktop = forwardRef(({ setCurrentPage, currentPage, pages }, ref) => {
  const desktopContainer = useRef(null);

  return (
    <>
      <div className="container-desktop" ref={desktopContainer}>
        {!fn.isMobile() && pages[currentPage.name] && React.createElement(pages[currentPage.name])}
      </div>
    </>
  )
});

Desktop.displayName = 'Desktop';
