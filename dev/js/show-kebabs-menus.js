const menuKebab1 = document.getElementById('menu-kebab-0')
const chickenKebabMenu = document.getElementById('chicken-kebab-menu')

//Show chicken kebab menu
if(menuKebab1) {
    menuKebab1.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'kebab') {
                chickenKebabMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(chickenKebabMenu) {
    chickenKebabMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            chickenKebabMenu.classList.remove('lightbox--show')
        }
    })
}
