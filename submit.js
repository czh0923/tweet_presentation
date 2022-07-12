
async function submitData() {

    url = "https://airtable-middle.herokuapp.com/put/" + localStorage.getItem(tweetUserNames) + "/" + 
    localStorage.getItem(tweetUserIds) + "/" + JSON.stringify(participantInput) + "/" + participantId + 
    localStorage.getItem(tweetUserPrevVisitedTimes) + "/" + localStorage.getItem(tweetUserPrevVisitedTimes);

    await fetch(url);
    console.log("submit and update complete");
    goToThanksPage();
}