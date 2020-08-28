const infoChips1 = document.getElementById('info-chips-0')
const alioliChipsAllergens = document.getElementById('alioli-chips-allergens')

const infoChips2 = document.getElementById('info-chips-1')
const spicyChipsAllergens = document.getElementById('spicy-chips-allergens')

const infoChips3 = document.getElementById('info-chips-2')
const ranchChipsAllergens = document.getElementById('ranch-chips-allergens')

const infoChips4 = document.getElementById('info-chips-3')
const baconChipsAllergens = document.getElementById('bacon-chips-allergens')

const infoChips5 = document.getElementById('info-chips-4')
const sausagesChipsAllergens = document.getElementById('sausages-chips-allergens')

//Show ali-oli chips allergens
if(infoChips1) {
    infoChips1.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'chips') {
                alioliChipsAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(alioliChipsAllergens) {
    alioliChipsAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            alioliChipsAllergens.classList.remove('lightbox--show')
        }
    })
}

//Show spicy chips allergens
if(infoChips2) {
    infoChips2.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'chips') {
                spicyChipsAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(spicyChipsAllergens) {
    spicyChipsAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            spicyChipsAllergens.classList.remove('lightbox--show')
        }
    })
}

//Show ranch chips allergens
if(infoChips3) {
    infoChips3.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'chips') {
                ranchChipsAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(ranchChipsAllergens) {
    ranchChipsAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            ranchChipsAllergens.classList.remove('lightbox--show')
        }
    })
}

//Show bacon chedar chips allergens
if(infoChips4) {
    infoChips4.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'chips') {
                baconChipsAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(baconChipsAllergens) {
    baconChipsAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            baconChipsAllergens.classList.remove('lightbox--show')
        }
    })
}

//Show sausages chips allergens
if(infoChips5) {
    infoChips5.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'chips') {
                sausagesChipsAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(sausagesChipsAllergens) {
    sausagesChipsAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            sausagesChipsAllergens.classList.remove('lightbox--show')
        }
    })
}
