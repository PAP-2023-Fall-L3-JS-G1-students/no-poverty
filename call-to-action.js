let questionnare = document.querySelector('#questionnare');
function showResult() {
    erase();
    
    let lessThanOne = document.querySelector('#lessThanOne').checked;
    let oneToThree = document.querySelector('#one-three').checked;
    let threeToFive = document.querySelector('#three-five').checked;
    let fiveToTen = document.querySelector('#five-ten').checked;

    console.log(lessThanOne, oneToThree, threeToFive, fiveToTen);

    if (lessThanOne) {
        document.querySelector('#option1').style.display = "block";
    } else if(oneToThree) {
        document.querySelector('#option2').style.display = "block";
    } else if(threeToFive) {
        document.querySelector('#option3').style.display = "block";
    } else if(fiveToTen) {
        document.querySelector('#option4').style.display = "block";
    }
}

function erase() {
    document.querySelector('#option1').style.display = "none";
    document.querySelector('#option2').style.display = "none";
    document.querySelector('#option3').style.display = "none";
    document.querySelector('#option4').style.display = "none";
}