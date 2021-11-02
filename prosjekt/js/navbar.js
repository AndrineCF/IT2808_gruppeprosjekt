
/* links to header */
var navHeader = document.getElementsByClassName("navbar")[0];

// create the a element
var a = document.createElement("a");

// create img element
var img = document.createElement("img");

// link img to headerLogo
img.src = "img/headerLogo.png";

// adds the img to the a
a.appendChild(img);

// adds the hyperlink to a
a.href = "forside.html"

// adds a to the navbar
navHeader.appendChild(a);

// reset var a 
a = document.createElement("a");

a.innerHTML = "Om oss";
// adds the hyperlink to a
a.href = "om_oss.html"

// adds a to the navbar
navHeader.appendChild(a);

// reset var a 
a = document.createElement("a");

a.innerHTML = "Bidra";
// adds the hyperlink to a
a.href = "bidra.html"

// adds a to the navbar
navHeader.appendChild(a);

// reset var a 
a = document.createElement("a");

a.innerHTML = "Fostering";
// adds the hyperlink to a
a.href = "fosterhjem.html"

// adds a to the navbar
navHeader.appendChild(a);

// create the div element that shall contain the dropdown
var dropdownDiv = document.createElement("div");

// gives the dropdown the class dropdown2
dropdownDiv.classList = "dropdown2";

// create the div element that shall contain the dropdownbtn and dropdown itself
var dropdownBtn = document.createElement("button");

// gives the dropdown the class dropdown2
dropdownBtn.classList = "dropbtn2";

dropdownBtn.innerHTML = "Adopsjon <img src='img/down_arrow.png' alt='V'>";

// adds dropdownBtn to dropdownDiv
dropdownDiv.appendChild(dropdownBtn);

// create the div element that shall contain the dropdown
var dropdownContent = document.createElement("div");

dropdownContent.id = "adopsjon";

// gives the dropdown the class dropdown2
dropdownContent.classList = "dropdown2-content";

// reset var a 
a = document.createElement("a");

a.innerHTML = "om adopsjon";
// adds the hyperlink to a
a.href = "adopsjon.html"

dropdownContent.appendChild(a);

// reset var a 
a = document.createElement("a");

a.innerHTML = "katt";
// adds the hyperlink to a
a.href = "om_katt.html"

dropdownContent.appendChild(a);

// reset var a 
a = document.createElement("a");

a.innerHTML = "hund";
// adds the hyperlink to a
a.href = "om_hund.html"

dropdownContent.appendChild(a);

// reset var a 
a = document.createElement("a");

a.innerHTML = "skjema";
// adds the hyperlink to a
a.href = "kontakt_skjema.html"

dropdownContent.appendChild(a);


// adds dropdownContainer to dropdownDiv
dropdownDiv.appendChild(dropdownContent);

// adds a to the navbar
navHeader.appendChild(dropdownDiv);

// adds mouseover to the button so that the content can be shown
dropdownBtn.onmouseover = function(){
        overNavbar("adopsjon")
};

dropdownDiv.onmouseleave = function(){
        leaveNavbar("adopsjon")
};


/* function that uses the id inserted so that the button can display th dropdowncontent associated with it */
function overNavbar(id) {
        document.getElementById(id).classList.add("show");
        console.log("over")
}

function leaveNavbar(id) {
        document.getElementById(id).classList.remove("show");
        console.log("leave")
}

/* how to program multiple dropdowns in a navbar was gotten from this website: https://stackoverflow.com/questions/41880822/have-multiple-click-to-open-dropdown-menus-only-want-one-open-at-a-time
   While we did end up only using one dropdown, it is now easier to add more in the future */
