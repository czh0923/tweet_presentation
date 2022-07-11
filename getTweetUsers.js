async function getLeastVisitedUser(presentedUserNumber) {

    url = "https://airtable-middle.herokuapp.com/getTwitterUser/" + presentedUserNumber.toString() + "/tweet_user"
    
    let res = await fetch(url);
    let data = await res.json();

    let tweetUserRecordIds = data.tweetUserRecordIds;
    let tweetUserNames = data.tweetUserNames;
    let tweetUserIds = data.tweetUserIds;
    let tweetUserPrevVisitedTimes = data.tweetUserPrevVisitedTimes;

    console.log("getting tweet users", tweetUserRecordIds, tweetUserNames, tweetUserIds, tweetUserPrevVisitedTimes);

    localStorage.setItem("tweetUserRecordIds", tweetUserRecordIds);
    localStorage.setItem("tweetUserNames", tweetUserNames);
    localStorage.setItem("tweetUserIds", tweetUserIds);
    localStorage.setItem("tweetUserPrevVisitedTimes", tweetUserPrevVisitedTimes);
    
    
    getTweetsOfTheUser(tweetUserNames[0]);
}

getLeastVisitedUser(presented_user_number);