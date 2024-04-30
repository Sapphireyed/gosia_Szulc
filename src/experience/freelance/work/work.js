import '../style.scss'
import './work.scss'
import { jobmania, raPics, kancPics, qlPics } from './projectsImgs.js'
import { changeProjects } from './changeProject.js'

import kanc from '../img/kanc.png'
import ra from '../img/rogue.png'
import jobm from '../img/jobmania.png'
import ql from '../img/questlands.png'


//document.querySelectorAll('#navContainer nav #nav a')[2].style.color = 'white'

let mainSect = document.createElement('section')
let header = document.createElement('div')
header.id = 'header'
header.innerHTML = '<h1>MY PROJECTS</h1>'

mainSect.append(header)

let projects = document.createElement('div')
projects.id = 'projects'

// list html
let logos = []
let projectsListSrc = [jobm, ra, kanc, ql]
projectsListSrc.map(p => {
    let img = document.createElement('img')
    img.src = p
    logos.push(img)

})
let listDiv = document.createElement('div')
listDiv.id = 'listDiv'
let ul = document.createElement('ul')
logos.map(logo => {
    ul.append(logo)
})
listDiv.append(ul)

projects.append(listDiv)
projects.style.height = window.innerHeight - 120 + 'px'

// cube html
let details = document.createElement('div');
details.id = 'details'
let cubeContainer = document.createElement('div')
cubeContainer.classList.add('scene', 'animatedCube')
let cubeDiv = document.createElement('div')
cubeDiv.classList.add('cube')

let pic1,pic2,pic3,pic4,pic5,pic6
let front = document.createElement('div')
front.classList.add('cube_face', 'front', 'animatedSide')
front.append(logos[0].cloneNode(true))
let back = document.createElement('div')
back.classList.add('cube_face', 'back', 'animatedSide')
back.append(logos[1].cloneNode(true))
let right = document.createElement('div')
right.classList.add('cube_face', 'right', 'animatedSide')
right.append(logos[2].cloneNode(true))
let left = document.createElement('div')
left.classList.add('cube_face', 'left', 'animatedSide')
left.append(logos[3].cloneNode(true))
let top = document.createElement('div')
top.classList.add('cube_face', 'top', 'animatedSide')
let bottom = document.createElement('div')
bottom.classList.add('cube_face', 'bottom', 'animatedSide')

cubeDiv.append(front, back, right, left, top, bottom)
cubeContainer.appendChild(cubeDiv)
details.append(cubeContainer)

let navbtns = document.createElement('p')
navbtns.classList.add('radio-group')
navbtns.innerHTML = '<label><input type="radio" name="rotate-cube-side" value="front" checked /> front </label>' +
    '<label><input type="radio" name="rotate-cube-side" value="right" /> right </label>' +
    '<label><input type="radio" name="rotate-cube-side" value="back" /> back </label>' +
    '<label><input type="radio" name="rotate-cube-side" value="left" /> left </label>' +
    '<label><input type="radio" name="rotate-cube-side" value="top" /> top </label>' +
    '<label><input type="radio" name="rotate-cube-side" value="bottom" /> bottom </label>'
details.append(navbtns)

projects.append(details)
mainSect.append(projects)

document.body.append(mainSect)


// functions
// cube function

var scene = document.querySelector('.scene');
var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {
    var checkedRadio = radioGroup.querySelector(':checked');
    var showClass = 'show-' + checkedRadio.value;
    var imgOnSide = document.querySelector('.' + checkedRadio.value + ' img')

    if (currentClass) {
        cube.classList.remove(currentClass);
    }
    if (imgOnSide !== null && checkedRadio.value !== 'bottom') {
      //  document.querySelector('.' + checkedRadio.value + ' img').style.animation = 'stretch 0.6s ease 0.5s forwards'
    } else if (checkedRadio.value == 'bottom') {
        console.log('bottom')
    }


    cube.classList.add(showClass);
    currentClass = showClass;

  //  scene.style.animation = 'spin 5s ease infinite'
}
// set initial side
changeSide();

//randomly chane sides every 2 seconds
radioGroup.addEventListener('change', changeSide);
let spinCube = setInterval(function () {
    let rand = Math.floor(Math.random() * 5);
    radioGroup.children[rand].querySelector('input').checked = true
    changeSide();
}, 2000)


// change projects displayed on the cube

let projectsList = Array.from(document.querySelectorAll('#listDiv ul img'))
let cubeSides = Array.from(document.getElementsByClassName('cube_face'))

let allPrjectsPics = [jobmania, raPics, kancPics, qlPics]
changeProjects(projectsList, cubeSides, allPrjectsPics, spinCube)
