/**
 * Global funksjons wrap, IIFE ( imediate invoked function expression )
 * Se: @url https://developer.mozilla.org/en-US/docs/Glossary/IIFE
 * 
 */
;(function() {
     /**
     * Global metode på vinduet for å lage ImageSlider
     */
    window.ImageSlider = function({ folder = '', images = [], pathPrefix = '', disableGallery = false, autoplay = false, time = 5000 } = {}) {
        const image = document.querySelector('.gallery-images > img') // finn bildet
        const [previous, next] = Array.from(document.querySelectorAll('.gallery-toggles > button')) // finn toggles

        let currentImageIndex = 0 // hvilket bilde er vi på av variablen bilder
        let imageRef = null // referanse til bildet når modal er aktivert
        let buttonRef = null // referanse til button når modal er aktivert

        // hjelpe funksjon for å oppdatere bilde vi er på
        function setSrcOnImage(index) {
            currentImageIndex = index

            previous.style.visibility = index === 0 ? 'hidden' : '' // css regler for å vise / skjule buttton hvis relevant
            next.style.visibility = index === images.length - 1 ? 'hidden' : '' // css regler for å vise / skjule buttton hvis relevant

            image.setAttribute('src', `${pathPrefix ? pathPrefix + '/' : ''}img/${folder}/${images[index]}`) // oppdater til rett bilde
            
            if (imageRef) { // Oppdater modal sitt bilde hvis åpen
                imageRef.setAttribute('src', `${pathPrefix}/img/${folder}/${images[index]}`)
            }
        }

        if (autoplay) {
            currentImageIndex = currentImageIndex + 1 === images.length ? 0 : currentImageIndex + 1
            image.setAttribute('src', `${pathPrefix ? pathPrefix + '/' : ''}img/${folder}/${images[currentImageIndex]}`) // oppdater til rett bilde

            setInterval(() => {
                currentImageIndex = currentImageIndex + 1 === images.length ? 0 : currentImageIndex + 1
                image.setAttribute('src', `${pathPrefix ? pathPrefix + '/' : ''}img/${folder}/${images[currentImageIndex]}`) // oppdater til rett bilde
            }, time)

            return
        }

        setSrcOnImage(currentImageIndex) // Initielt kall for å sette bilde
        
        next.onclick = function(e) {
            e.stopPropagation() // Vi vil ikke at eventet skal boble oppover og påvirke noe annet
            setSrcOnImage(Math.min(images.length - 1, currentImageIndex + 1)) // Bruker matte for å trygge at vi ikke går utenfor antall bilder i lista
        }
        
        previous.onclick = function(e) {
            e.stopPropagation()
            setSrcOnImage(Math.max(0, currentImageIndex - 1)) // Bruker matte for å trygge at vi ikke går utenfor antall bilder i lista
        }

        window.addEventListener('keydown', (e) => {
            if (disableGallery) {
                return
            }
            // beskytter for at key er en faktisk string for metodene under
            if (!(typeof e.key === 'string')) {
                return 
            }

            if (e.key.toLowerCase() === 'arrowleft') {
                e.preventDefault() // hindrer at default skjer
                previous.click() // kaller klikk metode på piler
            }

            if (e.key.toLowerCase() === 'arrowright') {
                e.preventDefault()
                next.click() // kaller klikk metode på piler
            }

            if (e.key.toLowerCase() === 'escape' && imageRef !== null) {
                e.preventDefault()
                buttonRef && buttonRef.click() // kaller klikk metode ved esc hvis modal er åpen er buttonRef satt
            }
        })

        // Håndter klikk på bildet for å åpne modal
        image.onclick = function() {
            if (disableGallery) {
                return
            }
            // Beskyttelse for å sjekke at faktisk modal finnes
            if (document.querySelector('.gallery-modal')) {
                return 
            }

            // Lag noder og klon bildet sin node dypt
            const modal = document.createElement('div')
            const button = document.createElement('button')
            const clonedImage = image.cloneNode(true)

            // oppdater referanser til elementer
            imageRef = clonedImage
            buttonRef = button

            // Metode for å lukke modal basert på klikk
            const closeModal = function(e) {
                if (e.target === image) {
                    return
                }

                window.removeEventListener('click', closeModal)

                // Fjern referanse
                imageRef = null
                buttonRef = null
                document.body.removeChild(modal)
            }
                
            // Metode for ¨å lukke modal for knapp
            button.onclick = closeModal

            // Lytter etter klikk for å lukke modal
            window.addEventListener('click', closeModal)

            // Tilordner attributter
            button.className = 'gallery-modal-close'
            button.innerText = 'Lukk'

            modal.className = 'gallery-modal'

            // Setter inn modal i document.body
            document.body.appendChild(modal)

            // Setter inn barn av modal
            modal.append(button, clonedImage)
        }
    }
})();