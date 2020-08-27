const menuBaguette1 = document.getElementById('menu-baguette-0')
const vegetableBaguetteMenu = document.getElementById('vegetable-baguette-menu')

const menuBaguette2 = document.getElementById('menu-baguette-1')
const tunaBaguetteMenu = document.getElementById('tuna-baguette-menu')

const menuBaguette3 = document.getElementById('menu-baguette-2')
const hamBaguetteMenu = document.getElementById('ham-baguette-menu')

const menuBaguette4 = document.getElementById('menu-baguette-3')
const chickenBaguetteMenu = document.getElementById('chicken-baguette-menu')

const menuBaguette5 = document.getElementById('menu-baguette-4')
const baconBaguetteMenu = document.getElementById('bacon-baguette-menu')

const menuBaguette6 = document.getElementById('menu-baguette-5')
const tortillaBaguetteMenu = document.getElementById('tortilla-baguette-menu')

const menuBaguette7 = document.getElementById('menu-baguette-6')
const hamTortillaBaguetteMenu = document.getElementById('hamtortilla-baguette-menu')

const menuBaguette8 = document.getElementById('menu-baguette-7')
const maigretteBaguetteMenu = document.getElementById('maigrette-baguette-menu')

const menuBaguette9 = document.getElementById('menu-baguette-8')
const loinBaguetteMenu = document.getElementById('loin-baguette-menu')

const menuBaguette10 = document.getElementById('menu-baguette-9')
const freshLoinBaguetteMenu = document.getElementById('freshloin-baguette-menu')

const menuBaguette11 = document.getElementById('menu-baguette-10')
const squidBaguetteMenu = document.getElementById('squid-baguette-menu')

const menuBaguette12 = document.getElementById('menu-baguette-11')
const sausagesBaguetteMenu = document.getElementById('sausages-baguette-menu')

const menuBaguette13 = document.getElementById('menu-baguette-12')
const specialBaguetteMenu = document.getElementById('special-baguette-menu')

//Show vegetable baguette menu
if(menuBaguette1) {
    menuBaguette1.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                vegetableBaguetteMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(vegetableBaguetteMenu) {
    vegetableBaguetteMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            vegetableBaguetteMenu.classList.remove('lightbox--show')
        }
    })
}

//Show tuna baguette menu
if(menuBaguette2) {
    menuBaguette2.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                tunaBaguetteMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(tunaBaguetteMenu) {
    tunaBaguetteMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            tunaBaguetteMenu.classList.remove('lightbox--show')
        }
    })
}

//Show ham baguette menu
if(menuBaguette3) {
    menuBaguette3.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                hamBaguetteMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(hamBaguetteMenu) {
    hamBaguetteMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            hamBaguetteMenu.classList.remove('lightbox--show')
        }
    })
}

//Show chicken baguette menu
if(menuBaguette4) {
    menuBaguette4.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                chickenBaguetteMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(chickenBaguetteMenu) {
    chickenBaguetteMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            chickenBaguetteMenu.classList.remove('lightbox--show')
        }
    })
}

//Show bacon baguette menu
if(menuBaguette5) {
    menuBaguette5.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                baconBaguetteMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(baconBaguetteMenu) {
    baconBaguetteMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            baconBaguetteMenu.classList.remove('lightbox--show')
        }
    })
}

//Show tortilla baguette menu
if(menuBaguette6) {
    menuBaguette6.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                tortillaBaguetteMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(tortillaBaguetteMenu) {
    tortillaBaguetteMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            tortillaBaguetteMenu.classList.remove('lightbox--show')
        }
    })
}

//Show ham tortilla baguette menu
if(menuBaguette7) {
    menuBaguette7.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                hamTortillaBaguetteMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(hamTortillaBaguetteMenu) {
    hamTortillaBaguetteMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            hamTortillaBaguetteMenu.classList.remove('lightbox--show')
        }
    })
}

//Show maigrette baguette menu
if(menuBaguette8) {
    menuBaguette8.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                maigretteBaguetteMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(maigretteBaguetteMenu) {
    maigretteBaguetteMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            maigretteBaguetteMenu.classList.remove('lightbox--show')
        }
    })
}

//Show loin baguette menu
if(menuBaguette9) {
    menuBaguette9.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                loinBaguetteMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(loinBaguetteMenu) {
    loinBaguetteMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            loinBaguetteMenu.classList.remove('lightbox--show')
        }
    })
}

//Show fresh loin baguette menu
if(menuBaguette10) {
    menuBaguette10.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                freshLoinBaguetteMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(freshLoinBaguetteMenu) {
    freshLoinBaguetteMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            freshLoinBaguetteMenu.classList.remove('lightbox--show')
        }
    })
}

//Show squid baguette menu
if(menuBaguette11) {
    menuBaguette11.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                squidBaguetteMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(squidBaguetteMenu) {
    squidBaguetteMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            squidBaguetteMenu.classList.remove('lightbox--show')
        }
    })
}

//Show sausages baguette menu
if(menuBaguette12) {
    menuBaguette12.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                sausagesBaguetteMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(sausagesBaguetteMenu) {
    sausagesBaguetteMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            sausagesBaguetteMenu.classList.remove('lightbox--show')
        }
    })
}

//Show special baguette menu
if(menuBaguette13) {
    menuBaguette13.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                specialBaguetteMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(specialBaguetteMenu) {
    specialBaguetteMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            specialBaguetteMenu.classList.remove('lightbox--show')
        }
    })
}
