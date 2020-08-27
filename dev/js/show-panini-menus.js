const menuPanini1 = document.getElementById('menu-panini-0')
const yorkPaniniMenu = document.getElementById('york-panini-menu')

const menuPanini2 = document.getElementById('menu-panini-1')
const hamPaniniMenu = document.getElementById('ham-panini-menu')

const menuPanini3 = document.getElementById('menu-panini-2')
const baconPaniniMenu = document.getElementById('bacon-panini-menu')

const menuPanini4 = document.getElementById('menu-panini-3')
const crabPaniniMenu = document.getElementById('crab-panini-menu')

const menuPanini5 = document.getElementById('menu-panini-4')
const bbqPaniniMenu = document.getElementById('bbq-panini-menu')

//Show york panini menu
if(menuPanini1) {
    menuPanini1.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'panini') {
                yorkPaniniMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(yorkPaniniMenu) {
    yorkPaniniMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            yorkPaniniMenu.classList.remove('lightbox--show')
        }
    })
}

//Show ham panini menu
if(menuPanini2) {
    menuPanini2.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'panini') {
                hamPaniniMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(hamPaniniMenu) {
    hamPaniniMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            hamPaniniMenu.classList.remove('lightbox--show')
        }
    })
}

//Show bacon panini menu
if(menuPanini3) {
    menuPanini3.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'panini') {
                baconPaniniMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(baconPaniniMenu) {
    baconPaniniMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            baconPaniniMenu.classList.remove('lightbox--show')
        }
    })
}

//Show crab panini menu
if(menuPanini4) {
    menuPanini4.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'panini') {
                crabPaniniMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(crabPaniniMenu) {
    crabPaniniMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            crabPaniniMenu.classList.remove('lightbox--show')
        }
    })
}

//Show bbq panini menu
if(menuPanini5) {
    menuPanini5.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'panini') {
                bbqPaniniMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(bbqPaniniMenu) {
    bbqPaniniMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            bbqPaniniMenu.classList.remove('lightbox--show')
        }
    })
}
