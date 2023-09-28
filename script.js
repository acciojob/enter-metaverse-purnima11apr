//your JS code here. If required.
   let paragraph = document.getElementById("status");
        const enterBtn = document.getElementById("enterBtn");
       

        enterBtn.addEventListener("click", function () {
			 let result = document.createElement("h1");
			  result.textContent = "Entered Metaverse"
		     	paragraph.appendChild(result);
			
        });