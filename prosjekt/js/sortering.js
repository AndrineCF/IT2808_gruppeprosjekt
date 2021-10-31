// GOLABL VARIABLES

// Get the which animel site it is
var titleAnimal = document.title.split(" ")[0].toLowerCase()

// Getting the content body
var contentBodyEl = document.getElementById("content-body")

// Creating elements
var sectionEl = document.createElement("section")

// get the option element for gender
var genderOptionEl = document.getElementById("kjonn")

// get the option element for age
var ageOptionEl = document.getElementById("alder")

// get the button value for allergy friendly
var allergyFriendlyButtonEl = document.getElementById("allergivennlig")

// get the button value for kid friendly
var kidFriendlyButtonEl = document.getElementById("barnevennlig")

// FUNCTIONS

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

function stortingGender(){
    // remove all the element in section
    while(sectionEl.firstChild){
        sectionEl.removeChild(sectionEl.firstChild)
    }

    // goes thourgh every element in josnDyr
    for(i in jsonDyr[titleAnimal]) {

        // get choosen value
        var gender = genderOptionEl.value

        // check the value to jsonDyr and which gender user by then update section
        if (gender == "hun" && jsonDyr[titleAnimal][i]["kjonn"] == "hun") {
            createDisplay(jsonDyr[titleAnimal][i]["img"],
                jsonDyr[titleAnimal][i]["navn"],
                jsonDyr[titleAnimal][i]["alder"],
                jsonDyr[titleAnimal][i]["rase"],
                jsonDyr[titleAnimal][i]["annet"])
        } else if (gender == "han" && jsonDyr[titleAnimal][i]["kjonn"] == "han") {
            createDisplay(jsonDyr[titleAnimal][i]["img"],
            jsonDyr[titleAnimal][i]["navn"],
            jsonDyr[titleAnimal][i]["alder"],
            jsonDyr[titleAnimal][i]["rase"],
            jsonDyr[titleAnimal][i]["annet"])
        } else if(gender == "begge"){
            createDisplay(jsonDyr[titleAnimal][i]["img"],
            jsonDyr[titleAnimal][i]["navn"],
            jsonDyr[titleAnimal][i]["alder"],
            jsonDyr[titleAnimal][i]["rase"],
            jsonDyr[titleAnimal][i]["annet"])
        }
    }

    // add the update section to content body 
    contentBodyEl.append(sectionEl)
}

function stortingAllergyFriendly(){

    // remove all the element in section
    while(sectionEl.firstChild){
        sectionEl.removeChild(sectionEl.firstChild)
    }

    // goes thourgh every element in josnDyr
    for(i in jsonDyr[titleAnimal]) {

        // get value of the button
        var allergyFriendly = allergyFriendlyButtonEl.value

        // update the display of the choosen value
        if(allergyFriendly == "ja" && jsonDyr[titleAnimal][i]["allergivennlig"] == "ja"){
            createDisplay(jsonDyr[titleAnimal][i]["img"],
            jsonDyr[titleAnimal][i]["navn"],
            jsonDyr[titleAnimal][i]["alder"],
            jsonDyr[titleAnimal][i]["rase"],
            jsonDyr[titleAnimal][i]["annet"])
        } else if (allergyFriendly == "nei" && jsonDyr[titleAnimal][i]["allergivennlig"] == "nei"){
            createDisplay(jsonDyr[titleAnimal][i]["img"],
            jsonDyr[titleAnimal][i]["navn"],
            jsonDyr[titleAnimal][i]["alder"],
            jsonDyr[titleAnimal][i]["rase"],
            jsonDyr[titleAnimal][i]["annet"])
        }


    }

    // switch value of button
    if(allergyFriendly == "ja") {
        allergyFriendlyButtonEl.value = "nei"
    } else if(allergyFriendly == "nei") {
        allergyFriendlyButtonEl.value = "ja"
    }
    // add the update section to content body 
    contentBodyEl.append(sectionEl)
}

