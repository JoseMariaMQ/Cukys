const menuBurger1 = document.getElementById('menu-burger-0')
const normalBurgerMenu = document.getElementById('normal-burger-menu')

const menuBurger2 = document.getElementById('menu-burger-1')
const crispyCukysBurgerMenu = document.getElementById('crispycukys-burger-menu')

const menuBurger3 = document.getElementById('menu-burger-2')
const eggBurgerMenu = document.getElementById('egg-burger-menu')

const menuBurger4 = document.getElementById('menu-burger-3')
const baconBurgerMenu = document.getElementById('bacon-burger-menu')

const menuBurger5 = document.getElementById('menu-burger-4')
const cheeseBurgerMenu = document.getElementById('cheese-burger-menu')

const menuBurger6 = document.getElementById('menu-burger-5')
const superBurgerMenu = document.getElementById('super-burger-menu')

const menuBurger7 = document.getElementById('menu-burger-6')
const premiumBovineBurgerMenu = document.getElementById('premiumbovine-burger-menu')

const menuBurger8 = document.getElementById('menu-burger-7')
const burgerXLBurgerMenu = document.getElementById('burgerxl-burger-menu')

//Show normal burger menu
if(menuBurger1) {
    menuBurger1.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'burger') {
                normalBurgerMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(normalBurgerMenu) {
    normalBurgerMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            normalBurgerMenu.classList.remove('lightbox--show')
        }
    })
}

//Show crispy cukys burger menu
if(menuBurger2) {
    menuBurger2.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'burger') {
                crispyCukysBurgerMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(crispyCukysBurgerMenu) {
    crispyCukysBurgerMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            crispyCukysBurgerMenu.classList.remove('lightbox--show')
        }
    })
}

//Show egg burger menu
if(menuBurger3) {
    menuBurger3.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'burger') {
                eggBurgerMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(eggBurgerMenu) {
    eggBurgerMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            eggBurgerMenu.classList.remove('lightbox--show')
        }
    })
}

//Show bacon burger menu
if(menuBurger4) {
    menuBurger4.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'burger') {
                baconBurgerMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(baconBurgerMenu) {
    baconBurgerMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            baconBurgerMenu.classList.remove('lightbox--show')
        }
    })
}

//Show cheese burger menu
if(menuBurger5) {
    menuBurger5.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'burger') {
                cheeseBurgerMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(cheeseBurgerMenu) {
    cheeseBurgerMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            cheeseBurgerMenu.classList.remove('lightbox--show')
        }
    })
}

//Show super burger menu
if(menuBurger6) {
    menuBurger6.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'burger') {
                superBurgerMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(superBurgerMenu) {
    superBurgerMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            superBurgerMenu.classList.remove('lightbox--show')
        }
    })
}

//Show premium bovine burger menu
if(menuBurger7) {
    menuBurger7.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'burger') {
                premiumBovineBurgerMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(premiumBovineBurgerMenu) {
    premiumBovineBurgerMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            premiumBovineBurgerMenu.classList.remove('lightbox--show')
        }
    })
}

//Show burger xl burger menu
if(menuBurger8) {
    menuBurger8.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'burger') {
                burgerXLBurgerMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(burgerXLBurgerMenu) {
    burgerXLBurgerMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            burgerXLBurgerMenu.classList.remove('lightbox--show')
        }
    })
}
