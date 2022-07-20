FINALBUTTON.addEventListener("click", pressNext);
BACKBUTTON.addEventListener("click", pressBack);

function getParticipantInput(index, clickBack) {
    let buttonSelected = document.querySelector("input[name='Choices']:checked");
    if (buttonSelected == null && !clickBack) {
        alert("Must select one");
    } 

    if (buttonSelected == null) {
        return;
    }

    if (participantInput.length <= index) {
        participantInput.push(buttonSelected.value);
    } else {
        participantInput[index] = buttonSelected.value;
    }
    console.log(participantInput);
}

function progressBarChange(curPageNum) {
    console.log(curPageNum / presented_user_number * 100);
    progressBarInner.style.width = (curPageNum / presented_user_number * 100).toString() + "%";
}

function clearChoiceButton() {
    for (let i = 0; i < buttonNames.length; i++) {
        let button = document.getElementById(buttonNames[i]);
        button.checked = false;
    }
}

function renderButton(index) {
    let buttonValue = participantInput[index];
    let button = document.getElementById(buttonValue[0]);
    button.checked = true;
}

async function pressNext() {

    getParticipantInput(curPageNum - 1, false);

    if (curPageNum == presented_user_number - 1) {
        finalButton.innerHTML = "Submit";
    } else if (curPageNum == presented_user_number) {
        await submitData();
        return;
    } 

    curPageNum += 1;
    getTweetsOfTheUser(tweet_user_names[curPageNum - 1]);

    if (participantInput.length >= curPageNum) {
        renderButton(curPageNum - 1);
    } else {
        clearChoiceButton();
    }
    progressBarChange(curPageNum);

}

async function pressBack() {

    getParticipantInput(curPageNum - 1, true);

    finalButton.innerHTML = "Next";

    curPageNum -= 1;
    presentTweetsOfTheUser(tweet_user_names[curPageNum - 1]);

    renderButton(curPageNum - 1);
    progressBarChange(curPageNum);
}