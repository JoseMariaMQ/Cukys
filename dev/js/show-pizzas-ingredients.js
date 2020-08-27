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
