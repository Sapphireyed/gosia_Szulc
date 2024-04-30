function changeProjects(arr, cube, pics, setRestarted, restarted) {

    arr.map((item,ind) => {
        item.addEventListener('click', () => handleSideClick(item, ind));
    });

    function handleSideClick(item, ind) {
        setRestarted(prevState => false);
        if (!restarted) {
            return;
        } else if (restarted) {
            arr.forEach(side => side.classList.add('cube-side-changed'));

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
