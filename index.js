
/* Script for hamburger button */
    function myFunction() {
        var x = document.getElementById("nav_bar_links");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
    }