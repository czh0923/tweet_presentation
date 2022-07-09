
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

function renderWords(retrieved_records_content) {
    for (let i = 0; i < presented_number; i++) {
        // console.log("rendering innerHTML", retrieved_records_content[i]);
        document.getElementById((i+1).toString() + "Tweet").innerHTML = (i+1).toString() + ". " + retrieved_records_content[i]; // div id starting at 1, not 0
    }
}


// getting tweets and presenting on the webpage

async function getTweetsOfTheUser(userName) {
    let presentedOriginalNum = 5;
    let presentedLikesNum = 5;
    let url = "https://airtable-middle.herokuapp.com/get/" + userName + "/" + presentedOriginalNum.toString() + "/" + presentedLikesNum.toString();
    
    let res = await fetch(url);

    let retrievedOriginalRecordContent = res.retrievedOriginalRecordContent;
    let retrievedLikedRecordContent = res.retrievedLikedRecordContent;

    // rendering words
    renderWords(retrievedOriginalRecordContent + retrievedLikedRecordContent);
}
getTweetsOfTheUser("user1");