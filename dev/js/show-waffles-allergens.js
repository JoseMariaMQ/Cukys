const infoWaffle1 = document.getElementById('info-waffle-0')
const nutellaWaffleAllergens = document.getElementById('nutella-waffle-allergens')

const infoWaffle2 = document.getElementById('info-waffle-1')
const iceCreamWaffleAllergens = document.getElementById('icecream-waffle-allergens')

//Show nutella waffle allergens
if(infoWaffle1) {
    infoWaffle1.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'waffle') {
                nutellaWaffleAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(nutellaWaffleAllergens) {
    nutellaWaffleAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            nutellaWaffleAllergens.classList.remove('lightbox--show')
        }
    })
}

//Show ice cream waffle allergens
if(infoWaffle2) {
    infoWaffle2.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'waffle') {
                iceCreamWaffleAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(iceCreamWaffleAllergens) {
    iceCreamWaffleAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            iceCreamWaffleAllergens.classList.remove('lightbox--show')
        }
    })
}
