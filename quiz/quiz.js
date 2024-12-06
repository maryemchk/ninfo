// script.js
const quizData = [
    {
        question: " Le cerveau humain est souvent comparé aux courants océaniques. Pourquoi ?",
        options: ["Parce qu'ils transportent des nutriments", "Parce qu'ils fonctionnent grâce à des signaux électriques et des connexions complexes", "Parce qu'ils influencent la température", "Parce qu'ils recyclent les cellules usées"],
        answer: "Parce qu'ils fonctionnent grâce à des signaux électriques et des connexions complexes"
    },
    {
        question: "Quel élément de l'océan est analogue au rôle des reins dans le corps humain ",
        options: ["Les récifs coralliens", "Les marées", " Les fosses océaniques", "Les courants sous-marins"],
        answer: "Les récifs coralliens"
    },
    {
        question: "L'estomac, où la digestion se produit, peut être comparé à",
        options: ["Les zones d'upwelling", " Les mangroves", "Les fosses océaniques", " Le phytoplancton"],
        answer: "Les fosses océaniques"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const nextButton = document.getElementById('next-button');
const resultContainer = document.getElementById('result');

function loadQuestion() {
    // Réinitialiser
    nextButton.disabled = true;
    optionsContainer.innerHTML = '';

    // Charger la question actuelle
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Charger les options
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => selectAnswer(button, option);
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(button, selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];

    // Vérifier la réponse
    if (selectedOption === currentQuestion.answer) {
        button.classList.add('correct');
        score++;
    } else {
        button.classList.add('incorrect');
    }

    // Désactiver tous les boutons
    Array.from(optionsContainer.children).forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === currentQuestion.answer) {
            btn.classList.add('correct');
        }
    });

    nextButton.disabled = false;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        displayResult();
    }
});

function displayResult() {
    document.getElementById('question-container').style.display = 'none';
    nextButton.style.display = 'none';
    resultContainer.style.display = 'block';
    resultContainer.textContent = `Vous avez obtenu ${score} / ${quizData.length} bonnes réponses !`;
}

// Charger la première question
loadQuestion();
