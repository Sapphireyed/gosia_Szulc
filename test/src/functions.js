export function animateOverlay(overlayRef, setCurrentPage, pageName) {
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
