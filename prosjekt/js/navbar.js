/* links to navbar */
const nav = document.getElementById('dropdown');

/* code changed from: https://stackoverflow.com/questions/41880822/have-multiple-click-to-open-dropdown-menus-only-want-one-open-at-a-time */
/* function that uses the id inserted so that the button can display th dropdowncontent associated with it */
function overNavbar(id) {
        document.getElementById(id).classList.add("show");
        console.log("over")
}

function leaveNavbar(id) {
        document.getElementById(id).classList.remove("show");
        console.log("leave")
}
