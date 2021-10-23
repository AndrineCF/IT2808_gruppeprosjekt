;(function() {
    window.ImageSlider = function({ folder = '', images = [] } = {}) {
        const image = document.querySelector('.gallery-images > img')
        const [previous, next] = Array.from(document.querySelectorAll('.gallery-toggles > button'))
    
        let currentImageIndex = 0

        function setSrcOnImage(index) {
            currentImageIndex = index

            previous.style.visibility = index === 0 ? 'hidden' : ''
            next.style.visibility = index === images.length - 1 ? 'hidden' : ''

            image.setAttribute('src', `/images/${folder}/${images[index]}`)
        }

        setSrcOnImage(currentImageIndex)
    
        next.onclick = function() {
            setSrcOnImage(Math.min(images.length - 1, currentImageIndex + 1))
        }
        
        previous.onclick = function() {
            setSrcOnImage(Math.max(0, currentImageIndex - 1))
        }

        
        image.onclick = function() {
            if (document.querySelector('.gallery-modal')) {
                return 
            }

            const modal = document.createElement('div')
            const button = document.createElement('button')
            const clonedImage = image.cloneNode(true)

            const closeModal = function(e) {
                const element = document.querySelector('.gallery-modal')

                if (!element) {
                    return    
                }
    
                let target = e.target

                if (target === image) {
                    return
                }
    
                while (target && target !== document.body) {
                    if (target === clonedImage) {
                        return
                    }
                    
                    target = target.parentElement
                }
                
                document.body.removeChild(element)
            }
                
            button.onclick = function closeModal() {
                document.body.removeChild(modal)
                window.removeEventListener('click', closeModal)
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