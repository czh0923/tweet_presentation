// constants 
const presented_number = 10;
const presented_original_num = 5;
const presented_likes_num = 5;
const buttonNames = ["D", "R", "I", "O"];
const buttonValues = ["Democrat", "Republican", "Independent", "Other"];

// html elements
const progressBarInner = document.getElementById("progressBarInner");
const TWEETDIV = document.getElementById("tweetDiv");
const TWEETORIGINALDIV = document.getElementById("tweetOriginalDiv");
const TWEETLIKESDIV = document.getElementById("tweetLikesDiv");
const CHOICEBUTTONDIV = document.getElementById("choiceButtonDiv");
const FINALBUTTONDIV = document.getElementById("finalButtonDiv");
const FINALBUTTON = document.getElementById("finalButton");


const presented_user_number = 5;

var curPageNum = 1;

var participantInput = []

const participantID = localStorage.getItem("participantID");


// helper functions
function goToThanksPage() {
    document.location.href = "thanks.html";
}

function goToErrorPage(e) {
    document.location.href = "error.html";
    console.log(e);
}