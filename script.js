let clubName = "Gaming Club";
console.log("Welcome to " + clubName);

let meetingDay = "Saturday";
console.log("Our club meets every " + meetingDay);

function sayHi() {
  console.log("Hi! Thanks for Visiting.");
}

sayHi();

function sayBye() {
  console.log("Bye! Thanks for Visiting.");
}

sayBye();
sayBye();

let nextButton = document.querySelector("#next-btn");
let nextMeeting = document.querySelector("#next-meeting");

function showNextMeeting() {
  nextMeeting.textContent = "Our next meeting is Saturday, November 7 at 2 PM.";
}

nextButton.addEventListener("click", showNextMeeting);
