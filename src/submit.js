
async function submitData() {

    url = "https://airtable-middle.herokuapp.com/submit/" + JSON.stringify(tweet_user_record_Ids) + 
    "/" + JSON.stringify(participantInput) + "/" + participantID;

    console.log(url);
    await fetch(url);
    console.log("submit and update complete");
    //goToThanksPage();
}