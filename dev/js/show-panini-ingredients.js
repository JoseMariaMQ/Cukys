const infoPanini1 = document.getElementById('info-panini-0')
const yorkPaniniIngredients = document.getElementById('york-panini-ingredients')

const infoPanini2 = document.getElementById('info-panini-1')
const hamPaniniIngredients = document.getElementById('ham-panini-ingredients')

const infoPanini3 = document.getElementById('info-panini-2')
const baconPaniniIngredients = document.getElementById('bacon-panini-ingredients')

const infoPanini4 = document.getElementById('info-panini-3')
const crabPaniniIngredients = document.getElementById('crab-panini-ingredients')

const infoPanini5 = document.getElementById('info-panini-4')
const bbqPaniniIngredients = document.getElementById('bbq-panini-ingredients')

//Show york panini ingredients
if(infoPanini1) {
    infoPanini1.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'panini') {
                yorkPaniniIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(yorkPaniniIngredients) {
    yorkPaniniIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            yorkPaniniIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show ham panini ingredients
if(infoPanini2) {
    infoPanini2.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'panini') {
                hamPaniniIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(hamPaniniIngredients) {
    hamPaniniIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            hamPaniniIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show bacon panini ingredients
if(infoPanini3) {
    infoPanini3.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'panini') {
                baconPaniniIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(baconPaniniIngredients) {
    baconPaniniIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            baconPaniniIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show crab panini ingredients
if(infoPanini4) {
    infoPanini4.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'panini') {
                crabPaniniIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(crabPaniniIngredients) {
    crabPaniniIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            crabPaniniIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show bqq panini ingredients
if(infoPanini5) {
    infoPanini5.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'panini') {
                bbqPaniniIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(bbqPaniniIngredients) {
    bbqPaniniIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            bbqPaniniIngredients.classList.remove('lightbox--show')
        }
    })
}
