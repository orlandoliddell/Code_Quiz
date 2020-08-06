var li = document.createElement("LI");
var startButton = document.getElementById("start-button");
var welcomeCard = document.getElementById("welcom-card");
var questionDiv = document.getElementById("question-div")

var timeInterval;
var time = 0;
var timeCap = 75;
var numberCorrect = 0;
var questArrofObjIndex = 0;


var questArrofObj = [
    {
        question: "a",
        answerArr: ["a", "b", "c", "d"],
        correctId: 0
    },
    {
        question: "a",
        answerArr: ["a", "b", "c", "d"],
        correctId: 1
    },
    {
        question: "a",
        answerArr: ["a", "b", "c", "d"],
        correctId: 2
    },
    {
        question: "a",
        answerArr: ["a", "b", "c", "d"],
        correctId: 3
    }
   
]



console.log("here")
startButton.addEventListener("click", function () {
    console.log("start")
    welcomeCard.setAttribute("style", "display: none !important");
    questionDiv.setAttribute("style", "display: block !important")
})