FINALBUTTON.addEventListener("click", pressNext);
BACKBUTTON.addEventListener("click", pressBack);

function getParticipantInput(curPageNum, clickBack) {

    let index = curPageNum - 1;
    let buttonSelected = document.querySelector("input[name='Choices']:checked");
    if (buttonSelected == null && !clickBack) {
        alert("Must select one");
        return false;
    } 

    // if (buttonSelected == null) {
    //     return false;
    // }

    if (buttonSelected != null) {

        if (participantInput.length <= index) {
            participantInput.push(buttonSelected.value);
        } else {
            participantInput[index] = buttonSelected.value;
        }
        console.log(participantInput);
        //return true;

    }

    return true;
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

function renderButton(curPageNum) {
    let buttonValue = participantInput[curPageNum - 1];
    let button = document.getElementById(buttonValue[0]);
    button.checked = true;
}

async function pressNext() {

    if (!getParticipantInput(curPageNum, false)) {
        return;
    }

    if (curPageNum == presented_user_number - 1) {
        finalButton.innerHTML = "Submit";
    } else if (curPageNum == presented_user_number) {
        await submitData();
        return;
    } 

    curPageNum += 1;
    if (contents[curPageNum] != null) {
        console.log("here1")
        presentTweetsOfTheUser(curPageNum);
    } else {
        console.log("here2")
        getTweetsOfTheUser(tweet_user_names[curPageNum - 1], curPageNum);
    }

    if (participantInput.length >= curPageNum) {
        renderButton(curPageNum);
    } else {
        clearChoiceButton();
    }
    progressBarChange(curPageNum);

}

async function pressBack() {

    if (curPageNum == 1) {
        return;
    }

    if (!getParticipantInput(curPageNum, true)) {
        return;
    }

    finalButton.innerHTML = "Next";

    curPageNum -= 1;
    presentTweetsOfTheUser(curPageNum);

    renderButton(curPageNum);
    progressBarChange(curPageNum);
}