function stortingKidFriendly(){
    // remove all the element in section
    while(sectionEl.firstChild){
        sectionEl.removeChild(sectionEl.firstChild)
    }

    // goes thourgh every element in josnDyr
    for(i in jsonDyr[titleAnimal]) {

        // get value of the button
        var kidFriendly = kidFriendlyButtonEl.value

        // update the display of the choosen value
        if(kidFriendly == "ja" && jsonDyr[titleAnimal][i]["barnevennlig"] == "ja"){
            createDisplay(jsonDyr[titleAnimal][i]["img"],
            jsonDyr[titleAnimal][i]["navn"],
            jsonDyr[titleAnimal][i]["alder"],
            jsonDyr[titleAnimal][i]["rase"],
            jsonDyr[titleAnimal][i]["annet"])
        } else if (kidFriendly == "nei" && jsonDyr[titleAnimal][i]["barnevennlig"] == "nei"){
            createDisplay(jsonDyr[titleAnimal][i]["img"],
            jsonDyr[titleAnimal][i]["navn"],
            jsonDyr[titleAnimal][i]["alder"],
            jsonDyr[titleAnimal][i]["rase"],
            jsonDyr[titleAnimal][i]["annet"])
        }


    }

    // switch value of button
    if(kidFriendly == "ja") {
        kidFriendlyButtonEl.value = "nei"
    } else if(kidFriendly == "nei") {
        kidFriendlyButtonEl.value = "ja"
    }
    // add the update section to content body 
    contentBodyEl.append(sectionEl)
}

function stortingAge(){
    // remove all the element in section
    while(sectionEl.firstChild){
        sectionEl.removeChild(sectionEl.firstChild)
    }

    // goes thourgh every element in josnDyr
    for(i in jsonDyr[titleAnimal]) {

        // get choosen value
        var ageString = ageOptionEl.value
        var age = ageString.split("-")
        
        if((1 <= parseInt(age[0]) && parseInt(age[1]) <= 5) &&
            (1 <= jsonDyr[titleAnimal][i]["alder"] && jsonDyr[titleAnimal][i]["alder"] <= 5)){
            createDisplay(jsonDyr[titleAnimal][i]["img"],
                jsonDyr[titleAnimal][i]["navn"],
                jsonDyr[titleAnimal][i]["alder"],
                jsonDyr[titleAnimal][i]["rase"],
                jsonDyr[titleAnimal][i]["annet"])
        } else if((6 <= parseInt(age[0]) && parseInt(age[1]) <= 10) &&
        (6 <= jsonDyr[titleAnimal][i]["alder"] && jsonDyr[titleAnimal][i]["alder"] <= 10)){
            createDisplay(jsonDyr[titleAnimal][i]["img"],
            jsonDyr[titleAnimal][i]["navn"],
            jsonDyr[titleAnimal][i]["alder"],
            jsonDyr[titleAnimal][i]["rase"],
            jsonDyr[titleAnimal][i]["annet"])
        } else if((11 <= parseInt(age[0]) && parseInt(age[1]) <= 15) &&
        (11 <= jsonDyr[titleAnimal][i]["alder"] && jsonDyr[titleAnimal][i]["alder"] <= 15)){
            createDisplay(jsonDyr[titleAnimal][i]["img"],
            jsonDyr[titleAnimal][i]["navn"],
            jsonDyr[titleAnimal][i]["alder"],
            jsonDyr[titleAnimal][i]["rase"],
            jsonDyr[titleAnimal][i]["annet"])
        } else if((16 <= parseInt(age[0]) && parseInt(age[1]) <= 20) &&
        (16 <= jsonDyr[titleAnimal][i]["alder"] && jsonDyr[titleAnimal][i]["alder"] <= 20)){
            createDisplay(jsonDyr[titleAnimal][i]["img"],
            jsonDyr[titleAnimal][i]["navn"],
            jsonDyr[titleAnimal][i]["alder"],
            jsonDyr[titleAnimal][i]["rase"],
            jsonDyr[titleAnimal][i]["annet"])
        }

    }

    // add the update section to content body 
    contentBodyEl.append(sectionEl)
}

 // MAIN

for(i in jsonDyr[titleAnimal]) {

    createDisplay(jsonDyr[titleAnimal][i]["img"],
                jsonDyr[titleAnimal][i]["navn"],
                jsonDyr[titleAnimal][i]["alder"],
                jsonDyr[titleAnimal][i]["rase"],
                jsonDyr[titleAnimal][i]["annet"])
}

// add the new section to content body 
contentBodyEl.append(sectionEl)

// event listner
genderOptionEl.addEventListener("change", stortingGender)
allergyFriendlyButtonEl.addEventListener("click", stortingAllergyFriendly)
kidFriendlyButtonEl.addEventListener("click", stortingKidFriendly)
ageOptionEl.addEventListener("change", stortingAge)
