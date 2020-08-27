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

//Show chips starter allergens
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
