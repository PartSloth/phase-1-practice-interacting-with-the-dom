const intervalId = setInterval(increment, 1000);
const timerElement = document.getElementById("counter");
const minusBtn = document.getElementById("minus");
const plusBtn = document.getElementById("plus");
const heartBtn = document.getElementById("heart");
const form = document.querySelector("form");
const pauseBtn = document.getElementById("pause");

// Manually decrement the counter using the minus buttons.
minusBtn.addEventListener("click",  event => {
    timerElement.textContent = parseInt(timerElement.textContent,10) - 1;
})

// Manually increment the counter using the plus buttons.
plusBtn.addEventListener("click",  event => {
    timerElement.textContent = parseInt(timerElement.textContent,10) + 1;

})

// "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
heartBtn.addEventListener("click", event => {
let countValue = timerElement.textContent;
const likesList = document.querySelector("ul.likes");
const li = document.createElement("li");
const p = document.createElement("p");

    if(likesList.lastChild === null) {
        p.textContent = `${countValue} has been liked 1 time!`
        li.appendChild(p);
        likesList.appendChild(li);
    } else if (likesList.lastChild.textContent.slice(0, countValue.length) === countValue) {
        const begSliceLength = countValue.length + 16;
        const endSliceLength = -6;
        const startLikeIntervalElement = likesList.lastChild.textContent.slice(begSliceLength, endSliceLength);
        const startLikeInterval = parseInt(startLikeIntervalElement, 10)
        p.textContent = `${countValue} has been liked ${startLikeInterval + 1} time!`;
        li.appendChild(p);
        likesList.lastChild.replaceWith(li);
    } else {
        p.textContent = `${countValue} has been liked 1 time!`
        li.appendChild(p);
        likesList.appendChild(li);
}
})

// Pause the counter, which should:
    // Pause the counter
    // Disable all buttons except the pause button
    // Switch the label on the button from "pause" to "resume"
    // Click the "resume" button to restart the counter and re-enable the buttons.

pauseBtn.addEventListener("click", event => {
    if (pauseBtn.textContent === " pause ") {
        pauseTimer();
    } else {
        resumeTimer();
    }
    
})

// Leave comments and log it.
form.addEventListener("submit", event => {
    event.preventDefault();
    const p = document.createElement("p");
    p.textContent = event.target.comment_input.value;
    form.appendChild(p);
    form.reset();
})

// See the timer increment every second once the page has loaded.
function increment () {
    timerElement.textContent = parseInt(timerElement.textContent, 10) + 1;
}

function pauseTimer() {
    pauseBtn.textContent = " resume ";
    clearInterval(intervalId);
    minusBtn.disabled = true;
    plusBtn.disabled = true;
    heartBtn.disabled = true;
}

function resumeTimer() {
    pauseBtn.textContent = " pause ";
    const resumeIntervalId = setInterval(increment, 1000);
    minusBtn.disabled = false;
    plusBtn.disabled = false;
    heartBtn.disabled = false;
}