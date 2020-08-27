const menuHotDog1 = document.getElementById('menu-hotdog-0')
const hotDogMenu = document.getElementById('hotdog-hotdog-menu')

//Show hot dog menu
if(menuHotDog1) {
    menuHotDog1.addEventListener('click', (e) => {
        if(e.target.dataset.name !== undefined) {
            if(e.target.dataset.name === 'hotdog') {
                hotDogMenu.classList.add('lightbox--show')
            }
        }
    })
}

if(hotDogMenu) {
    hotDogMenu.addEventListener('click', (e) => {
        if(e.target.classList.contains('lightbox')) {
            hotDogMenu.classList.remove('lightbox--show')
        }
    })
}
