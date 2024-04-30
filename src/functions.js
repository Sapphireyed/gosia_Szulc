export function animateOverlay(event, overlayRef, setCurrentPage, pageName) {
  document.querySelector('.selected')?.classList.remove('selected');
  event.target.closest('.item')?.classList.add('selected');
  hideGame();
  //if (window.innerWidth <= 700) {
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

      if (pageName === 'Desktop') {
        document.querySelector('#canvas1')?.classList.remove('hidden');
      }
    }, 700);
}

export function isMobile() {
  return window.innerWidth < 720;
}

function hideGame() {
  document.querySelector('#canvas2').style.display = 'none';
  document.querySelector('#canvas2').style.opacity = '0';
  document.querySelector('#replay').style.display = 'none';

}
