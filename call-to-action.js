let questionnare = document.querySelector('#questionnare');
function generate(event) {
    event.preventDefault();

    let lessThanOne = document.querySelector('#lessThanOne').value;
    let oneToThree = document.querySelector('#one-three').value;
    let threeToFive = document.querySelector('#three-five').value;
    let fiveToTen = document.querySelector('#five-ten').value;

    console.log(lessThanOne, oneToThree, threeToFive, fiveToTen, moreThanTen);
}

