
/* links to header */
var nav = document.getElementsByClassName("navbar")[0];

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

nav.appendChild(a);

/* function that uses the id inserted so that the button can display th dropdowncontent associated with it */
function overNavbar(id) {
        document.getElementById(id).classList.add("show");
        console.log("over")
}

function leaveNavbar(id) {
        document.getElementById(id).classList.remove("show");
        console.log("leave")
}
