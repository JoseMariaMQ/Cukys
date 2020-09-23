//Show hotdog ingredients
for(let button of buttons) {
    if(button.dataset.name !== undefined) {
        if (button.dataset.name === 'hotdog') {
            switch (button.id) {
                case 'info-hotdog-0':
                    button.addEventListener('click', () => {
                        for(let lightbox of lightboxShow) {
                            if(lightbox.id === 'hot-dog-ingredients') lightbox.classList.add('lightbox--show')
                        }
                    })
                    break
            }
        }
    }
}

// Hide hotdog ingredients
for(let lightbox of lightboxShow) {
    switch (lightbox.id) {
        case 'hot-dog-ingredients':
            lightbox.addEventListener('click', () => {
                lightbox.classList.remove('lightbox--show')
            })
            break
    }
}
