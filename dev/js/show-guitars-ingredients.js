const infoGuitar1 = document.getElementById('info-guitar-0')
const hamGuitarIngredients = document.getElementById('ham-guitar-ingredients')

const infoGuitar2 = document.getElementById('info-guitar-1')
const chickenGuitarIngredients = document.getElementById('chicken-guitar-ingredients')

const infoGuitar3 = document.getElementById('info-guitar-2')
const loinGuitarIngredients = document.getElementById('loin-guitar-ingredients')

const infoGuitar4 = document.getElementById('info-guitar-3')
const tortillaGuitarIngredients = document.getElementById('tortilla-guitar-ingredients')

//Show ham guitar ingredients
if(infoGuitar1) {
    infoGuitar1.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'guitar') {
                hamGuitarIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(hamGuitarIngredients) {
    hamGuitarIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            hamGuitarIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show chicken guitar ingredients
if(infoGuitar2) {
    infoGuitar2.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'guitar') {
                chickenGuitarIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(chickenGuitarIngredients) {
    chickenGuitarIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            chickenGuitarIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show loin guitar ingredients
if(infoGuitar3) {
    infoGuitar3.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'guitar') {
                loinGuitarIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(loinGuitarIngredients) {
    loinGuitarIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            loinGuitarIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show tortilla guitar ingredients
if(infoGuitar4) {
    infoGuitar4.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'guitar') {
                tortillaGuitarIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(tortillaGuitarIngredients) {
    tortillaGuitarIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            tortillaGuitarIngredients.classList.remove('lightbox--show')
        }
    })
}
