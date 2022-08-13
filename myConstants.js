// constants 
const presented_number = 10;
const presented_original_num = 5;
const presented_likes_num = 5;
const buttonNames = ["D", "R", "I", "O", "IDK"];
const buttonValues = ["Democrat", "Republican", "Independent", "Other (libertarian party)", "Can't Tell"];

// html elements
const progressBarInner = document.getElementById("progressBarInner");
const TWEETDIV = document.getElementById("tweetDiv");
const TWEETORIGINALDIV = document.getElementById("tweetOriginalDiv");
const TWEETLIKESDIV = document.getElementById("tweetLikesDiv");
const CHOICEBUTTONDIV = document.getElementById("choiceButtonDiv");
const FINALBUTTON = document.getElementById("finalButton");
const BACKBUTTON = document.getElementById("backButton");


const presented_user_number = 5;

var curPageNum = 1;
var participantInput = []
const participantID = sessionStorage.getItem("participantID");
var tweet_user_record_Ids = [];
var tweet_user_names = [];
var contents = {};


// helper functions
function goToThanksPage() {
    document.location.href = "thanks.html";
}

function goToErrorPage(e) {
    document.location.href = "error.html";
    console.log(e);
}