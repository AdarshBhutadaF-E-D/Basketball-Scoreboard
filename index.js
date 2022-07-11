let HomeEl = document.getElementById("home-score");
let GuestEl = document.getElementById("guest-score");

let homeScore = 0;
let guestScore = 0;

function increment1(){
    // console.log("button clicked");
    homeScore += 1;
    HomeEl.textContent = homeScore;
}
function increment2(){
    // console.log("button clicked");
    homeScore += 2;
    HomeEl.textContent = homeScore;
}

function increment3(){
    // console.log("button clicked");
    homeScore += 3;
    HomeEl.textContent = homeScore;
}

function increment4(){
    // console.log("button clicked");
    guestScore += 1;
    GuestEl.textContent = guestScore;
}

function increment5(){
    // console.log("button clicked");
    guestScore += 2;
    GuestEl.textContent = guestScore;
}

function increment6(){
    // console.log("button clicked");
    guestScore += 3;
    GuestEl.textContent = guestScore;
}
