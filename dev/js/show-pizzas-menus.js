const menuPizza1 = document.getElementById('menu-pizza-0')
const margaritaPizzaMenu = document.getElementById('margarita-pizza-menu')

const menuPizza2 = document.getElementById('menu-pizza-1')
const camperaPizzaMenu = document.getElementById('campera-pizza-menu')

const menuPizza3 = document.getElementById('menu-pizza-2')
const mincePizzaMenu = document.getElementById('mince-pizza-menu')

const menuPizza4 = document.getElementById('menu-pizza-3')
const crabPizzaMenu = document.getElementById('crab-pizza-menu')

const menuPizza5 = document.getElementById('menu-pizza-4')
const baconPizzaMenu = document.getElementById('bacon-pizza-menu')

const menuPizza6 = document.getElementById('menu-pizza-5')
const kebabPizzaMenu = document.getElementById('kebab-pizza-menu')

const menuPizza7 = document.getElementById('menu-pizza-6')
const frankfurtPizzaMenu = document.getElementById('frankfurt-pizza-menu')

const menuPizza8 = document.getElementById('menu-pizza-7')
const fourCheesePizzaMenu = document.getElementById('fourcheese-pizza-menu')

const menuPizza9 = document.getElementById('menu-pizza-8')
const baconChickenPizzaMenu = document.getElementById('bacon-pizza-menu')

const menuPizza10 = document.getElementById('menu-pizza-9')
const miniPizzaMenu = document.getElementById('mini-pizza-menu')

//Show margarita pizza menu
if(menuPizza1) {
    menuPizza1.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'pizza') {
                margaritaPizzaMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(margaritaPizzaMenu) {
    margaritaPizzaMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            margaritaPizzaMenu.classList.remove('lightbox--show')
        }
    })
}

//Show campera pizza menu
if(menuPizza2) {
    menuPizza2.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'pizza') {
                camperaPizzaMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(camperaPizzaMenu) {
    camperaPizzaMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            camperaPizzaMenu.classList.remove('lightbox--show')
        }
    })
}

//Show mince pizza menu
if(menuPizza3) {
    menuPizza3.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'pizza') {
                mincePizzaMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(mincePizzaMenu) {
    mincePizzaMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            mincePizzaMenu.classList.remove('lightbox--show')
        }
    })
}

//Show crab pizza menu
if(menuPizza4) {
    menuPizza4.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'pizza') {
                crabPizzaMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(crabPizzaMenu) {
    crabPizzaMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            crabPizzaMenu.classList.remove('lightbox--show')
        }
    })
}

//Show bacon pizza menu
if(menuPizza5) {
    menuPizza5.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'pizza') {
                baconPizzaMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(baconPizzaMenu) {
    baconPizzaMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            baconPizzaMenu.classList.remove('lightbox--show')
        }
    })
}

//Show kebab pizza menu
if(menuPizza6) {
    menuPizza6.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'pizza') {
                kebabPizzaMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(kebabPizzaMenu) {
    kebabPizzaMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            kebabPizzaMenu.classList.remove('lightbox--show')
        }
    })
}

//Show frankfurt pizza menu
if(menuPizza7) {
    menuPizza7.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'pizza') {
                frankfurtPizzaMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(frankfurtPizzaMenu) {
    frankfurtPizzaMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            frankfurtPizzaMenu.classList.remove('lightbox--show')
        }
    })
}

//Show four cheese pizza menu
if(menuPizza8) {
    menuPizza8.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'pizza') {
                fourCheesePizzaMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(fourCheesePizzaMenu) {
    fourCheesePizzaMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            fourCheesePizzaMenu.classList.remove('lightbox--show')
        }
    })
}

//Show bacon chicken pizza menu
if(menuPizza9) {
    menuPizza9.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'pizza') {
                baconChickenPizzaMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(baconChickenPizzaMenu) {
    baconChickenPizzaMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            baconChickenPizzaMenu.classList.remove('lightbox--show')
        }
    })
}

//Show mini pizza menu
if(menuPizza10) {
    menuPizza10.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'pizza') {
                miniPizzaMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(miniPizzaMenu) {
    miniPizzaMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            miniPizzaMenu.classList.remove('lightbox--show')
        }
    })
}
