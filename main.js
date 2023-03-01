const letters = document.getElementById("name").children;
const wordEndings = document.getElementById("wordEndings").children;

for (let i = 0; i < letters.length; i++) {
  let letter = letters[i];
  let wordEnding = wordEndings[i];
  
  // Add event listener to check for hover
  letter.addEventListener("mouseover", function() {
    // Code to execute when the element is hovered over
    console.log(letter.id)
    for (let j = 0; j < letters.length; j++) {
    	if (letters[j] !== letter) {
	    	letters[j].style.opacity = "0.5";
	    }
    };
    letter.style.transform = "scale(1.1)";
    wordEnding.classList.add("writing");
  });

  letter.addEventListener("mouseout", function() {
          // Set the opacity of all letters back to 1
          for (let j = 0; j < letters.length; j++) {
            letters[j].style.opacity = "1";
            letters[j].style.transform = "scale(1)";
          }
        });
}
