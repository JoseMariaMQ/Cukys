const infoIceCream1 = document.getElementById('info-icecream-0')
const smallIceCreamAllergens = document.getElementById('small-icecream-allergens')

const infoIceCream2 = document.getElementById('info-icecream-1')
const bigIceCreamAllergens = document.getElementById('big-icecream-allergens')

const infoIceCream3 = document.getElementById('info-icecream-2')
const twoBallsCupIceCreamAllergens = document.getElementById('twoballscup-icecream-allergens')

const infoIceCream4 = document.getElementById('info-icecream-3')
const threeBallsCupIceCreamAllergens = document.getElementById('threeballscup-icecream-allergens')

const infoIceCream5 = document.getElementById('info-icecream-4')
const blackAndWhiteIceCreamAllergens = document.getElementById('blackandwhite-icecream-allergens')

const infoIceCream7 = document.getElementById('info-icecream-6')
const smoothieIceCreamAllergens = document.getElementById('smoothie-icecream-allergens')

//Show small ice cream allergens
if(infoIceCream1) {
    infoIceCream1.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'icecream') {
                smallIceCreamAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(smallIceCreamAllergens) {
    smallIceCreamAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            smallIceCreamAllergens.classList.remove('lightbox--show')
        }
    })
}

//Show big ice cream allergens
if(infoIceCream2) {
    infoIceCream2.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'icecream') {
                bigIceCreamAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(bigIceCreamAllergens) {
    bigIceCreamAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            bigIceCreamAllergens.classList.remove('lightbox--show')
        }
    })
}

//Show two balls cup ice cream allergens
if(infoIceCream3) {
    infoIceCream3.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'icecream') {
                twoBallsCupIceCreamAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(twoBallsCupIceCreamAllergens) {
    twoBallsCupIceCreamAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            twoBallsCupIceCreamAllergens.classList.remove('lightbox--show')
        }
    })
}

//Show three balls cup ice cream allergens
if(infoIceCream4) {
    infoIceCream4.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'icecream') {
                threeBallsCupIceCreamAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(threeBallsCupIceCreamAllergens) {
    threeBallsCupIceCreamAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            threeBallsCupIceCreamAllergens.classList.remove('lightbox--show')
        }
    })
}

//Show balck and white ice cream allergens
if(infoIceCream5) {
    infoIceCream5.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'icecream') {
                blackAndWhiteIceCreamAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(blackAndWhiteIceCreamAllergens) {
    blackAndWhiteIceCreamAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            blackAndWhiteIceCreamAllergens.classList.remove('lightbox--show')
        }
    })
}

//Show balck and white ice cream allergens
if(infoIceCream7) {
    infoIceCream7.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'icecream') {
                smoothieIceCreamAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(smoothieIceCreamAllergens) {
    smoothieIceCreamAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            smoothieIceCreamAllergens.classList.remove('lightbox--show')
        }
    })
}
