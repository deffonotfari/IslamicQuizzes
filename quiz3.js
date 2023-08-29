const questions = [
    {   
        question: "What is the friday prayer called?",
        answers: [
            {text: "Jummah", correct: true},
            {text: "Eid", correct: false},
            {text: "Arafat", correct: false},
            {text: "Friday", correct: false},
        ]
    },

    {   
        question: "Which of the following is not a pillar of islam?",
        answers: [
            {text: "Fasting", correct: false},
            {text: "Praying", correct: false},
            {text: "Giving charity", correct: false},
            {text: "Marriage", correct: true},
        ]
    },

    {   
        question: "What was the original name of Madinah?",
        answers: [
            {text: "Madinah", correct: false},
            {text: "Hira", correct: false},
            {text: "Riyadh", correct: false},
            {text: "Yathrib", correct: true},
        ]
    },

    {   
        question: "How many daughters did the Prophet (SAW) have?",
        answers: [
            {text: "3", correct: false},
            {text: "4", correct: true},
            {text: "5", correct: false},
            {text: "7", correct: false},
        ]
    },

    {   
        question: "Where was the Qur'an first revelead?",
        answers: [
            {text: "Mount Uhud", correct: false},
            {text: "Yathrib", correct: false},
            {text: "Cave Hira", correct: true},
            {text: "Mount Arafat", correct: false},
        ]
    },

    {   
        question: "What was the name of the Prophet's (SAW) mother?",
        answers: [
            {text: "Aminah", correct: true},
            {text: "Zaynab", correct: false},
            {text: "Asiyah", correct: false},
            {text: "Sara", correct: false },
        ]
    },

    {   
        question: "What was made forbidden for men to wear, but women can still wear?",
        answers: [
            {text: "Silver", correct: false},
            {text: "Gold", correct: true},
            {text: "Bronze", correct: false},
            {text: "No material is allowed to be worn", correct: false},
        ]
    },

    {   
        question: "What does Al-Baqarah mean in english?",
        answers: [
            {text: "The sheep", correct: false},
            {text: "The goat", correct: false},
            {text: "The cow", correct: true},
            {text: "The river", correct: false},
        ]
    },

    {   
        question: "Name the surah which mentions the two seas which cannot be mixed?",
        answers: [
            {text: "Al-Baqarah", correct: false},
            {text: "Al-Mulk", correct: false},
            {text: "Ar-Rahman", correct: true},
            {text: "An-nisa", correct: false},
        ]
    },

    {   
        question: "Which messenger was gifted with interpreting dreams?",
        answers: [
            {text: "Prophet Yunus (AS)", correct: false},
            {text: "Prophet Salih (AS)", correct: false},
            {text: "Prophet Lut (AS)", correct: false},
            {text: "Prophet Yusuf (AS)", correct: true},
        ]
    },

    {   
        question: "Which Prophet has no parents?",
        answers: [
            {text: "Prophet Adam (AS)", correct: true},
            {text: "Prophet Isa (AS)", correct: false},
            {text: "Prophet Yahya (AS)", correct: false},
            {text: "Prophet Suleiman (AS)", correct: false},
        ]
    },

    {   
        question: "Who is the first child to accept Islam?",
        answers: [
            {text: "Ali (RA)", correct: true},
            {text: "Abu Bakr (RA)", correct: false},
            {text: "Umar (RA)", correct: false},
            {text: "Bilal (RA)", correct: false},
        ]
    },

    {   
        question: "In Surah Kahf, which animal was mentioned to have been in the cave with the sleepers?",
        answers: [
            {text: "Cat", correct: false},
            {text: "Horse", correct: false},
            {text: "Dog", correct: true},
            {text: "Sheep", correct: false},
        ]
    },

    {   
        question: "What is the number of rewards for offering salah at the Masjid Nabawi?",
        answers: [
            {text: "1000", correct: true},
            {text: "10,000", correct: false},
            {text: "100,000", correct: false},
            {text: "Twice that of regular salah", correct: false},
        ]
    },

    {   
        question: "Which surah is known as 1/3 of the Qur'an?",
        answers: [
            {text: "Suah Al-Falaq", correct: false},
            {text: "Surah Al-Ikhlaas", correct: true},
            {text: "Surah Ar-Rahman", correct: false},
            {text: "Surah Al-Asr", correct: false},
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