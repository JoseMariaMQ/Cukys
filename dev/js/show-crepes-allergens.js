const infoCrepe1 = document.getElementById('info-crepe-0')
const nutellaCrepeAllergens = document.getElementById('nutella-crepe-allergens')

const infoCrepe2 = document.getElementById('info-crepe-1')
const iceCreamCrepeAllergens = document.getElementById('icecream-crepe-allergens')

const infoCrepe3 = document.getElementById('info-crepe-2')
const chocolateCrepeAllergens = document.getElementById('chocolate-crepe-allergens')

const infoCrepe4 = document.getElementById('info-crepe-3')
const pineappleCrepeAllergens = document.getElementById('pineapple-crepe-allergens')

const infoCrepe5 = document.getElementById('info-crepe-4')
const peachCrepeAllergens = document.getElementById('peach-crepe-allergens')

const infoCrepe6 = document.getElementById('info-crepe-5')
const yorkCrepeAllergens = document.getElementById('york-crepe-allergens')

//Show nutella crepe allergens
if(infoCrepe1) {
    infoCrepe1.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'crepe') {
                nutellaCrepeAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(nutellaCrepeAllergens) {
    nutellaCrepeAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            nutellaCrepeAllergens.classList.remove('lightbox--show')
        }
    })
}

//Show ice cream crepe allergens
if(infoCrepe2) {
    infoCrepe2.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'crepe') {
                iceCreamCrepeAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(iceCreamCrepeAllergens) {
    iceCreamCrepeAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            iceCreamCrepeAllergens.classList.remove('lightbox--show')
        }
    })
}

//Show chocolate crepe allergens
if(infoCrepe3) {
    infoCrepe3.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'crepe') {
                chocolateCrepeAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(chocolateCrepeAllergens) {
    chocolateCrepeAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            chocolateCrepeAllergens.classList.remove('lightbox--show')
        }
    })
}

//Show pineapple crepe allergens
if(infoCrepe4) {
    infoCrepe4.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'crepe') {
                pineappleCrepeAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(pineappleCrepeAllergens) {
    pineappleCrepeAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            pineappleCrepeAllergens.classList.remove('lightbox--show')
        }
    })
}

//Show peach crepe allergens
if(infoCrepe5) {
    infoCrepe5.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'crepe') {
                peachCrepeAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(peachCrepeAllergens) {
    peachCrepeAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            peachCrepeAllergens.classList.remove('lightbox--show')
        }
    })
}

//Show york crepe allergens
if(infoCrepe6) {
    infoCrepe6.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'crepe') {
                yorkCrepeAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(yorkCrepeAllergens) {
    yorkCrepeAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            yorkCrepeAllergens.classList.remove('lightbox--show')
        }
    })
}
