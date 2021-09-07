document.addEventListener('DOMContentLoaded', function() {
    // Add your JavaScript here.

    const colourChangeButton = document.getElementById("colour-change-button");

    colourChangeButton.addEventListener('click', function() {
        const allPosts = document.getElementsByClassName("posts");
        for( let i = 0; i < allPosts.length; i++) {
            allPosts[i].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`
        }
        
    }) 
});
/* Open when someone clicks on the burger icon */
function openNav() {
    document.getElementById("myNav").style.width = "60%";
    document.getElementById("user-detail-page").className = "blur";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("user-detail-page").removeAttribute("class");
   
  } 