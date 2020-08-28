const infoStarter1 = document.getElementById('info-starter-0')
const nuggetStarterAllergens = document.getElementById('nugget-starter-allergens')

const infoStarter2 = document.getElementById('info-starter-1')
const croquetteStarterAllergens = document.getElementById('croquette-starter-allergens')

const infoStarter3 = document.getElementById('info-starter-2')
const dumplingStarterAllergens = document.getElementById('dumpling-starter-allergens')

const infoStarter4 = document.getElementById('info-starter-3')
const sanjacoboStarterAllergens = document.getElementById('sanjacobo-starter-allergens')

const infoStarter5 = document.getElementById('info-starter-4')
const twisterStarterAllergens = document.getElementById('twister-starter-allergens')

const infoStarter6 = document.getElementById('info-starter-5')
const fingersStarterAllergens = document.getElementById('fingers-starter-allergens')

const infoStarter7 = document.getElementById('info-starter-6')
const torpedoStarterAllergens = document.getElementById('torpedo-starter-allergens')

const infoStarter8 = document.getElementById('info-starter-7')
const chickenDelicaciesStarterAllergens = document.getElementById('chickendelicacies-starter-allergens')

//Show nugget starter allergens
if(infoStarter1) {
    infoStarter1.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'starter') {
                nuggetStarterAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(nuggetStarterAllergens) {
    nuggetStarterAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            nuggetStarterAllergens.classList.remove('lightbox--show')
        }
    })
}

//Show croquette starter allergens
if(infoStarter2) {
    infoStarter2.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'starter') {
                croquetteStarterAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(croquetteStarterAllergens) {
    croquetteStarterAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            croquetteStarterAllergens.classList.remove('lightbox--show')
        }
    })
}

//Show dumpling starter allergens
if(infoStarter3) {
    infoStarter3.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'starter') {
                dumplingStarterAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(dumplingStarterAllergens) {
    dumplingStarterAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            dumplingStarterAllergens.classList.remove('lightbox--show')
        }
    })
}

//Show san jacobo starter allergens
if(infoStarter4) {
    infoStarter4.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'starter') {
                sanjacoboStarterAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(sanjacoboStarterAllergens) {
    sanjacoboStarterAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            sanjacoboStarterAllergens.classList.remove('lightbox--show')
        }
    })
}

//Show twister starter allergens
if(infoStarter5) {
    infoStarter5.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'starter') {
                twisterStarterAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(twisterStarterAllergens) {
    twisterStarterAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            twisterStarterAllergens.classList.remove('lightbox--show')
        }
    })
}

//Show fingers starter allergens
if(infoStarter6) {
    infoStarter6.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'starter') {
                fingersStarterAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(fingersStarterAllergens) {
    fingersStarterAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            fingersStarterAllergens.classList.remove('lightbox--show')
        }
    })
}

//Show torpedo starter allergens
if(infoStarter7) {
    infoStarter7.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'starter') {
                torpedoStarterAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(torpedoStarterAllergens) {
    torpedoStarterAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            torpedoStarterAllergens.classList.remove('lightbox--show')
        }
    })
}

//Show torpedo starter allergens
if(infoStarter8) {
    infoStarter8.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'starter') {
                chickenDelicaciesStarterAllergens.classList.add('lightbox--show')
            }
        }
    })
}

if(chickenDelicaciesStarterAllergens) {
    chickenDelicaciesStarterAllergens.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            chickenDelicaciesStarterAllergens.classList.remove('lightbox--show')
        }
    })
}
