export function animateOverlay(overlayRef, setCurrentPage, pageName) {
  if (window.innerWidth <= 700) {
    overlayRef.current.style.right = '0';

    setTimeout(() => {
      overlayRef.current.style.right = '-100%';
      setCurrentPage(prevState => {
        const newState = {
          ...prevState,
          name: pageName,
          firstRun: false
        };
        return newState;
      });
    }, 700);
  } else {
    overlayRef.current.style.right = '0';

    setTimeout(() => {
      overlayRef.current.style.right = '-100%';
      setCurrentPage(prevState => {
        const newState = {
          ...prevState,
          name: pageName,
          firstRun: false
        };
        return newState;
      });
    }, 700);
  }

}

export function isMobile() {
  return window.innerWidth < 720;
}
