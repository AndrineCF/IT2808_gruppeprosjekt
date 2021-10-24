;(function() {
    window.ImageSlider = function({ folder = '', images = [], pathPrefix = '' } = {}) {
        const image = document.querySelector('.gallery-images > img')
        const [previous, next] = Array.from(document.querySelectorAll('.gallery-toggles > button'))
    
        let currentImageIndex = 0
        let imageRef = null
        let buttonRef = null

        function setSrcOnImage(index) {
            currentImageIndex = index

            previous.style.visibility = index === 0 ? 'hidden' : ''
            next.style.visibility = index === images.length - 1 ? 'hidden' : ''

            image.setAttribute('src', `${pathPrefix}/images/${folder}/${images[index]}`)
            
            if (imageRef) {
                imageRef.setAttribute('src', `${pathPrefix}/images/${folder}/${images[index]}`)
            }
        }

        setSrcOnImage(currentImageIndex)
    
        next.onclick = function(e) {
            e.stopPropagation()
            setSrcOnImage(Math.min(images.length - 1, currentImageIndex + 1))
        }
        
        previous.onclick = function(e) {
            e.stopPropagation()
            setSrcOnImage(Math.max(0, currentImageIndex - 1))
        }

        window.addEventListener('keydown', (e) => {
            console.log(e.key)
            if (e.key.toLowerCase() === 'arrowleft') {
                e.preventDefault()
                previous.click()
            }

            if (e.key.toLowerCase() === 'arrowright') {
                e.preventDefault()
                next.click()    
            }

            if (e.key.toLowerCase() === 'escape' && imageRef !== null) {
                e.preventDefault()
                buttonRef && buttonRef.click()
            }
        })

        
        image.onclick = function() {
            if (document.querySelector('.gallery-modal')) {
                return 
            }

            const modal = document.createElement('div')
            const button = document.createElement('button')
            const clonedImage = image.cloneNode(true)

            imageRef = clonedImage
            buttonRef = button

            const closeModal = function(e) {
                const element = document.querySelector('.gallery-modal')

                if (!element) {
                    return    
                }

                if (e.target === image) {
                    return
                }

                imageRef = null
                buttonRef = null
                document.body.removeChild(element)
            }
                
            button.onclick = function closeModal() {
                document.body.removeChild(modal)
                window.removeEventListener('click', closeModal)
                imageRef = null
                buttonRef = null
            }

            window.addEventListener('click', closeModal)

            button.className = 'gallery-modal-close'
            button.innerText = 'Lukk'

            modal.appendChild(button)
            modal.className = 'gallery-modal'

            document.body.appendChild(modal)

            modal.appendChild(button)
            modal.appendChild(clonedImage)
        }
    }
})();