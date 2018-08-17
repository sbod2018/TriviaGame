// var timerStart = 20;

// const updateTime = function(){
//     $("#timeCounter").text(timerStart);
//     --timerStart;
//     if(timerStart < 0){
//         clearInterval(counter);
//         timerStart = 20;
//         $("#timeCounter").text(timerStart);
//     }
// }

// //var counter = setInterval (updateTime, 1000);

// const startTimer = function(){
//     setInterval(updateTime, 1000);
// }

// $(".questions").hide();

// $("#button").on("click", function(){
//     $("#button").hide();
//     $(".questions").show();
//     startTimer();
//     /*resetGame();*/

// });

(function () {
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    function buildQuiz() {
        //we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer..
            for (letter in currentQuestion.answers) {

                // ..add an HTML radio button
                answers.push(
                    `<label>
                <input> type="radio" name="questions${questionNumber}" value="${letter}">

                ${letter} :

                ${currentQuestion.answers[letter]}

                </label>`
                );

            }

            //add this question and its answers to the ouput
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>

                <div class="answers"> ${answers.join('')}</div>`
            );
        });
        //finally combine our list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    };

    // myQuestions.forEach((currentQuestion, questionNumber) => {
    //here goes the code we qant to run for wach question
    // console.log(currentQuestion);
    // });

    function showResults() {
        //gather ansqwer containers from our quiz
        const answerContainers = quizContainer.querySelector('.answers');

        //keep track of user's answers
        let numCorrect = 0;

        //for each question..

        myQuestions.forEach((currentQuestion, questionNumber) => {

            //find selected answer 
            const answerContainers = answerContainers[questionNumber];
            const selector = 'input[name=question' + questionNumber + '] :checked';
            const userAnswer = (answerContainers.querySelector(selector) ||
                {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                //add to the number of correct answers
                numCorrect++;

                //color the answers green
                answerContainers[questionNumber].style.color = 'lightgreen';

            }

            //if answer is wrong or blank
            else {
                answerContainers[questionNumber].style.color = 'red';
            }


        });

        //show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + 'out of' +
            myQuestions.length;
    }

    //gather answer containers from out quiz
    const answerContainers = quizContainer.querySelectorAll('.answers')

    //keep track of user;s answers
    let numCorrect = 0;

    //for each question 
    myQuestions.forEach((currentQuestion, questionNumber) => {

        //find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) ||

            {}).value;

        // if answer is correct 
        if (userAnswer === currentQuestion.currentAnswer) {

            // add to the number of correct answers
            numCorrect++;

        }

        // if answer is wrong or blank
        else {

            //color the answers red
            answerContainers[questionNumber].style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;


    buildQuiz();

    //  on submit, show results
    submitButton.addEventListener('click', showResults);


    const myQuestions = [
        {
            question: "What are the names of George's horses at his fictitious house in the Hamptons?",

            answers: {
                a: "Snoopy and Prickley Pete",
                b: "Red and Rover",
                c: "Han and Chewey"
            },
            correctAnswer: "a"

        },
        {
            question: "In 'The Cigar Store Indian' episode, what type of sandwich does Kramer, Jerry, and Elaine get on the subway?",

            answers: {
                a: "Tuna",
                b: "Gyro",
                c: "Rueben"
            },
            correctAnswer: "Gyro"
        },
        {
            question: "After how many dates is a face-to-face break-up required?",

            answers: {
                a: "9",
                b: "4",
                c: "7"
            },
            correctAnswer: "7"
        },
        {
            question: "In 'The Marine Biologist', what is the name of Golden Boy's son?",

            answers: {
                a: "Red Rover",
                b: "Baby Blue",
                c: "Steel your Girl"
            },
            correctAnswer: "Baby Blue"
        },
        {
            question: "What is Newman's moniker when he is hired to eat the muffin stumps?",

            answers: {
                a: "The Jerk",
                b: "The Cleaner",
                c: "The Man"
            },
            correctAnswer: "The Cleaner"
        },

    ];
})();