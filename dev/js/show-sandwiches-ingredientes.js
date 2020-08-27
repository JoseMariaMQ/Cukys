//Sandwiches
const infoSandwich1 = document.getElementById('info-sandwich-0')
const mixSandwichIngredients = document.getElementById('mix-sandwich-ingredients')

const infoSandwich2 = document.getElementById('info-sandwich-1')
const chickenSandwichIngredients = document.getElementById('chicken-sandwich-ingredients')

const infoSandwich3 = document.getElementById('info-sandwich-2')
const inkwellSandwichIngredients = document.getElementById('inkwell-sandwich-ingredients')

const infoSandwich4 = document.getElementById('info-sandwich-3')
const vegetableSandwichIngredients = document.getElementById('vegetable-sandwich-ingredients')

const infoSandwich5 = document.getElementById('info-sandwich-4')
const specialSandwichIngredients = document.getElementById('special-sandwich-ingredients')

const infoSandwich6 = document.getElementById('info-sandwich-5')
const tortillaSandwichIngredients = document.getElementById('tortilla-sandwich-ingredients')

//Show mix sandwich ingredients
if(infoSandwich1) {
    infoSandwich1.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'sandwich') {
                mixSandwichIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(mixSandwichIngredients) {
    mixSandwichIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            mixSandwichIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show chicken sandwich ingredients
if(infoSandwich2) {
    infoSandwich2.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'sandwich') {
                chickenSandwichIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(chickenSandwichIngredients) {
    chickenSandwichIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            chickenSandwichIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show inkwell sandwich ingredients
if(infoSandwich3) {
    infoSandwich3.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'sandwich') {
                inkwellSandwichIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(inkwellSandwichIngredients) {
    inkwellSandwichIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            inkwellSandwichIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show vegetable sandwich ingredients
if(infoSandwich4) {
    infoSandwich4.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'sandwich') {
                vegetableSandwichIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(vegetableSandwichIngredients) {
    vegetableSandwichIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            vegetableSandwichIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show special sandwich ingredients
if(infoSandwich5) {
    infoSandwich5.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'sandwich') {
                specialSandwichIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(specialSandwichIngredients) {
    specialSandwichIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            specialSandwichIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show tortilla sandwich ingredients
if(infoSandwich6) {
    infoSandwich6.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'sandwich') {
                tortillaSandwichIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(tortillaSandwichIngredients) {
    tortillaSandwichIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            tortillaSandwichIngredients.classList.remove('lightbox--show')
        }
    })
}
