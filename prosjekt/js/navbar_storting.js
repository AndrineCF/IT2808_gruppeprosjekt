// Get the which animel site it is
var titleAnimal = document.title.split(" ")[0].toLowerCase()

// Getting the content body
var contentBodyEl = document.getElementById("content-body")

// Creating elements
var sectionEl = document.createElement("section")
var navbarEl = document.createElement("div")

// Set styling/id to the navbar
navbarEl.id = "navbar-storting"    

// Crating json data for katt and dog in select meny
var jsonData = {
    "selectMeny": {
        "hund": {
            "kjonn" : ["Hun", "Han", "begge"],
            "alder" : ["1-5","6-10","11-13", "alle"]
        },

        "katt": {
            "kjonn" : ["Hun", "Han", "begge"],
            "alder" : ["1-5","6-10","11-15","16-20", "alle"]
        }
    },

    "button": {
        "allergivennlig": "Allergivennlig",
        "barnevennlig": "Barnevennlig"
    }
}


// Creaing the select meny
function createSelectMeny(navbar, animal){

    // goes through kjonn and alder
    for(meny in animal) {

        // creating label
        let labelEl = document.createElement("label")
        labelEl.setAttribute("for", meny)
    
        // create select meny
        let selectEl = document.createElement("select")
        selectEl.setAttribute("name", meny)

        // setting the id to select element
        selectEl.id = meny
    
        // creating the first element in select meny
        let optionEl = document.createElement("option")

        // setting as kjonn or alder show first
        optionEl.disabled = true
        optionEl.selected = true
        optionEl.hidden = true
        optionEl.value = ""
        optionEl.innerText = meny

        // add element to label and select element
        labelEl.appendChild(selectEl)
        selectEl.appendChild(optionEl)

        // add elemetens in the select meny
        for(i in animal[meny]) {
            console.log(i)
            let optionEl = document.createElement("option")
            optionEl.value = animal[meny][i]
            optionEl.innerText = animal[meny][i]

            selectEl.appendChild(optionEl)
        }

        // add label with select meny to the navbar
        navbar.appendChild(labelEl)
    }

}

function creatingButtons(navbar, buttons) {
    for(button in buttons) {
        // creating label
        let labelEl = document.createElement("label")
        labelEl.setAttribute("for", button.toLowerCase())

        //creating button
        let buttonEl = document.createElement("button")
        buttonEl.setAttribute("name", button.toLowerCase())
        buttonEl.value = button.toLowerCase()
        buttonEl.innerText = button
        button.id = button.toLowerCase()
        buttonEl.classList.add("button-storting")

        // add it to navbar
        labelEl.appendChild(buttonEl)
        navbar.appendChild(labelEl)
    }

}


createSelectMeny(navbarEl, jsonData["selectMeny"][titleAnimal])
creatingButtons(navbarEl, jsonData["button"])

// add created elemente to new section in content body
sectionEl.append(navbarEl)
contentBodyEl.append(sectionEl)
