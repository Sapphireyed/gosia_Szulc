function createImgs(imgsSrc, imgs) {
    imgsSrc.map(src => {
        let img = document.createElement('img');
        img.src = src
        imgs.push(img)
    })
}

// JOBMANIA
import loading from '../img/projects/jobm/loading.png'
import home from '../img/projects/jobm/homeAnimations.png'
import table from '../img/projects/jobm/table.jpg'
import faqJobm from '../img/projects/jobm/faq.png'
import chapters from '../img/projects/jobm/chapters.png'
import mobileLoad from '../img/projects/jobm/mobileLoad.jpg'
import mobileFaqJobm from '../img/projects/jobm/mobileFaq.jpg'
import mobileHomeJobm from '../img/projects/jobm/mobileHome.jpg'
import mobileGlossJobm from '../img/projects/jobm/mobileGloss.jpg'

let jobmSrcs = [loading, home, table, chapters, faqJobm, mobileLoad, mobileFaqJobm, mobileGlossJobm, mobileHomeJobm]
let jobmania = []

createImgs(jobmSrcs, jobmania)

// RA
import homeRa from '../img/projects/ra/home.png'
import worlds from '../img/projects/ra/worlds.png'
import beta from '../img/projects/ra/beta.png'
import enemy from '../img/projects/ra/enemy.png'
import guide from '../img/projects/ra/guide.png'
import mobileHome from '../img/projects/ra/mobileHome.jpg'
import mobileWorlds from '../img/projects/ra/mobileWorlds.jpg'
import mobileHero from '../img/projects/ra/mobileHero.jpg'
import mobileEnemy from '../img/projects/ra/mobileEnemy.jpg'

let raSrcs = [homeRa, worlds, enemy, beta, guide, mobileHome, mobileHero, mobileEnemy, mobileWorlds]
let raPics = []

createImgs(raSrcs, raPics)

// kanc
import homeKanc from '../img/projects/kanc/home.png'
import kontakt from '../img/projects/kanc/kontakt.png'
import services from '../img/projects/kanc/services.png'
import homeFull from '../img/projects/kanc/homeFull.png'
import aboutKanc from '../img/projects/kanc/about.png'
import mobileHomeKanc from '../img/projects/kanc/mobileHome.png'
import mobileSpec from '../img/projects/kanc/mobileSpec.jpg'


let kancSrcs = [homeKanc, services, aboutKanc,kontakt, homeFull, mobileHomeKanc, mobileSpec]
let kancPics = []

createImgs(kancSrcs, kancPics)

// ql
import homeQl from '../img/projects/ql/home.png'
import heroesQl from '../img/projects/ql/heroesQl.png'
import worldsQl from '../img/projects/ql/worldsQl.png'
import collectionQl from '../img/projects/ql/collectionQl.png'
import homeNight from '../img/projects/ql/homeNight.png'
import mobileHomeQl from '../img/projects/ql/mobileHome.jpg'
import mobileWorldsQl from '../img/projects/ql/mobileWorlds.jpg'


let qlSrcs = [homeQl, heroesQl, worldsQl, collectionQl, homeNight, mobileHomeQl, mobileWorldsQl]
let qlPics = []

createImgs(qlSrcs, qlPics)

/*let jobmDesc = document.createElement('p')
jobmDesc.innerHTML = 'Jobmania website serves as a wiki for a very popular, complex Android game with a lot of content.' +
    'The web was created to make it easier for user to find information on specific items and plan their strategy.' +
    'It contains all the information from the game, makes it easy to search, filter and sort information for best user experience.'
//jobmania.splice(0,0,jobmDesc)
let rogueDesc = '<p> my first commercial project - a website for android game with a big and active community that had been asking for a wiki. ' +
    'Website created in Wordpress customized accordingly to fit developers needs.</p>'

let kancDesc = '<p>A website created for law office to, standard website containgn appealing homepagea and clearand simple  about, services and contact pages. ' +
    'Website created using React</p>'

let qlDesc = '<p>A demo web created for an Adroide rogue-like game Quest Lands. The web created as privae hobby project.' +
    ' Althought it is not an official website it currently serves as a wiki for game players announced officialy by game developer on his discord server.</p > '*/

export { jobmania, raPics, kancPics, qlPics }
