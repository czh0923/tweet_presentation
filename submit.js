
async function submitData() {

    url = "https://airtable-middle.herokuapp.com/put/" + localStorage.getItem("tweetUserNames") + "/" + 
    localStorage.getItem("tweetUserIds") + "/" + JSON.stringify(participantInput) + "/" + participantID + "/" +
    localStorage.getItem("tweetUserPrevVisitedTimes") + "/" + localStorage.getItem("tweetUserRecordIds");

    // console.log(url);
    await fetch(url);
    console.log("submit and update complete");
    goToThanksPage();
}