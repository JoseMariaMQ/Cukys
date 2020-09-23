//Show sandwich ingredients
for(let button of buttons) {
    if(button.dataset.name !== undefined) {
        if (button.dataset.name === 'sandwich') {
            switch (button.id) {
                case 'info-sandwich-0':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'mix-sandwich-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-sandwich-1':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'chicken-sandwich-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-sandwich-2':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'inkwell-sandwich-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-sandwich-3':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'vegetable-sandwich-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-sandwich-4':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'special-sandwich-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-sandwich-5':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'tortilla-sandwich-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
            }
        }
    }
}

// Hide sandwich ingredients
for(let lightbox of lightboxShow) {
    switch (lightbox.id) {
        case 'mix-sandwich-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'chicken-sandwich-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'inkwell-sandwich-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'vegetable-sandwich-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'special-sandwich-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'tortilla-sandwich-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
    }
}
