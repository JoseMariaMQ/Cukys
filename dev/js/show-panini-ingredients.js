//Show panini ingredients
for(let button of buttons) {
    if(button.dataset.name !== undefined) {
        if (button.dataset.name === 'panini') {
            switch (button.id) {
                case 'info-panini-0':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'york-panini-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-panini-1':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'ham-panini-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-panini-2':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'bacon-panini-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-panini-3':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'crab-panini-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-panini-4':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'bbq-panini-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
            }
        }
    }
}

// Hide panini ingredients
for(let lightbox of lightboxShow) {
    switch (lightbox.id) {
        case 'york-panini-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'ham-panini-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'bacon-panini-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'crab-panini-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'bbq-panini-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
    }
}
