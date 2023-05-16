document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.getElementsByClassName("Rate");
    var selectedButton = null;
  
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", changeColor);
    }
  
    function changeColor() {
      if (selectedButton !== null) {
        selectedButton.style.backgroundColor = ""; 
      }
  
      selectedButton = this;
      selectedButton.style.backgroundColor = "hsl(216, 12%, 54%)";
    }
  });
