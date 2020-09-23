//Show kebab ingredients
for(let button of buttons) {
    if(button.dataset.name !== undefined) {
        if (button.dataset.name === 'kebab') {
            switch (button.id) {
                case 'info-kebab-0':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'chicken-kebab-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
            }
        }
    }
}

// Hide kebab ingredients
for(let lightbox of lightboxShow) {
    switch (lightbox.id) {
        case 'chicken-kebab-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
    }
}
