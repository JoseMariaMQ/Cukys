const infoHotDog1 = document.getElementById('info-hotdog-0')
const hotDogIngredients = document.getElementById('hot-dog-ingredients')

//Show hot dog ingredients
if(infoHotDog1) {
    infoHotDog1.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'hotdog') {
                hotDogIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(hotDogIngredients) {
    hotDogIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            hotDogIngredients.classList.remove('lightbox--show')
        }
    })
}
