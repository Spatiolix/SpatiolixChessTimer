const btn = document.querySelector("button");
const timerInput = document.querySelector(".timer");
const timerPlusInput = document.querySelector(".timer-plus");

btn.addEventListener("click", function() {
    localStorage.setItem('time', timerInput.value);
    localStorage.setItem('time-plus', timerPlusInput.value);

    window.location.href = "timer.html";
});
