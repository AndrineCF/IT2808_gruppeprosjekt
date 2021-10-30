// Get the which animel site it is
var titleAnimal = document.title.split(" ")[0].toLowerCase()

// Getting the content body
var contentBodyEl = document.getElementById("content-body")

// Creating elements
var sectionEl = document.createElement("section")

function createDisplay(img, name, age, rase, others){

    // Creating the div for hold all elements for anima display box
    var animalDisplayaEl = document.createElement("div")
    animalDisplayaEl.classList.add("animal-display")

    // created img elemenet for display image of animal
    var imgAnimalEL = document.createElement("img")
    imgAnimalEL.setAttribute("src", img)
    imgAnimalEL.setAttribute("alt", "bilde av " + name)
    imgAnimalEL.classList.add("animal-img")
    animalDisplayaEl.append(imgAnimalEL)

    // creating a info box for the info
    var animalInfoEl = document.createElement("div")
    animalInfoEl.classList.add("animal-info")

    // add the name to info box
    var infoTextEl = document.createElement("p")
    infoTextEl.innerText = "Navn: " + name
    animalInfoEl.append(infoTextEl)

    // add the age to info box
    var infoTextEl = document.createElement("p")
    infoTextEl.innerText = "Alder: " + age
    animalInfoEl.append(infoTextEl)

    var infoTextEl = document.createElement("p")
    infoTextEl.innerText = "Rase: " + rase
    animalInfoEl.append(infoTextEl)

    var infoTextEl = document.createElement("p")
    infoTextEl.innerText = "Annet: " + others
    animalInfoEl.append(infoTextEl)

    // add the text box to animal display
    animalDisplayaEl.append(animalInfoEl)


    // add animal display to section
    sectionEl.append(animalDisplayaEl)

}

for(i in jsonDyr[titleAnimal]) {

    createDisplay(jsonDyr[titleAnimal][i]["img"],
                jsonDyr[titleAnimal][i]["navn"],
                jsonDyr[titleAnimal][i]["alder"],
                jsonDyr[titleAnimal][i]["rase"],
                jsonDyr[titleAnimal][i]["annet"])
}

// add the new section to content body 
contentBodyEl.append(sectionEl)