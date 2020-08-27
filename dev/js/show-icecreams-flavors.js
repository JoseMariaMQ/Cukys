//Ice cream flavors
const infoIceCream1 = document.getElementById('info-icecream')
const iceCreamFlavors = document.getElementById('ice-cream-flavors')

//Show ice cream flavors
if(infoIceCream1) {
    infoIceCream1.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'flavor') {
                iceCreamFlavors.classList.add('lightbox--show')
            }
        }
    })
}

if(iceCreamFlavors) {
    iceCreamFlavors.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            iceCreamFlavors.classList.remove('lightbox--show')
        }
    })
}
