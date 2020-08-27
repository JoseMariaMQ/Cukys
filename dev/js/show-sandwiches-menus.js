const menuSandwich1 = document.getElementById('menu-sandwich-0')
const mixSandwichMenu = document.getElementById('mix-sandwich-menu')

const menuSandwich2 = document.getElementById('menu-sandwich-1')
const chickenSandwichMenu = document.getElementById('chicken-sandwich-menu')

const menuSandwich3 = document.getElementById('menu-sandwich-2')
const inkwellSandwichMenu = document.getElementById('inkwell-sandwich-menu')

const menuSandwich4 = document.getElementById('menu-sandwich-3')
const vegetableSandwichMenu = document.getElementById('vegetable-sandwich-menu')

const menuSandwich5 = document.getElementById('menu-sandwich-4')
const specialSandwichMenu = document.getElementById('special-sandwich-menu')

//Show mix sandwich menu
if(menuSandwich1) {
    menuSandwich1.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'sandwich') {
                mixSandwichMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(mixSandwichMenu) {
    mixSandwichMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            mixSandwichMenu.classList.remove('lightbox--show')
        }
    })
}

//Show chicken sandwich menu
if(menuSandwich2) {
    menuSandwich2.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'sandwich') {
                chickenSandwichMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(chickenSandwichMenu) {
    chickenSandwichMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            chickenSandwichMenu.classList.remove('lightbox--show')
        }
    })
}

//Show inkwell sandwich menu
if(menuSandwich3) {
    menuSandwich3.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'sandwich') {
                inkwellSandwichMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(inkwellSandwichMenu) {
    inkwellSandwichMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            inkwellSandwichMenu.classList.remove('lightbox--show')
        }
    })
}

//Show vegetable sandwich menu
if(menuSandwich4) {
    menuSandwich4.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'sandwich') {
                vegetableSandwichMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(vegetableSandwichMenu) {
    vegetableSandwichMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            vegetableSandwichMenu.classList.remove('lightbox--show')
        }
    })
}

//Show special sandwich menu
if(menuSandwich5) {
    menuSandwich5.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'sandwich') {
                specialSandwichMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(specialSandwichMenu) {
    specialSandwichMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            specialSandwichMenu.classList.remove('lightbox--show')
        }
    })
}
