const menuKebab1 = document.getElementById('info-kebab-0')
const kebabIngredients = document.getElementById('chicken-kebab-ingredients')

//Show chicken kebab menu
if(menuKebab1) {
    menuKebab1.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'kebab') {
                kebabIngredients.classList.add('lightbox--show')
            }
        }
    })
}

if(kebabIngredients) {
    kebabIngredients.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            kebabIngredients.classList.remove('lightbox--show')
        }
    })
}
