//Show ice cream flavors
for(let button of buttons) {
    if(button.dataset.name !== undefined) {
        if (button.dataset.name === 'flavor') {
            switch (button.id) {
                case 'info-icecream':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'ice-cream-flavors') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
            }
        }
    }
}

// Hide ice cream flavors
for(let lightbox of lightboxShow) {
    switch (lightbox.id) {
        case 'ice-cream-flavors':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
    }
}
