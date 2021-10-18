const contentBodyEl = document.getElementById("content-body")
let sectionEl = document.createElement("section")
let navbarEl = document.createElement("div")

navbarEl.id = "navbar-storting"    

function createSelectMenny(){
    let labelEl = document.createElement("label")
    labelEl.setAttribute("for", "kjonn")
}



sectionEl.append(navbarEl)
contentBodyEl.append(sectionEl)
