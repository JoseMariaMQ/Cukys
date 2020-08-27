const menuGuitar1 = document.getElementById('menu-guitar-0')
const hamGuitarMenu = document.getElementById('ham-guitar-menu')

const menuGuitar2 = document.getElementById('menu-guitar-1')
const chickenGuitarMenu = document.getElementById('chicken-guitar-menu')

const menuGuitar3 = document.getElementById('menu-guitar-2')
const loinGuitarMenu = document.getElementById('loin-guitar-menu')

const menuGuitar4 = document.getElementById('menu-guitar-3')
const hamTortillaGuitarMenu = document.getElementById('hamtortilla-guitar-menu')

//Show ham guitar menu
if(menuGuitar1) {
    menuGuitar1.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'guitar') {
                hamGuitarMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(hamGuitarMenu) {
    hamGuitarMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            hamGuitarMenu.classList.remove('lightbox--show')
        }
    })
}

//Show chicken guitar menu
if(menuGuitar2) {
    menuGuitar2.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'guitar') {
                chickenGuitarMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(chickenGuitarMenu) {
    chickenGuitarMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            chickenGuitarMenu.classList.remove('lightbox--show')
        }
    })
}

//Show loin guitar menu
if(menuGuitar3) {
    menuGuitar3.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'guitar') {
                loinGuitarMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(loinGuitarMenu) {
    loinGuitarMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            loinGuitarMenu.classList.remove('lightbox--show')
        }
    })
}

//Show ham tortilla guitar menu
if(menuGuitar4) {
    menuGuitar4.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'guitar') {
                hamTortillaGuitarMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(hamTortillaGuitarMenu) {
    hamTortillaGuitarMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            hamTortillaGuitarMenu.classList.remove('lightbox--show')
        }
    })
}
