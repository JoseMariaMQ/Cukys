//Show guitar ingredients
for(let button of buttons) {
    if(button.dataset.name !== undefined) {
        if (button.dataset.name === 'guitar') {
            switch (button.id) {
                case 'info-guitarr-0':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'ham-guitar-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-guitar-1':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'chicken-guitar-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-guitar-2':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'loin-guitar-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-guitar-3':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'tortilla-guitar-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
            }
        }
    }
}

// Hide guitar ingredients
for(let lightbox of lightboxShow) {
    switch (lightbox.id) {
        case 'ham-guitar-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'chicken-guitar-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'loin-guitar-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'tortilla-guitar-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
    }
}
