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

{/* <img src="https://s3-alpha-sig.figma.com/img/1be9/2566/6b3ec01eeaad05f535ce4022703a96a4?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L2tAQUxy5f7Lnf~BPwdbL8Du9NKnrTRliWcBWszy5kSokMCzyh99b7FI~lyeyQmTJoKJ7gtlOqAkAXT09jyT3HfNjmoMs5-sDtTqjj9EqjbnGhqdNdkCjG42mc-WT~hGcPwagUtMhSCennqgjVoz4VdGI6~iY1BFRMven7sDULFD9PTKD7obGCih-ou4BZsbg4wMBkXkj6QiPB3YfofdLe4TnxWnuIs~gYQYL3bSpuOBPjeubFC4Ra7E4SATXM7reRS4sJmCMhYySjgGLU7tWLUecPrqMRTNVy45BSbbA6SibLn2OfmDkCNwXf4ZQVY9LBdKrthDftce3HI4Uo5Dxg__"> */}
