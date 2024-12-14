function challengeOne() {
    const fiveButton = document.getElementById("five");
    const tenButton = document.getElementById("ten");
    const fifteenButton = document.getElementById("fifteen");
    const counterOne = document.getElementById("counter-one");

    function changeValue(value) {
        // Increment the value in the <p> by value
        let currentCount = parseInt(counterOne.innerText);
        counterOne.innerText = currentCount + value;
    }

    // Adding event listeners to the buttons
    fiveButton.addEventListener('click', () => changeValue(5));
    tenButton.addEventListener('click', () => changeValue(10));
    fifteenButton.addEventListener('click', () => changeValue(15));
}


function challengeTwo() {
    const incrementButton = document.querySelector('.challenge-two[value="1"]');
    const decrementButton = document.querySelector('.challenge-two[value="-1"]');
    const stopButton = document.getElementById("stop");
    const counterTwo = document.getElementById("counter-two");

    function changeValue(event) {
        // Get the value from the button that was clicked
        const changeAmount = parseInt(event.target.value);
        let currentCount = parseInt(counterTwo.innerText);
        counterTwo.innerText = currentCount + changeAmount;
    }

    // Adding event listeners to increment and decrement buttons
    incrementButton.addEventListener('click', changeValue);
    decrementButton.addEventListener('click', changeValue);

    // Stop button that removes listeners
    stopButton.addEventListener('click', () => {
        incrementButton.removeEventListener('click', changeValue);
        decrementButton.removeEventListener('click', changeValue);
    });
}

function activity() {
    challengeOne();
    challengeTwo();
}

try {
    module.exports = {
        challengeOne,
        challengeTwo
    }
} catch {}