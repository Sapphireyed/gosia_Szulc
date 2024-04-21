import { animateOverlay } from "../functions"

export function Header({overlayRef, setCurrentPage, ref}) {

  return (
    <>
      <div className="header"onClick={(e) => animateOverlay(e, overlayRef, setCurrentPage, 'Desktop')}>
        <h4>Gosia Szulc</h4>
        <p>Frontend developer</p>
      </div>
    </>
  )
}

export default Header
