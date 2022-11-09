
// function renderPic(retrieved_records_url) {
//     for (let i = 0; i < presented_number; i++) {

//         if (retrieved_records_url[i] != undefined) {
//             let aD = document.getElementById((i+1).toString() + "AttachmentDiv");

//             let img = document.createElement("img");
//             img.id = (i+1).toString() + "pic";
//             img.alt = "No Pic Attachments";
//             aD.appendChild(img);

//             let thisUrl = retrieved_records_url[i][0].url;
//             console.log("rendering pic", thisUrl);
//             img.src = thisUrl.toString();
//         }
//     }
// }

// function renderOriginalWords(retrievedOriginalRecordContent) {
//     for (let i = 0; i < presented_original_num; i++) {
//         document.getElementById((i+1).toString() + "OriginalTweet").innerHTML = (i+1).toString() + ". " + retrievedOriginalRecordContent[i]; 
//     }
// }

// function renderLikesWords(retrievedLikedRecordContent) {
//     for (let i = 0; i < presented_likes_num; i++) {
//         document.getElementById((i+1).toString() + "LikesTweet").innerHTML = (i+1).toString() + ". " + retrievedLikedRecordContent[i]; 
//     }
// }


// getting tweets and presenting on the webpage

// async function getTweetsOfTheUser(userName, curPageNum) {
//     let url = "https://airtable-middle.herokuapp.com/get/" + userName + "/" + presented_original_num.toString() + "/" + presented_likes_num.toString();
    
//     let res = await fetch(url);
//     let data = await res.json();

//     let retrievedOriginalRecordContent = data.retrievedOriginalRecordContent;
//     let retrievedLikesRecordContent = data.retrievedLikesRecordContent;

//     // rendering words
//     renderOriginalWords(retrievedOriginalRecordContent);
//     renderLikesWords(retrievedLikesRecordContent);

//     contents[curPageNum] = {retrievedOriginalRecordContent, retrievedLikesRecordContent}

// }

function getTweetsWithPageNum(curPageNum) {

    curPageNum -= 1;

    let tweets = [];
    let types = [];

    for (let i = 0; i < 10; i ++) {
        tweets.push(tweets_content[curPageNum * 10 + i]);
        types.push(tweets_types[curPageNum * 10 + i])
    }

    for (let i = 0; i < tweets.length; i++) {
        document.getElementById((i+1).toString() + "Tweet").innerHTML = (i+1).toString() + ". " + tweets[i]; 
    }

}

// async function presentTweetsOfTheUser(curPageNum) {
//     let {retrievedOriginalRecordContent, retrievedLikesRecordContent} = contents[curPageNum];

//     renderOriginalWords(retrievedOriginalRecordContent);
//     renderLikesWords(retrievedLikesRecordContent);
// }
