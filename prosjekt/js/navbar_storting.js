// Get the which animel site it is
let titleAnimal = document.title.split(" ")[0].toLowerCase()

// Getting the content body
const contentBodyEl = document.getElementById("content-body")

// Creating elements
let sectionEl = document.createElement("section")
let navbarEl = document.createElement("div")

// Set styling/id to the navbar
navbarEl.id = "navbar-storting"    

// Crating json data for katt and dog in select meny
const jsonData = {
    "selectMeny": {
        "hund": {
            "kjonn" : ["Hun", "Han"],
            "alder" : [0,1,2,3,4,5,6,7,8,9,10,11,12,13]
        },

        "katt": {
            "kjonn" : ["Hun", "Han"],
            "alder" : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
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

        let buttonEl = document.createElement("button")
        buttonEl.setAttribute("name", button.toLowerCase())
        buttonEl.value = button.toLowerCase()
        buttonEl.innerText = button
        button.id = button.toLowerCase()
        buttonEl.classList.add("button-storting")

        labelEl.appendChild(buttonEl)
        navbar.appendChild(labelEl)
    }

}

createSelectMeny(navbarEl, jsonData["selectMeny"][titleAnimal])
creatingButtons(navbarEl, jsonData["button"])
sectionEl.append(navbarEl)
contentBodyEl.append(sectionEl)
