//your JS code here. If required.
   let paragraph = document.getElementById("status");
        const enterBtn = document.getElementById("enterBtn");
        let result = document.getElementById("result");

        enterBtn.addEventListener("click", function () {
            // Set the text of the h1 element to "Entered Metaverse"
			paragraph.style.display ="none";
            result.textContent = "Entered Metaverse";
        });