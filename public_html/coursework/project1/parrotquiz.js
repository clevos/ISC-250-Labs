console.log('Aloha');

// Set up global variables
let arQuestions = []; // Initialize an array to hold the question bank data
let currentQuestionNumber = 1;
let userScore = 0;

// HTML elements
const elQuizItem = document.querySelector('.quiz-item');
// console.log(elQuizItem);
const elQuestionText = document.getElementById('question-container');
const elButtonNext = document.querySelector('button');
const ansTrue = document.getElementById('ans-true');
const ansFalse = document.getElementById('ans-false');
const aniCorrect = document.querySelector('.ani-frame');
const audWrong = new Audio('wrong-ans.mp3');
// ***** Define functions
function loadQuestions() {
    // Load the questions data (number, question text, correct asnswer) into the array.
    arQuestions = [
        ['q1', 'Do parrots eat fruit?', true],
        ['q2', 'Is the Blue Macaw endangered?', true],
        ['q3', 'Does the African Grey not speak clearly?', false],
        ['q4', 'Pesquet parrots fly from branch to branch?', false],
    ]
}

function nextQuestion(qNumber) {
    console.log(qNumber);
    aniCorrect.classList.add('me-hide');
    elQuizItem.classList.remove('me-white');
    displayQuestion(qNumber);



}

function showFeedback(isAnsRight) {
    console.log('isAnsRight ', isAnsRight);

    if (isAnsRight) {
        aniCorrect.classList.remove('me-hide');
        elQuizItem.classList.add('me-white');
        userScore++;
    } else {
        audWrong.play();

    }

    currentQuestionNumber++;
    if (currentQuestionNumber === 5) {
        elButtonNext.innerText = 'finished';
    }
    elButtonNext.classList.remove('me-hide');

}

// Called with oninput event from the HTML.
function checkAnswer() {
    console.log("You clicked");
    const i = currentQuestionNumber - 1;
    const ansCorrect = (arQuestions[i][2]);;
    let isCorrect;
    let userAns;

    if (ansTrue.checked === true) {
        console.log("you clicked true");
        userAns = true;
    } else {
        console.log("you clicked false");
        userAns = false;
    }

    if (userAns === ansCorrect) {
        console.log("Correct!!");
        isCorrect = true;
    } else {
        console.log("Wrong.");
        isCorrect = false;
    }

    showFeedback(isCorrect)
}

function displayQuestion() {
    console.log(currentQuestionNumber);
    if (currentQuestionNumber < 5) {


        let i = (currentQuestionNumber - 1); // Arrays start numbering at '0'.

        // Initialize so both radio buttons are unchecked.
        ansTrue.checked = false;
        ansFalse.checked = false;

        //Remove the 'feedback' css classes
        elQuizItem.classList.remove('ans-right');


        // let myQuestionID = (arQuestions[i][0]);
        let myQuestionText = (arQuestions[i][1]);

        elQuestionText.innerText = myQuestionText;
    } else {
        console.log(userScore);
        elQuizItem.innerHTML='<p>you scored ' + userScore + '/4</p>'
    }
}

loadQuestions();
displayQuestion();