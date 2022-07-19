
async function submitData() {

    url = "https://airtable-middle.herokuapp.com/submit/" + localStorage.getItem("tweetUserRecordIds") + 
    "/" + JSON.stringify(participantInput) + "/" + participantID;

    console.log(url);
    await fetch(url);
    console.log("submit and update complete");
    //goToThanksPage();
}