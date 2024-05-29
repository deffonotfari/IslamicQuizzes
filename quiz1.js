const questions = [
    {   
        question: "What is our Holy Book called?",
        answers: [
            {text: "Bible", correct: false},
            {text: "Qur'an", correct: true},
            {text: "Torah", correct: false},
            {text: "Gita", correct: false},
        ]
    },

    {   
        question: "What is the longest surah in the Qur'an?",
        answers: [
            {text: "Al-Fatiha", correct: false},
            {text: "Al-Nas", correct: false},
            {text: "Al-Baqarah", correct: true},
            {text: "Al-Asr", correct: false},
        ]
    },

    {   
        question: "Which language was the Qur'an revealed in",
        answers: [
            {text: "Arabic", correct: true},
            {text: "English", correct: false},
            {text: "Greek", correct: false},
            {text: "Pashto", correct: false},
        ]
    },

    {   
        question: "Who controlled the Jinns?",
        answers: [
            {text: "No one", correct: false},
            {text: "Sulaiman (AS)", correct: true},
            {text: "Yaqoob (AS)", correct: false},
            {text: "Musa (AS)", correct: false},
        ]
    },

    {   
        question: "How old was the Prophet SAW when his mother passed away?",
        answers: [
            {text: "9", correct: false},
            {text: "3", correct: false},
            {text: "5", correct: false},
            {text: "6", correct: true},
        ]
    },

    {   
        question: "How many surahs are there in the Qur'an?",
        answers: [
            {text: "114", correct: true},
            {text: "121", correct: false},
            {text: "111", correct: false},
            {text: "115", correct: false},
        ]
    },

    {   
        question: "How many prophets were mentioned in the Qur'an?",
        answers: [
            {text: "100", correct: false},
            {text: "14", correct: false},
            {text: "25", correct: true},
            {text: "5", correct: false},
        ]
    },

    {   
        question: "Who was the first prophet?",
        answers: [
            {text: "Isa (AS)", correct: false},
            {text: "Yusha (AS)", correct: false},
            {text: "Musa (AS)", correct: false},
            {text: "Adam (AS)", correct: true},
        ]
    },

    {   
        question: "How many pages does the Qur'an have?",
        answers: [
            {text: "604", correct: true},
            {text: "620", correct: false},
            {text: "607", correct: false},
            {text: "606", correct: false},
        ]
    },

    {   
        question: "How old was Khadija (RA) when she married Muhammad (SAW)",
        answers: [
            {text: "51", correct: false},
            {text: "45", correct: false},
            {text: "47", correct: false},
            {text: "40", correct: true},
        ]
    },

    {   
        question: "How long did prophet Nuh (AS) live for?",
        answers: [
            {text: "950 years", correct: true},
            {text: "1001 years", correct: false},
            {text: "1000 years", correct: false},
            {text: "600 years", correct: false},
        ]
    },

    {   
        question: "How many children did Prophet Muhammad (SAW) have?",
        answers: [
            {text: "4 children", correct: false},
            {text: "3 children", correct: false},
            {text: "7 children", correct: true},
            {text: "3 children", correct: false},
        ]
    },

    {   
        question: "Which is the best drink mentioned in the Qur'an?",
        answers: [
            {text: "Milk", correct: true},
            {text: "Water", correct: false},
            {text: "Wine", correct: false},
            {text: "Beer", correct: false},
        ]
    },

    {   
        question: "What are jinns made out of?",
        answers: [
            {text: "Air", correct: false},
            {text: "Fire", correct: true},
            {text: "Clay", correct: false},
            {text: "Light", correct: false},
        ]
    },

    {   
        question: "How tall is the Ka'bah",
        answers: [
            {text: "50 feet tall", correct: true},
            {text: "60 feet tall", correct: false},
            {text: "40 feet tall", correct: false},
            {text: "55 feet tall", correct: false},
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