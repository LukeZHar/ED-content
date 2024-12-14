function challengeOne() {
    const form = document.querySelector("form");
    const output = document.getElementById("output");

    form.addEventListener("submit", function(event){
        event.preventDefault(); // Prevent form submission

        const name = document.getElementById("name").value;
        const language = document.getElementById("language").value;
        const cohort = document.getElementById("cohort").value;

        output.innerText = `Hello ${name}, hope you are enjoying learning about ${language} in ${cohort}`;
    });
}

function challengeTwo() {
    const button = document.getElementById("change-theme");
    const column = document.getElementById("challenge-two");

    button.addEventListener("click", function() {
        column.classList.toggle("darkmode");

        if(column.classList.contains("darkmode")) {
            button.innerText = "Light Mode";
        } else {
            button.innerText = "Dark Mode";
        }
    });
}

function challengeThree() {
    const dragger = document.getElementById("dragger");
    const dropZones = document.querySelectorAll(".drag");

    dragger.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData("text/plain", dragger.id);
    });

    dropZones.forEach(zone => {
        zone.addEventListener('dragover', function(event) {
            event.preventDefault(); // Enable drop by preventing default
        });

        zone.addEventListener('drop', function(event) {
            event.preventDefault();
            const draggedElementId = event.dataTransfer.getData("text");
            const draggedElement = document.getElementById(draggedElementId);
            zone.appendChild(draggedElement);

            if (zone.id === "to") {
                draggedElement.style.backgroundColor = "green";
            } else {
                draggedElement.style.backgroundColor = "red";
            }
        });
    });
}   

function activity() {
    challengeOne()
    challengeTwo()
    challengeThree()
}

try {
    module.exports = {
        challengeOne,
        challengeTwo,
        challengeThree
    }
} catch {
}