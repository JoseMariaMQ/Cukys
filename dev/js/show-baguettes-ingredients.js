//Baguette
const infoBaguette1 = document.getElementById('info-baguette-0')
const vegetableBaguetteIngredients = document.getElementById('vegetable-baguette-ingredients')

const infoBaguette2 = document.getElementById('info-baguette-1')
const tunaBaguetteIngredients = document.getElementById('tuna-baguette-ingredients')

const infoBaguette3 = document.getElementById('info-baguette-2')
const hamBaguetteIngredients = document.getElementById('ham-baguette-ingredients')

const infoBaguette4 = document.getElementById('info-baguette-3')
const chickenBaguetteIngredients = document.getElementById('chicken-baguette-ingredients')

const infoBaguette5 = document.getElementById('info-baguette-4')
const baconBaguetteIngredients = document.getElementById('bacon-baguette-ingredients')

const infoBaguette6 = document.getElementById('info-baguette-5')
const tortillaBaguetteIngredients = document.getElementById('tortilla-baguette-ingredients')

const infoBaguette7 = document.getElementById('info-baguette-6')
const hamTortillaBaguetteIngredients = document.getElementById('hamtortilla-baguette-ingredients')

const infoBaguette8 = document.getElementById('info-baguette-7')
const maigretteBaguetteIngredients = document.getElementById('maigrette-baguette-ingredients')

const infoBaguette9 = document.getElementById('info-baguette-8')
const loinBaguetteIngredients = document.getElementById('loin-baguette-ingredients')

const infoBaguette10 = document.getElementById('info-baguette-9')
const freshLoinBaguetteIngredients = document.getElementById('freshloin-baguette-ingredients')

const infoBaguette11 = document.getElementById('info-baguette-10')
const squidBaguetteIngredients = document.getElementById('squid-baguette-ingredients')

const infoBaguette12 = document.getElementById('info-baguette-11')
const sausagesBaguetteIngredients = document.getElementById('sausages-baguette-ingredients')

const infoBaguette13 = document.getElementById('info-baguette-12')
const specialBaguetteIngredients = document.getElementById('special-baguette-ingredients')

//Show vegetable baguette ingredients
if(infoBaguette1) {
    infoBaguette1.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                vegetableBaguetteIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(vegetableBaguetteIngredients) {
    vegetableBaguetteIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            vegetableBaguetteIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show tune baguette ingredients
if(infoBaguette2) {
    infoBaguette2.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                tunaBaguetteIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(tunaBaguetteIngredients) {
    tunaBaguetteIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            tunaBaguetteIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show ham baguette ingredients
if(infoBaguette3) {
    infoBaguette3.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                hamBaguetteIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(hamBaguetteIngredients) {
    hamBaguetteIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            hamBaguetteIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show chicken baguette ingredients
if(infoBaguette4) {
    infoBaguette4.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                chickenBaguetteIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(chickenBaguetteIngredients) {
    chickenBaguetteIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            chickenBaguetteIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show bacon baguette ingredients
if(infoBaguette5) {
    infoBaguette5.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                baconBaguetteIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(baconBaguetteIngredients) {
    baconBaguetteIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            baconBaguetteIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show tortilla baguette ingredients
if(infoBaguette6) {
    infoBaguette6.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                tortillaBaguetteIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(tortillaBaguetteIngredients) {
    tortillaBaguetteIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            tortillaBaguetteIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show ham tortilla baguette ingredients
if(infoBaguette7) {
    infoBaguette7.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                hamTortillaBaguetteIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(hamTortillaBaguetteIngredients) {
    hamTortillaBaguetteIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            hamTortillaBaguetteIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show maigrette baguette ingredients
if(infoBaguette8) {
    infoBaguette8.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                maigretteBaguetteIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(maigretteBaguetteIngredients) {
    maigretteBaguetteIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            maigretteBaguetteIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show loin baguette ingredients
if(infoBaguette9) {
    infoBaguette9.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                loinBaguetteIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(loinBaguetteIngredients) {
    loinBaguetteIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            loinBaguetteIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show fresh loin baguette ingredients
if(infoBaguette10) {
    infoBaguette10.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                freshLoinBaguetteIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(freshLoinBaguetteIngredients) {
    freshLoinBaguetteIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            freshLoinBaguetteIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show squid baguette ingredients
if(infoBaguette11) {
    infoBaguette11.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                squidBaguetteIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(squidBaguetteIngredients) {
    squidBaguetteIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            squidBaguetteIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show sausages baguette ingredients
if(infoBaguette12) {
    infoBaguette12.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                sausagesBaguetteIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(sausagesBaguetteIngredients) {
    sausagesBaguetteIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            sausagesBaguetteIngredients.classList.remove('lightbox--show')
        }
    })
}

//Show special baguette ingredients
if(infoBaguette13) {
    infoBaguette13.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'baguette') {
                specialBaguetteIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(specialBaguetteIngredients) {
    specialBaguetteIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            specialBaguetteIngredients.classList.remove('lightbox--show')
        }
    })
}
