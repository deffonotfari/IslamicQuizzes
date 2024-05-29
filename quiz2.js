const questions = [
    {   
        question: "How long did it take to complete the Qur'an?",
        answers: [
            {text: "10 years", correct: false},
            {text: "17 years", correct: false},
            {text: "23 years", correct: true},
            {text: "950 years", correct: false},
        ]
    },

    {   
        question: "How old was the Prophet Muhammad (SAW) when he passed away?",
        answers: [
            {text: "50 years old", correct: false},
            {text: "63 years old", correct: true},
            {text: "100 years old", correct: false},
            {text: "56 years old", correct: false},
        ]
    },

    {   
        question: "Which prophet built the Ka'bah?",
        answers: [
            {text: "Musa (AS)", correct: false},
            {text: "Muhammad (SAW)", correct: false},
            {text: "None, it was the angels", correct: false},
            {text: "Ibrahim (AS)", correct: true},
        ]
    },

    {   
        question: "Who was the first woman to accept Islam?",
        answers: [
            {text: "Khadijah (RA)", correct: true},
            {text: "Fatimah (RA)", correct: false},
            {text: "Aisha (RA)", correct: false},
            {text: "Asiya (RA)", correct: false},
        ]
    },

    {   
        question: "How many pillars of Islam are there?",
        answers: [
            {text: "0", correct: false},
            {text: "5", correct: true},
            {text: "7", correct: false},
            {text: "10", correct: false},
        ]
    },

    {   
        question: "Which prophet was tested by the loss of his family, wealth and health?",
        answers: [
            {text: "Muhammad (SAW)", correct: false},
            {text: "Ayyub (AS)", correct: true},
            {text: "Ibrahim (AS)", correct: false},
            {text: "Yusuf (AS)", correct: false},
        ]
    },

    {   
        question: "Who parted the Red Sea?",
        answers: [
            {text: "Muhammad (SAW)", correct: false},
            {text: "Isa (AS)", correct: false},
            {text: "Musa (AS)", correct: true},
            {text: "Ibrahim (AS)", correct: false},
        ]
    },

    {   
        question: "How many verses are there in surah Al-Baqarah?",
        answers: [
            {text: "284", correct: false},
            {text: "286", correct: true},
            {text: "288", correct: false},
            {text: "290", correct: false},
        ]
    },

    {   
        question: "Who was the first matryr in Islam?",
        answers: [
            {text: "Fatimah (RA)", correct: false},
            {text: "Sumayyah (RA)", correct: true},
            {text: "Aisha (RA)", correct: false},
            {text: "Khadijah (RA)", correct: false},
        ]
    },

    {   
        question: "What places does Allah hate the most?",
        answers: [
            {text: "Schools", correct: false},
            {text: "Houses", correct: false},
            {text: "Marketplaces", correct: true},
            {text: "Graveyards", correct: false},
        ]
    },

    {   
        question: "What are humans made from?",
        answers: [
            {text: "Air", correct: false},
            {text: "Clay", correct: true},
            {text: "Fire", correct: false},
            {text: "Sand", correct: false},
        ]
    },

    {   
        question: "How many names does Allah have?",
        answers: [
            {text: "93", correct: false},
            {text: "95", correct: false},
            {text: "97", correct: false},
            {text: "99", correct: true},
        ]
    },

    {   
        question: "What is the name of the shortest Surah in the Qur'an?",
        answers: [
            {text: "Al-Kawthar", correct: true},
            {text: "Al-Fatiha", correct: false},
            {text: "Al-Asr", correct: false},
            {text: "Al-Ikhlaas", correct: false},
        ]
    },

    {   
        question: "What will the first food for the people in Jannah be?",
        answers: [
            {text: "Dates", correct: false},
            {text: "Fish liver", correct: true},
            {text: "Honey", correct: false},
            {text: "Rice", correct: false},
        ]
    },

    {   
        question: "How many verses are there in the Qur'an?",
        answers: [
            {text: "1111", correct: false},
            {text: "5555", correct: false},
            {text: "6666", correct: true},
            {text: "9999", correct: false},
        ]
    }
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