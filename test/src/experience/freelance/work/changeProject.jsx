function changeProjects(arr, cube, pics, interval, setRestarted, restarted) {

    console.log('restarted', restarted)
    arr.map((item,ind) => {
        item.addEventListener('click', () => handleSideClick(item, ind));
    });

    function handleSideClick(item, ind) {
        setRestarted(prevState => false);
        if (!restarted) {
            console.log('return')
            return;
        } else if (restarted) {
            console.log('return not')
            arr.forEach(side => side.classList.add('cube-side-changed'));
            clearInterval(interval)

            cube.map((side, i) => {
                side.parentNode.parentNode.classList.remove('animatedCube')
                side.querySelector('img').src = pics[ind][i].src;
                side.classList.add('not-clickable');
            });
        }

        item.removeEventListener('click', handleSideClick);
    }
}

export { changeProjects }
