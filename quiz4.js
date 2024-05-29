const questions = [
    {   
        question: "Who was the father of Aisha (RA)?",
        answers: [
            {text: "Umar (RA)", correct: false},
            {text: "Ali (RA)", correct: false},
            {text: "Uthman (RA)", correct: false},
            {text: "Abu Bakr (RA)", correct: true},
        ]
    },

    {   
        question: "One of the names of Allah is Ash-Shaheed, what does that mean?",
        answers: [
            {text: "The King", correct: false},
            {text: "The Witness", correct: true},
            {text: "The Everlasting", correct: false},
            {text: "The Protector", correct: false},
        ]
    },

    {   
        question: "Who will kill Dajjal?",
        answers: [
            {text: "Prophet Isa (AS)", correct: true},
            {text: "Prophet Muhammad (SAW)", correct: false},
            {text: "Imam Al-Mahdi", correct: false},
            {text: "Yajuj and Majuj", correct: false},
        ]
    },

    {   
        question: "What are angels made out of?",
        answers: [
            {text: "Fire", correct: false},
            {text: "Wind", correct: false},
            {text: "Light", correct: true},
            {text: "Water", correct: false},
        ]
    },

    {   
        question: "Who will blow the trumpet on the Day of Judgement?",
        answers: [
            {text: "Jibreel", correct: false},
            {text: "Mika'il", correct: false},
            {text: "Izraeel", correct: false},
            {text: "Israfeel", correct: true},
        ]
    },

    {   
        question: "How many levels of Jannah are there?",
        answers: [
            {text: "2", correct: false},
            {text: "6", correct: false},
            {text: "7", correct: true},
            {text: "8", correct: false },
        ]
    },

    {   
        question: "How many gates of Jannah are there?",
        answers: [
            {text: "2", correct: false},
            {text: "6", correct: false},
            {text: "7", correct: false},
            {text: "8", correct: true},
        ]
    },

    {   
        question: "The highest level of Jannah is called _____________?",
        answers: [
            {text: "Jannat-ul-Firdaus", correct: true},
            {text: "Dar-Us-Salam", correct: false},
            {text: "Jannat-ul-Mawa", correct: false},
            {text: "Jannah", correct: false},
        ]
    },

    {   
        question: "How old will the people of Jannah eternally be?",
        answers: [
            {text: "25", correct: false},
            {text: "27", correct: false},
            {text: "30", correct: false},
            {text: "33", correct: true},
        ]
    },

    {   
        question: "How tall will the people of Jannah be?",
        answers: [
            {text: "10 feet", correct: false},
            {text: "30 feet", correct: false},
            {text: "33 feet", correct: false},
            {text: "90 feet", correct: true},
        ]
    },

    {   
        question: "How many gates of hell are there?",
        answers: [
            {text: "1", correct: false},
            {text: "2", correct: false},
            {text: "7", correct: true},
            {text: "8", correct: false},
        ]
    },

    {   
        question: "In Surah Kawthar, the Kawthar that was provided as a gift to the Prophet (SAW), what is it?",
        answers: [
            {text: "A house in Jannah", correct: false},
            {text: "A river in Jannah", correct: true},
            {text: "A mountain in Jannah", correct: false},
            {text: "None of these", correct: false},
        ]
    },

    {   
        question: "What is the name of the Prophet whose father, grandfather and great grandfather were all Prophets?",
        answers: [
            {text: "Ibrahim (AS)", correct: false},
            {text: "Ayyub (AS)", correct: false},
            {text: "Lut (AS)", correct: false},
            {text: "Yusuf (AS)", correct: true},
        ]
    },

    {   
        question: "Which prophet was known for his patience?",
        answers: [
            {text: "Haroon (AS)", correct: false},
            {text: "Ayyub (AS)", correct: true},
            {text: "Musa (AS)", correct: false},
            {text: "Ibrahim (AS)", correct: false},
        ]
    },

    {   
        question: "How many years did Prophet Muhammad (SAW) live in Madinah for?",
        answers: [
            {text: "10 years", correct: true},
            {text: "11 years", correct: false},
            {text: "12 years", correct: false},
            {text: "13 years", correct: false},
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