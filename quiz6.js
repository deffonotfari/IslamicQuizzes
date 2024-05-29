const questions = [
    {   
        question: "Which Prophet had 11 sons?",
        answers: [
            {text: "Prophet Dawud (AS)", correct: false},
            {text: "Prophet Yunus (AS)", correct: false},
            {text: "Prophet Yaqub (AS)", correct: true},
            {text: "Prophet Yusuf(AS)", correct: false},
        ]
    },

    {   
        question: "Who is the gate keeper of hell?",
        answers: [
            {text: "Rakib", correct: false},
            {text: "Israfeel", correct: false},
            {text: "Jibreel", correct: false},
            {text: "Malik", correct: true},
        ]
    },

    {   
        question: "Which Surah is known as the mother of the Qur'an?",
        answers: [
            {text: "Surah Al-Fatiha", correct: true},
            {text: "Surah Al-Mulk", correct: false},
            {text: "Surah Ar-Rahman", correct: false},
            {text: "Surah Maryam", correct: false},
        ]
    },

    {   
        question: "What age did Muhammad (SAW) receive prophethood?",
        answers: [
            {text: "32", correct: false},
            {text: "35", correct: false},
            {text: "40", correct: true},
            {text: "45", correct: false},
        ]
    },

    {   
        question: "What was the name of the Prophet (SAW)'s father?",
        answers: [
            {text: "Abu Bakr", correct: false},
            {text: "Abdullah", correct: true},
            {text: "Abdur Rahman", correct: false},
            {text: "Abu Zayd", correct: false},
        ]
    },

    {   
        question: "The pillars of Islam are known as?",
        answers: [
            {text: "Qadarul Islam", correct: false},
            {text: "Arkanal Islam", correct: true},
            {text: "Fe Amanillah", correct: false},
            {text: "None of these above", correct: false },
        ]
    },

    {   
        question: "What was the name of the younger brother of Prophet Yusuf (AS)?",
        answers: [
            {text: "Ilyas", correct: false},
            {text: "Yahya", correct: false},
            {text: "Yaqub", correct: false},
            {text: "Benjamin", correct: true},
        ]
    },

    {   
        question: "The punishment of the people of Prophet Hud (AS) was a storm. How long did the storm last for?",
        answers: [
            {text: "8 days", correct: true},
            {text: "6 days", correct: false},
            {text: "5 days", correct: false},
            {text: "1 day", correct: false},
        ]
    },

    {   
        question: "To which prophet did Allah command to build an ark?",
        answers: [
            {text: "Prophet Dawud (AS)", correct: false},
            {text: "Prophet Nuh (AS)", correct: true},
            {text: "Prophet Yusuf (AS)", correct: false},
            {text: "Prophet Adam (AS)", correct: false},
        ]
    },

    {   
        question: "What is the name of the Prophet (SAW)'s paternal grandfather?",
        answers: [
            {text: "Abu Talib", correct: false},
            {text: "Abdul Muttalib", correct: true},
            {text: "Abdullah", correct: false},
            {text: "Hashim", correct: false},
        ]
    },

    {   
        question: "Which prophet was able to control the Jinns and talk to the animals?",
        answers: [
            {text: "Prophet Shu'ayb", correct: false},
            {text: "Prophet Dawud (AS)", correct: false},
            {text: "Prophet Suleiman (AS)", correct: true},
            {text: "Prophet Muhammad (SAW)", correct: false},
        ]
    },

    {   
        question: "To which prophet was the Injeel revealed to by Allah?",
        answers: [
            {text: "Prophet Dawud (AS)", correct: false},
            {text: "Prophet Isa (AS)", correct: true},
            {text: "Prophet Musa (AS)", correct: false},
            {text: "None of these", correct: false},
        ]
    },

    {   
        question: "Which surah starts without 'Bismillah'?",
        answers: [
            {text: "Surah At-Tawbah", correct: true},
            {text: "Surah Ar-Rahman", correct: false},
            {text: "Surah Al-Ahzab", correct: false},
            {text: "Surah An-Namal", correct: false},
        ]
    },

    {   
        question: "Laylatul Qadr is better than...?",
        answers: [
            {text: "1000 days", correct: false},
            {text: "1000 weeks", correct: false},
            {text: "1000 months", correct: true},
            {text: "1000 years", correct: false},
        ]
    },

    {   
        question: "How many sons did Prophet Muhammad (SAW) have?",
        answers: [
            {text: "1 son", correct: false},
            {text: "2 sons", correct: false},
            {text: "3 sons", correct: true},
            {text: "none", correct: false},
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