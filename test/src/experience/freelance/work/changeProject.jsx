function changeProjects(arr, cube, pics, interval, setRestarted, restarted) {
    arr.map((item,ind) => {
        item.addEventListener('click', function () {
            setRestarted(false);
            if (restarted) {
                return;
            } else {
                arr.forEach(side => side.classList.add('cube-side-changed'));
                let linkEl = document.createElement('a')
                clearInterval(interval)

                cube.map((side, i) => {
                    let sideName;
                    switch (i) {
                        case 0:
                            sideName = 'Front'
                            break;
                        case 1:
                            sideName = 'Right'
                            break;
                        case 2:
                            sideName = 'Back'
                            break;
                        case 3:
                            sideName = 'Left'
                            break;
                        case 4:
                            sideName = 'Top'
                            break;
                        case 5:
                            sideName = 'Bottom'
                            break;
                    }

                    //side.style.animation = 'move' + sideName + ' 0.5s ease 1 forwards'
                    side.parentNode.parentNode.classList.remove('animatedCube')
                    side.innerHTML = ''
                    if (i == 5 && pics[ind] !== undefined) {
                        let link = linkEl.cloneNode(true)
                        link.append(pics[ind][i])
                        link.append(pics[ind][i + 1])
                        side.append(link)
                        side.children[0].children[0].classList.add('cubeSideBottom')
                        side.children[0].children[1].classList.add('cubeSideBottom')
                    } else {
                        let link = linkEl.cloneNode(true)
                        pics[ind] == undefined ? '' : link.append(pics[ind][i])
                        side.append(link)
                        side.children[0].children[0].classList.add('cubeSide')
                    }
                })
            }
        })
    });
}

export { changeProjects }
