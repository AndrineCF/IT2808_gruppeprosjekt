/**
 * Global funksjons wrap, IIFE ( imediate invoked function expression )
 * Se: @url https://developer.mozilla.org/en-US/docs/Glossary/IIFE
 * 
 */
;(function() {
    /**
     * Global metode på vinduet for å lage hunder
     */
    window.createDog = function({
        title = '',
        text = ''
    } = {}) { // default argumenter og destrukturering
        // finn en forventet id på siden
        const dogPage = document.querySelector('#hund')

        // Oppdater tittel på siden til å gjenspeile tittelen som sendes inn i funksjonen
        document.title = title

        /* Hvis vi finner noden for hund */
        if (dogPage) {
            /* Sett all html til noden for hund til følgende string */
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
                    ${
                        /**
                         * 1. Ta stringen, del opp på dobbel på "tom linje" ( et ca. ), 2+ spaces i starten av en linje eller en ny linje symbol
                         * 2. Filtrer vekk alle tomme strings ( kun ny linje for eks )
                         * 3. Gå over hver linje og lag et paragraf
                         * 4. Kombiner alle paragrafer i listen til en string
                         */
                        text
                            .split(/^\s|\n+$/gmi)
                            .filter(Boolean)
                            .map(paragraph => `<p>${paragraph.trim()}</p>`)
                            .join('')
                        }
                    </div>
                </article>
            `
        }
    }
})();