import { animateOverlay } from "../functions";
import { isMobile } from "../functions";

export function Header({overlayRef, setCurrentPage, ref}) {

  return (
    <>
      <div className="header"onClick={(e) => !isMobile() ? animateOverlay(e, overlayRef, setCurrentPage, 'Desktop') : null}>
        <h4>Gosia Szulc</h4>
        <p>Frontend developer</p>
      </div>
    </>
  )
}

export default Header
