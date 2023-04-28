async function getRandomUser(presentedUserNumber) {

    url = "https://airtable-middle.herokuapp.com/getTwitterUser/" + presentedUserNumber.toString() + "/" + participantID;
    
    let res = await fetch(url);
    let data = await res.json();

    let tweetUserRecordIds = [...data.tweetUserRecordIds];
    let tweetUserNames = [...data.tweetUserNames];
    let tweets = [...data.tweets];
    let types = [...data.types];

    // tweet_user_record_Ids = [...tweetUserRecordIds];
    // tweet_user_names = [...tweetUserNames];

    //console.log(tweet_user_record_Ids, tweet_user_names);

    console.log(tweetUserRecordIds, tweetUserNames, tweets, types);


    // sessionStorage.setItem("tweetUserRecordIds", JSON.stringify(tweet_user_record_Ids));
    // sessionStorage.setItem("tweetUserNames", JSON.stringify(tweet_user_names));

    sessionStorage.setItem("tweetUserRecordIds", JSON.stringify(tweetUserRecordIds));
    sessionStorage.setItem("tweetUserNames", JSON.stringify(tweetUserNames));
    sessionStorage.setItem("tweets", JSON.stringify(tweets));
    sessionStorage.setItem("types", JSON.stringify(types));


}

