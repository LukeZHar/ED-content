// Function to handle the toggling of the warning background
function setupWarningToggle() {
    const warningDiv = document.getElementById("warning");
    const toggleButton = document.getElementById("makeItRed");

    toggleButton.addEventListener("click", () => {
        // Check the current background color and toggle
        if (warningDiv.style.backgroundColor === "red") {
            // Clear the background and reset the button text
            warningDiv.style.backgroundColor = "";
            toggleButton.innerText = "Make It Red!";
        } else {
            // Set the background to red and change the button text
            warningDiv.style.backgroundColor = "red";
            toggleButton.innerText = "Clear warning";
        }
    });
}

// Call the setup function
setupWarningToggle();