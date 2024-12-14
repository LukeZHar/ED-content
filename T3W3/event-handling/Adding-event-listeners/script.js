function challengeThree() {
    const colors = [
        'rgb(238, 130, 238)', // violet
        'rgb(75, 0, 130)',    // indigo
        'rgb(0, 0, 255)',     // blue
        'rgb(0, 128, 0)',     // green
        'rgb(255, 255, 0)',   // yellow
        'rgb(255, 165, 0)',   // orange
        'rgb(255, 0, 0)',     // red
    ];
    const rainbow = document.getElementById('rainbow');
    const button = document.getElementById("challenge-three");
    let currentColorIndex = 0;

    button.addEventListener('click', () => {
        // Update color index
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        // Set the next color in the array
        rainbow.style.backgroundColor = colors[currentColorIndex];
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