//your JS code here. If required.
   let paragraph = document.getElementById("status");
        const enterBtn = document.getElementById("enterBtn");
        let result = document.getElementById("result");

        enterBtn.addEventListener("click", function () {
            // Change the text of the paragraph
            paragraph.textContent = "Entered Metaverse";

            // Display the updated text in the h1 tag
            result.textContent = paragraph.textContent;
        });