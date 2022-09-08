//Show starter info
for(let button of buttons) {
    if(button.dataset.name !== undefined) {
        if (button.dataset.name === 'starter') {
            switch (button.id) {
                case 'info-starter-0':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'nugget-starter-allergens') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-starter-1':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'croquette-starter-allergens') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-starter-2':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'dumpling-starter-allergens') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-starter-3':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'sanjacobo-starter-allergens') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-starter-4':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'twister-starter-allergens') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-starter-5':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'fingers-starter-allergens') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-starter-6':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'torpedo-starter-allergens') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-starter-7':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'chickendelicacies-starter-allergens') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-starter-8':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'flamenquins-starter-allergens') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-starter-9':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'popcornchicken-starter-allergens') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-starter-10':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'chickenstrips-starter-allergens') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-starter-11':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'prawnsinbatter-starter-allergens') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
            }
        }
    }
}

// Hide starter info
for(let lightbox of lightboxShow) {
    switch (lightbox.id) {
        case 'nugget-starter-allergens':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'croquette-starter-allergens':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'dumpling-starter-allergens':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'sanjacobo-starter-allergens':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'twister-starter-allergens':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'fingers-starter-allergens':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'torpedo-starter-allergens':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'chickendelicacies-starter-allergens':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'flamenquins-starter-allergens':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'popcornchicken-starter-allergens':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'chickenstrips-starter-allergens':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'prawnsinbatter-starter-allergens':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
    }
}
