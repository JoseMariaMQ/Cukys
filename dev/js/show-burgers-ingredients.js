//Show burger ingredients
for(let button of buttons) {
    if(button.dataset.name !== undefined) {
        if (button.dataset.name === 'burger') {
            switch (button.id) {
                case 'info-burger-0':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'normal-burger-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-burger-1':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'crispycukys-burger-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-burger-2':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'egg-burger-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-burger-3':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'bacon-burger-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-burger-4':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'cheese-burger-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-burger-5':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'super-burger-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-burger-6':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'premiumbovine-burger-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-burger-7':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'burgerxl-burger-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
            }
        }
    }
}

// Hide burger ingredients
for(let lightbox of lightboxShow) {
    switch (lightbox.id) {
        case 'normal-burger-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'crispycukys-burger-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'egg-burger-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'bacon-burger-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'cheese-burger-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'super-burger-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'premiumbovine-burger-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'burgerxl-burger-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
    }
}
