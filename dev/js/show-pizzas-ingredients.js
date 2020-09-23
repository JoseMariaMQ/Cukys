//Show pizza ingredients
for(let button of buttons) {
    if(button.dataset.name !== undefined) {
        if (button.dataset.name === 'pizza') {
            switch (button.id) {
                case 'info-pizza-0':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'margarita-pizza-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-pizza-1':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'campera-pizza-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-pizza-2':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'mince-pizza-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-pizza-3':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'crab-pizza-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-pizza-4':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'bacon-pizza-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-pizza-5':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'kebab-pizza-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-pizza-6':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'frankfurt-pizza-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-pizza-7':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'fourcheese-pizza-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-pizza-8':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'baconchicken-pizza-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-pizza-9':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'mini-pizza-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
            }
        }
    }
}

// Hide pizza ingredients
for(let lightbox of lightboxShow) {
    switch (lightbox.id) {
        case 'margarita-pizza-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'campera-pizza-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'mince-pizza-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'crab-pizza-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'bacon-pizza-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'kebab-pizza-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'frankfurt-pizza-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'fourcheese-pizza-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'baconchicken-pizza-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'mini-pizza-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
    }
}
