const timer_users = parseInt(localStorage.getItem("time")) || 5;  
const plus_time = parseInt(localStorage.getItem("time-plus")) || 0; 

let black_time = timer_users * 60;
let white_time = timer_users * 60;

let black_box = document.querySelector(".black");
let white_box = document.querySelector(".white");
let timer_black = document.querySelector(".timer-black");
let timer_white = document.querySelector(".timer-white");

let active_player = null; 
let interval_id = null;   


function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${mins < 10 ? '0' + mins : mins}:${secs < 10 ? '0' + secs : secs}`;
}


timer_black.innerHTML = formatTime(black_time);
timer_white.innerHTML = formatTime(white_time);

black_box.style.cursor = "pointer";
white_box.style.cursor = "pointer";


function startTimer() {
    if (interval_id) clearInterval(interval_id);

    interval_id = setInterval(function() {
        if (active_player === "black") {
            black_time--;
            timer_black.innerHTML = formatTime(black_time);
            
            if (black_time <= 0) {
                clearInterval(interval_id);
                alert("Белые победили по времени!");
            }
        } else if (active_player === "white") {
            white_time--;
            timer_white.innerHTML = formatTime(white_time);
            
            if (white_time <= 0) {
                clearInterval(interval_id);
                alert("Черные победили по времени!");
            }
        }
    }, 1000); 
}


black_box.addEventListener("click", function() {
    if (active_player === "black" || active_player === null) {
        if (active_player === "black") {
            black_time += plus_time; 
            timer_black.innerHTML = formatTime(black_time);
        }

        
        black_box.style.borderStyle = "none";
        black_box.style.cursor = "default";
        white_box.style.cursor = "pointer";
        white_box.style.borderStyle = "solid";

        
        active_player = "white"; 
        startTimer();            
    }
});


white_box.addEventListener("click", function() {
    if (active_player === "white" || active_player === null) {
        if (active_player === "white") {
            white_time += plus_time; 
            timer_white.innerHTML = formatTime(white_time);
        }

        
        white_box.style.borderStyle = "none";
        white_box.style.cursor = "default";
        black_box.style.cursor = "pointer";
        black_box.style.borderStyle = "solid";

        
        active_player = "black";
        startTimer();            
    }
});
