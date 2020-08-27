//Burgers
const infoBurger1 = document.getElementById('info-burger-0')
const normalBurgerIngredients = document.getElementById('normal-burger-ingredients')

const infoBurger2 = document.getElementById('info-burger-1')
const crispyCukysBurgerIngredients = document.getElementById('crispycukys-burger-ingredients')

const infoBurger3 = document.getElementById('info-burger-2')
const eggBurgerIngredients = document.getElementById('egg-burger-ingredients')

const infoBurger4 = document.getElementById('info-burger-3')
const baconBurgerIngredients = document.getElementById('bacon-burger-ingredients')

const infoBurger5 = document.getElementById('info-burger-4')
const cheeseBurgerIngredients = document.getElementById('cheese-burger-ingredients')

const infoBurger6 = document.getElementById('info-burger-5')
const superBurgerIngredients = document.getElementById('super-burger-ingredients')

const infoBurger7 = document.getElementById('info-burger-6')
const premiumBovineBurgerIngredients = document.getElementById('premiumbovine-burger-ingredients')

const infoBurger8 = document.getElementById('info-burger-7')
const burgerXLBurgerIngredients = document.getElementById('burgerxl-burger-ingredients')

//Show normal burger ingredients
if(infoBurger1) {
    infoBurger1.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'burger') {
                normalBurgerIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(normalBurgerIngredients) {
    normalBurgerIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            normalBurgerIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show crispy cukys burger ingredients
if(infoBurger2) {
    infoBurger2.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'burger') {
                crispyCukysBurgerIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(crispyCukysBurgerIngredients) {
    crispyCukysBurgerIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            crispyCukysBurgerIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show egg burger ingredients
if(infoBurger3) {
    infoBurger3.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'burger') {
                eggBurgerIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(eggBurgerIngredients) {
    eggBurgerIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            eggBurgerIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show bacon burger ingredients
if(infoBurger4) {
    infoBurger4.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'burger') {
                baconBurgerIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(baconBurgerIngredients) {
    baconBurgerIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            baconBurgerIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show cheese burger ingredients
if(infoBurger5) {
    infoBurger5.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'burger') {
                cheeseBurgerIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(cheeseBurgerIngredients) {
    cheeseBurgerIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            cheeseBurgerIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show super burger ingredients
if(infoBurger6) {
    infoBurger6.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'burger') {
                superBurgerIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(superBurgerIngredients) {
    superBurgerIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            superBurgerIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show premium bovine burger ingredients
if(infoBurger7) {
    infoBurger7.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'burger') {
                premiumBovineBurgerIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(premiumBovineBurgerIngredients) {
    premiumBovineBurgerIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            premiumBovineBurgerIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show burger xl burger ingredients
if(infoBurger8) {
    infoBurger8.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'burger') {
                burgerXLBurgerIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(burgerXLBurgerIngredients) {
    burgerXLBurgerIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            burgerXLBurgerIngredients.classList.remove('lightbox--show')
        }
    })
}
