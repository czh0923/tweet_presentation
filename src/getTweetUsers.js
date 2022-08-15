async function getRandomUser(presentedUserNumber) {

    url = "https://airtable-middle.herokuapp.com/getTwitterUser/" + presentedUserNumber.toString()
    
    let res = await fetch(url);
    let data = await res.json();

    let tweetUserRecordIds = data.tweetUserRecordIds;
    let tweetUserNames = data.tweetUserNames;

    tweet_user_record_Ids = [...tweetUserRecordIds];
    tweet_user_names = [...tweetUserNames];

    console.log(tweet_user_record_Ids, tweet_user_names);


    sessionStorage.setItem("tweetUserRecordIds", JSON.stringify(tweet_user_record_Ids));
    sessionStorage.setItem("tweetUserNames", JSON.stringify(tweet_user_names));


}

