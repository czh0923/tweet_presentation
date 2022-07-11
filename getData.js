
function renderPic(retrieved_records_url) {
    for (let i = 0; i < presented_number; i++) {

        if (retrieved_records_url[i] != undefined) {
            let aD = document.getElementById((i+1).toString() + "AttachmentDiv");

            let img = document.createElement("img");
            img.id = (i+1).toString() + "pic";
            img.alt = "No Pic Attachments";
            aD.appendChild(img);

            let thisUrl = retrieved_records_url[i][0].url;
            console.log("rendering pic", thisUrl);
            img.src = thisUrl.toString();
        }
    }
}

function renderOriginalWords(retrievedOriginalRecordContent) {
    for (let i = 0; i < presented_original_num; i++) {
        document.getElementById((i+1).toString() + "OriginalTweet").innerHTML = (i+1).toString() + ". " + retrievedOriginalRecordContent[i]; 
    }
}

function renderLikesWords(retrievedLikedRecordContent) {
    for (let i = 0; i < presented_likes_num; i++) {
        document.getElementById((i+1).toString() + "LikesTweet").innerHTML = (i+1).toString() + ". " + retrievedLikedRecordContent[i]; 
    }
}


// getting tweets and presenting on the webpage

async function getTweetsOfTheUser(userName) {
    let url = "https://airtable-middle.herokuapp.com/get/" + userName + "/" + presented_original_num.toString() + "/" + presented_likes_num.toString();
    
    let res = await fetch(url);
    let data = await res.json();

    console.log(data);

    let retrievedOriginalRecordContent = data.retrievedOriginalRecordContent;
    let retrievedLikesRecordContent = data.retrievedLikesRecordContent;

    // rendering words
    renderOriginalWords(retrievedOriginalRecordContent);
    renderLikesWords(retrievedLikesRecordContent);
}
