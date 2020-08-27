const menuStarter1 = document.getElementById('menu-starter-0')
const nuggetsStarterMenu = document.getElementById('nuggets-starter-menu')

const menuStarter2 = document.getElementById('menu-starter-1')
const croquettesStarterMenu = document.getElementById('croquettes-starter-menu')

const menuStarter3 = document.getElementById('menu-starter-2')
const dumplingsStarterMenu = document.getElementById('dumplings-starter-menu')

const menuStarter4 = document.getElementById('menu-starter-3')
const sanjacoboStarterMenu = document.getElementById('sanjacobo-starter-menu')

const menuStarter5 = document.getElementById('menu-starter-4')
const twisterStarterMenu = document.getElementById('twister-starter-menu')

const menuStarter6 = document.getElementById('menu-starter-5')
const fingersStarterMenu = document.getElementById('fingers-starter-menu')

const menuStarter7 = document.getElementById('menu-starter-6')
const torpedoStarterMenu = document.getElementById('torpedo-starter-menu')

const menuStarter8 = document.getElementById('menu-starter-7')
const chickendelicaciesStarterMenu = document.getElementById('chickendelicacies-starter-menu')

//Show nuggets starter menu
if(menuStarter1) {
    menuStarter1.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'starter') {
                nuggetsStarterMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(nuggetsStarterMenu) {
    nuggetsStarterMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            nuggetsStarterMenu.classList.remove('lightbox--show')
        }
    })
}

//Show croquettes starter menu
if(menuStarter2) {
    menuStarter2.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'starter') {
                croquettesStarterMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(croquettesStarterMenu) {
    croquettesStarterMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            croquettesStarterMenu.classList.remove('lightbox--show')
        }
    })
}

//Show dumplings starter menu
if(menuStarter3) {
    menuStarter3.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'starter') {
                dumplingsStarterMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(dumplingsStarterMenu) {
    dumplingsStarterMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            dumplingsStarterMenu.classList.remove('lightbox--show')
        }
    })
}

//Show san jacobos starter menu
if(menuStarter4) {
    menuStarter4.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'starter') {
                sanjacoboStarterMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(sanjacoboStarterMenu) {
    sanjacoboStarterMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            sanjacoboStarterMenu.classList.remove('lightbox--show')
        }
    })
}

//Show twister starter menu
if(menuStarter5) {
    menuStarter5.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'starter') {
                twisterStarterMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(twisterStarterMenu) {
    twisterStarterMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            twisterStarterMenu.classList.remove('lightbox--show')
        }
    })
}

//Show fingers starter menu
if(menuStarter6) {
    menuStarter6.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'starter') {
                fingersStarterMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(fingersStarterMenu) {
    fingersStarterMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            fingersStarterMenu.classList.remove('lightbox--show')
        }
    })
}

//Show torpedo starter menu
if(menuStarter7) {
    menuStarter7.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'starter') {
                torpedoStarterMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(torpedoStarterMenu) {
    torpedoStarterMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            torpedoStarterMenu.classList.remove('lightbox--show')
        }
    })
}

//Show chicken delicacies starter menu
if(menuStarter8) {
    menuStarter8.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'starter') {
                chickendelicaciesStarterMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(chickendelicaciesStarterMenu) {
    chickendelicaciesStarterMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            chickendelicaciesStarterMenu.classList.remove('lightbox--show')
        }
    })
}
