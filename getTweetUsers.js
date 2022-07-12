async function getLeastVisitedUser(presentedUserNumber) {

    url = "https://airtable-middle.herokuapp.com/getTwitterUser/" + presentedUserNumber.toString()
    
    let res = await fetch(url);
    let data = await res.json();

    let tweetUserRecordIds = data.tweetUserRecordIds;
    let tweetUserNames = data.tweetUserNames;
    let tweetUserIds = data.tweetUserIds;
    let tweetUserPrevVisitedTimes = data.tweetUserPrevVisitedTimes;

    console.log("getting tweet users", tweetUserRecordIds, tweetUserNames, tweetUserIds, tweetUserPrevVisitedTimes);

    localStorage.setItem("tweetUserRecordIds", JSON.stringify(tweetUserRecordIds));
    localStorage.setItem("tweetUserNames", JSON.stringify(tweetUserNames));
    localStorage.setItem("tweetUserIds", JSON.stringify(tweetUserIds));
    localStorage.setItem("tweetUserPrevVisitedTimes", JSON.stringify(tweetUserPrevVisitedTimes));
    
    
    getTweetsOfTheUser(tweetUserNames[0]);
}

getLeastVisitedUser(presented_user_number);