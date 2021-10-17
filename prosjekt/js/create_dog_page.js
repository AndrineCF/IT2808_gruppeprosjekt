;(function() {
    window.createDog = function({
        title = '',
        text = ''
    } = {}) {
        const dogPage = document.querySelector('#hund')

        if (dogPage) {
            dogPage.innerHTML = `
                <header class="gallery-header">
                    <h1>${title}</h1>
                </header>
                <article>
                    <div class="gallery-images">
                        <img alt="Image of ${title}" />
                        <div class="gallery-toggles">
                            <button>Forrige</button>
                            <button>Neste</button>
                        </div>
                    </div>
                    <div class="gallery-text">
                    ${text.split(/^\s|\n+$/gmi).filter(Boolean).map(paragraph => {
                        return `<p>${paragraph.trim()}</p>`
                    }).join('')}
                    </div>
                </article>
            `
        }
    }
   
})();