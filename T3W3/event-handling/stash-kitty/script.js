function addStash(event) {
    const stashPic = document.getElementById("stash-pic");

    // Get the coordinates from the mouse event
    const mouseX = event.pageX; // X coordinate of the mouse click
    const mouseY = event.pageY; // Y coordinate of the mouse click

    // Set the position of the stash photo
    stashPic.style.left = mouseX + "px"; // Set the horizontal position
    stashPic.style.top = mouseY + "px";  // Set the vertical position
}

// Add an event listener to the cat picture
const catPic = document.getElementById("cat-pic");
catPic.addEventListener("click", addStash);