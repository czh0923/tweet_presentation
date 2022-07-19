async function getRandomUser(presentedUserNumber) {

    url = "https://airtable-middle.herokuapp.com/getTwitterUser/" + presentedUserNumber.toString()
    
    let res = await fetch(url);
    let data = await res.json();

    let tweetUserRecordIds = data.tweetUserRecordIds;
    let tweetUserNames = data.tweetUserNames;

    console.log(tweetUserRecordIds, tweetUserNames);

    localStorage.setItem("tweetUserRecordIds", JSON.stringify(tweetUserRecordIds));
    localStorage.setItem("tweetUserNames", JSON.stringify(tweetUserNames));

    getTweetsOfTheUser(tweetUserNames[0]);

}

getRandomUser(presented_user_number);