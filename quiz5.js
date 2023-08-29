const questions = [
    {   
        question: "There is a story about a group of youths who fell asleep for over 300 years in a cave. What Surah mentions this story??",
        answers: [
            {text: "Surah Maryam", correct: false},
            {text: "Surah Al-Kahf", correct: true},
            {text: "Surah Ar-Rahman", correct: false},
            {text: "Surah Yaseen", correct: false},
        ]
    },

    {   
        question: "Which prophet's name is repeated and discussed the most in the Qur'an?",
        answers: [
            {text: "Prophet Ibrahim (AS)", correct: false},
            {text: "Prophet Isa (AS)", correct: false},
            {text: "Prophet Musa (AS)", correct: true},
            {text: "Prophet Muhammad (SAW)", correct: false},
        ]
    },

    {   
        question: "What lies in the feet of your mother?",
        answers: [
            {text: "Shoes", correct: false},
            {text: "Your Father", correct: false},
            {text: "Child", correct: false},
            {text: "Paradise", correct: true},
        ]
    },

    {   
        question: "Which prophet suffered from a skin disease?",
        answers: [
            {text: "Prophet Yaqub (AS)", correct: false},
            {text: "Prophet Haroon (AS)", correct: false},
            {text: "Prophet Saleh (AS)", correct: false},
            {text: "Prophet Ayyub (AS)", correct: true},
        ]
    },

    {   
        question: "What was the name of the Queen of Sheba?",
        answers: [
            {text: "Zulaikha", correct: false},
            {text: "Bilqis", correct: true},
            {text: "Sarah", correct: false},
            {text: "Khawla", correct: false},
        ]
    },

    {   
        question: "What were the names of the two sons of Prophet Adam (AS)?",
        answers: [
            {text: "Hadi and Madi", correct: false},
            {text: "Habil and Qabil", correct: true},
            {text: "Hadila and Qabila", correct: false},
            {text: "Idris and Qaroon", correct: false },
        ]
    },

    {   
        question: "What was the name of the nephew of Prophet Ibrahim (AS), who was also a Prophet?",
        answers: [
            {text: "Prophet Lut (AS)", correct: true},
            {text: "Prophet Hud (AS)", correct: false},
            {text: "Prophet Dawood (AS)", correct: false},
            {text: "Prophet Suleiman (AS)", correct: false},
        ]
    },

    {   
        question: "Muharram is the ___________ Month of the Islamic calender?",
        answers: [
            {text: "Third", correct: false},
            {text: "Ninth", correct: false},
            {text: "First", correct: true},
            {text: "Last", correct: false},
        ]
    },

    {   
        question: "What side did the Prophet (SAW) used to sleep on?",
        answers: [
            {text: "On His Back", correct: false},
            {text: "On His Left Side", correct: false},
            {text: "On His Front Side", correct: false},
            {text: "On His Right Side", correct: true},
        ]
    },

    {   
        question: "Which Messenger was sent to guide the people of Madyan?",
        answers: [
            {text: "Prophet Hud (AS)", correct: false},
            {text: "Prophet Saleh (AS)", correct: false},
            {text: "Prophet Lut (AS)", correct: false},
            {text: "Prophet Shu'ayb (AS)", correct: true},
        ]
    },

    {   
        question: "Where was the last surah revealed?",
        answers: [
            {text: "Makkah", correct: true},
            {text: "Madinah", correct: false},
            {text: "Abyssinia", correct: false},
            {text: "Abwa", correct: false},
        ]
    },

    {   
        question: "How many categories of rivers in Jannah does Allah mention?",
        answers: [
            {text: "2", correct: false},
            {text: "4", correct: true},
            {text: "7", correct: false},
            {text: "1", correct: false},
        ]
    },

    {   
        question: "How many fountaines are there in Jannah?",
        answers: [
            {text: "1", correct: false},
            {text: "2", correct: false},
            {text: "3", correct: true},
            {text: "4", correct: false},
        ]
    },

    {   
        question: "The 3 fountains in Jannah are called Kafoor, Zanjabeel and ___________?",
        answers: [
            {text: "Tasneem", correct: true},
            {text: "Noura", correct: false},
            {text: "Al-Kawthar", correct: false},
            {text: "Almasa", correct: false},
        ]
    },

    {   
        question: "Who will be the first person to enter Jannah?",
        answers: [
            {text: "Prophet Muhammad (SAW)", correct: true},
            {text: "Prophet Adam (AS)", correct: false},
            {text: "Prophet Ibrahim (AS)", correct: false},
            {text: "Prophet Yaqub (AS)", correct: false},
        ]
    },
]

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuesIndex = 0;
let score = 0;

//start the quiz
function startQuiz(){
    currentQuesIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

//show next questions
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuesIndex]
    let questionNo = currentQuesIndex + 1;
    questionElement.innerHTML = questionNo + ". "+currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click",selectAnswer);
    });
}

//hiding previous question's options
function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);  
    }
}

//determining whether the answer selected is correct or not
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true"

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = 'Block';
}

function handleNextButton(){
    currentQuesIndex++;
    if (currentQuesIndex <questions.length){
        showQuestion();
    } else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if (currentQuesIndex < questions.length){
        handleNextButton();
    } else{
        startQuiz();
    }
});

startQuiz();