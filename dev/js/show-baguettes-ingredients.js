const buttons = document.querySelectorAll('.item2')
const lightboxShow = document.querySelectorAll('.lightbox')

//Show baguette ingredients
for(let button of buttons) {
    if(button.dataset.name !== undefined) {
        if (button.dataset.name === 'baguette') {
            switch (button.id) {
                case 'info-baguette-0':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'vegetable-baguette-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-baguette-1':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'tuna-baguette-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-baguette-2':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'ham-baguette-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-baguette-3':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'chicken-baguette-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-baguette-4':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'breadedchicken-baguette-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-baguette-5':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'bacon-baguette-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-baguette-6':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'tortilla-baguette-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-baguette-7':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'hamtortilla-baguette-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-baguette-8':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'maigrette-baguette-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-baguette-9':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'loin-baguette-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-baguette-10':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'freshloin-baguette-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-baguette-11':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'squid-baguette-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-baguette-12':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'sausages-baguette-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
                case 'info-baguette-13':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'special-baguette-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
            }
        }
    }
}

// Hide baguette ingredients
for(let lightbox of lightboxShow) {
    switch (lightbox.id) {
        case 'vegetable-baguette-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'tuna-baguette-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'ham-baguette-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'chicken-baguette-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'breadedchicken-baguette-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'bacon-baguette-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'tortilla-baguette-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'hamtortilla-baguette-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'maigrette-baguette-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'loin-baguette-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'freshloin-baguette-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'squid-baguette-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'sausages-baguette-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
        case 'special-baguette-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
    }
}
