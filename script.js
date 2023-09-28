//your JS code here. If required.
let paragraph = document.getElementById("status");
const button = document.getElementById("enterbtn");
 let result = document.getElementById("result");

enterBtn.addEventListener("click", function () {
            let originalText = paragraph.textContent;
            paragraph.style.display = "none"; 
            result.textContent = originalText;
        });

	
