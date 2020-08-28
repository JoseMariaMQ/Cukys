const infoPizza1 = document.getElementById('info-pizza-0')
const margaritaPizzaIngredients = document.getElementById('margarita-pizza-ingredients')

const infoPizza2 = document.getElementById('info-pizza-1')
const camperaPizzaIngredients = document.getElementById('campera-pizza-ingredients')

const infoPizza3 = document.getElementById('info-pizza-2')
const mincePizzaIngredients = document.getElementById('mince-pizza-ingredients')

const infoPizza4 = document.getElementById('info-pizza-3')
const crabPizzaIngredients = document.getElementById('crab-pizza-ingredients')

const infoPizza5 = document.getElementById('info-pizza-4')
const baconPizzaIngredients = document.getElementById('bacon-pizza-ingredients')

const infoPizza6 = document.getElementById('info-pizza-5')
const kebabPizzaIngredients = document.getElementById('kebab-pizza-ingredients')

const infoPizza7 = document.getElementById('info-pizza-6')
const frankfurtPizzaIngredients = document.getElementById('frankfurt-pizza-ingredients')

const infoPizza8 = document.getElementById('info-pizza-7')
const fourCheesePizzaIngredients = document.getElementById('fourcheese-pizza-ingredients')

const infoPizza9 = document.getElementById('info-pizza-8')
const chickenBaconPizzaIngredients = document.getElementById('chickenbacon-pizza-ingredients')

const infoPizza10 = document.getElementById('info-pizza-9')
const miniPizzaIngredients = document.getElementById('mini-pizza-ingredients')

//Show margarita pizza ingredients
if(infoPizza1) {
    infoPizza1.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'pizza') {
                margaritaPizzaIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(margaritaPizzaIngredients) {
    margaritaPizzaIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            margaritaPizzaIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show campera pizza ingredients
if(infoPizza2) {
    infoPizza2.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'pizza') {
                camperaPizzaIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(camperaPizzaIngredients) {
    camperaPizzaIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            camperaPizzaIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show mince pizza ingredients
if(infoPizza3) {
    infoPizza3.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'pizza') {
                mincePizzaIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(mincePizzaIngredients) {
    mincePizzaIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            mincePizzaIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show crab pizza ingredients
if(infoPizza4) {
    infoPizza4.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'pizza') {
                crabPizzaIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(crabPizzaIngredients) {
    crabPizzaIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            crabPizzaIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show bacon pizza ingredients
if(infoPizza5) {
    infoPizza5.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'pizza') {
                baconPizzaIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(baconPizzaIngredients) {
    baconPizzaIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            baconPizzaIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show kebab pizza ingredients
if(infoPizza6) {
    infoPizza6.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'pizza') {
                kebabPizzaIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(kebabPizzaIngredients) {
    kebabPizzaIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            kebabPizzaIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show frankfurt pizza ingredients
if(infoPizza7) {
    infoPizza7.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'pizza') {
                frankfurtPizzaIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(frankfurtPizzaIngredients) {
    frankfurtPizzaIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            frankfurtPizzaIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show four cheese pizza ingredients
if(infoPizza8) {
    infoPizza8.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'pizza') {
                fourCheesePizzaIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(fourCheesePizzaIngredients) {
    fourCheesePizzaIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            fourCheesePizzaIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show chicken bacon pizza ingredients
if(infoPizza9) {
    infoPizza9.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'pizza') {
                chickenBaconPizzaIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(chickenBaconPizzaIngredients) {
    chickenBaconPizzaIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            chickenBaconPizzaIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show mini pizza ingredients
if(infoPizza10) {
    infoPizza10.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'pizza') {
                miniPizzaIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(miniPizzaIngredients) {
    miniPizzaIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            miniPizzaIngredients.classList.remove('lightbox--show')
        }
    })
}
