import { forwardRef } from "react";
import { Overlay } from "../overlay/overlay";
import { Home } from "../home/home";
import { About } from "../about/about";

export const Desktop = forwardRef(({ setCurrentPage, currentPage }, ref) => {

  return (
    <>
      <div className="container-desktop">
        {currentPage.name === 'About' ? <About /> : null}
      </div>
    </>
  )
});

Desktop.displayName = 'Desktop';
