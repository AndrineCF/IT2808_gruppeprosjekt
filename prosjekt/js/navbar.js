/* links to navbar */
const nav = document.getElementById('dropdown');

/* code changed from: https://stackoverflow.com/questions/41880822/have-multiple-click-to-open-dropdown-menus-only-want-one-open-at-a-time */
/* function that uses the id inserted so that the button can display th dropdowncontent associated with it */
function myFunction(id) {
  let dropdowns = document.getElementsByClassName("dropdown2-content");
          let i;
          for (i = 0; i < dropdowns.length; i++) {
                  var openDropdown = dropdowns[i];
                          openDropdown.classList.remove('show');
          }
  document.getElementById(id).classList.toggle("show");
}

// Close the dropdown if the user clicks in window.
window.onclick = function(event) {
        if (!event.target.matches('.dropbtn2')) {
                var dropdowns = document.getElementsByClassName("dropdown2-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                                openDropdown.classList.remove('show');
                        }
                }
        }
}

