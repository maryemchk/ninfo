let fishEmojis = ["🐟",  "🐡", "🐙", "🦈", "🐳", "🦀"];
const fishMap = [...fishEmojis, ...fishEmojis];

let NatureEmojis = ["🌍",  "🌱", "🌊", "💧", "♻️", "🌞"];
const carMap = [...NatureEmojis, ...NatureEmojis];

let boatEmojis = ["🚤",  "⛵", "🛳️", "⛴️", "🛥️", "🛶"];
const flowerMap = [...boatEmojis, ...boatEmojis];

let WeatherEmojis = ["🌥️", "🌤️", "🌦️", "🌩️", "🌨️", "🌪️"];
const foodMap = [...WeatherEmojis, ...WeatherEmojis];


const emojiTypeMap = [[...fishEmojis],[...NatureEmojis],[...boatEmojis], [...WeatherEmojis]];
let finalEmojiGameSelection = [];

const gameNames = [
    "🐟 ",
    "🌍 ",
    "⛵ ",
    "🌥️ ",

];

let emojiOne;
let emojiTwo;
let arrayIndex = 0;
let clicks = 0;
let points = 0;
let gameStarted = false;

let gameStatusText = null;
let restartButton = null;
let pointsText = undefined;

const numberEmojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣'];

const getPointsEmoji = (points) => {
    return points > 0 && points <= 6 ? numberEmojis[points - 1] : '0️⃣';
}

const showFullScreenEmoji = (emoji) => {
    let overlay = document.getElementById('fullScreenEmojiOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'fullScreenEmojiOverlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '1000';
        overlay.style.fontSize = '15vw';
        document.body.appendChild(overlay);
    }
    overlay.innerHTML = emoji;
    overlay.style.display = 'flex';
    
    // Hide after 1 second
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 850);
};


const showFull_ScreenEmoji = (emoji) => {
    // Create or get the full-screen overlay
    let overlay = document.getElementById('fullScreenEmojiOverlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'fullScreenEmojiOverlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.zIndex = '8000';
        overlay.style.fontSize = '15vw';
        document.body.appendChild(overlay);
    }
    
    // Set and show the emoji
    overlay.innerHTML = emoji;
    overlay.style.display = 'flex';
    
    // Hide after 1 second
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 6000);
};

const shuffleGameType = () => {
    arrayIndex = (arrayIndex + 1) % emojiTypeMap.length;
    finalEmojiGameSelection = [...emojiTypeMap[arrayIndex], ...emojiTypeMap[arrayIndex]];
    const gameTypeTitle = document.getElementById("gameTypeTitle");

    // Modifier le contenu
    gameTypeTitle.innerHTML = `${gameNames[arrayIndex]}`;

    // Ajouter un style pour agrandir la taille
    gameTypeTitle.style.fontSize = "3rem"; // Ajustez selon vos préférences
    gameTypeTitle.style.fontWeight = "bold"; // Rendre plus visible
};


const memoryRandomizer = () => {
    for(let i = finalEmojiGameSelection.length -1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temporaryBox = finalEmojiGameSelection[i];
        finalEmojiGameSelection[i] = finalEmojiGameSelection[j];
        finalEmojiGameSelection[j] = temporaryBox;
    }
};
const sounddisMatch = new Audio("WRONG.mp3");
const clearText = () => {
    sounddisMatch.play();
    showFullScreenEmoji('👎');
    emojiOne.innerText = "";
    emojiTwo.innerText= "";
    emojiOne.style.backgroundColor = "rgb(245, 245, 101)";
    emojiTwo.style.backgroundColor = "rgb(245, 245, 101)";
    setTimeout(playAgain, 850);
    clicks = 0;
};

const playAgain = () => {
    gameStatusText.innerHTML = "Click two cards to find a match";
    if(points === 6) {
        gameStatusText.innerHTML = "Well done you've completed the game!";
        restartButton.disabled = false;
        restartButton.addEventListener("click", handleReplay);
    }
};
const soundMatch = new Audio("Success.mp3");
const winning = new Audio("Celebration.mp3");
const checkResult = () => { 
    if(emojiOne.innerText === emojiTwo.innerText) {
        // Show matched emoji
        soundMatch.play();
        showFullScreenEmoji('👌');
        
        setTimeout(playAgain, 1000);       
        clicks = 0;
        points ++;
        document.getElementById("points").innerHTML = pointsText + getPointsEmoji(points);

        
        // Si tous les points sont gagnés
        if(points === 6) {
            winning.play();
            // Afficher l'emoji de victoire
            showFull_ScreenEmoji('🎖️🏆');
            
            // Arrêter le timer
            clearInterval(timerInterval);
            
            // Désactiver les cartes
            disableCards();
            
            // Activer le bouton de redémarrage
            restartButton.disabled = false;
        }
    } else {
        setTimeout(clearText, 2000);
    }
};
// Rest of the code remains the same as in the original script
// ... (includes all other functions like startTimer, handleStartGame, etc.)

let timerInterval;
let remainingTime = 60;
let progressBar;

const startTimer = () => {
    remainingTime = 60;
    progressBar = document.getElementById('timerProgress');
    timerInterval = setInterval(() => {
        remainingTime--;
        updateProgressBar();
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            gameStatusText.innerHTML = "Temps écoulé ! 😞 Essayez encore.";
            disable_Cards();
        }
    }, 1000);
};


const updateProgressBar = () => {
    const percentage = (remainingTime / 60) * 100;
    const timerEmojiElement = document.getElementById('timerEmoji');
    const progressBar = document.getElementById('timerProgress');
    
    // Animation des émojis avec des effets plus dynamiques
    if (percentage > 66) {
        timerEmojiElement.innerHTML = '😄';
        timerEmojiElement.style.transform = 'translate(-50%, -50%) rotate(0deg)';
    } else if (percentage > 33) {
        timerEmojiElement.innerHTML = '😰';
        timerEmojiElement.style.transform = 'translate(-50%, -50%) rotate(15deg)';
    } else {
        timerEmojiElement.innerHTML = '😱';
        timerEmojiElement.style.transform = 'translate(-50%, -50%) rotate(-15deg)';
    }
    
    // Mise à jour de la position
    timerEmojiElement.style.left = `${percentage}%`;
    
    // Mise à jour de la barre de progression
    progressBar.style.width = `${percentage}%`;
};

const stopTimer = () => {
    clearInterval(timerInterval);
    if (progressBar) {
        progressBar.style.width = '0%';
    }
};
// Fonction pour désactiver les cartes après la fin du minuteur
const disableCards = () => {
    const cards = document.querySelectorAll("#memoryCardContainer .card-text");
    cards.forEach((card) => {
        card.removeEventListener("click", showEmoji); // Supprimer les événements de clic
        card.style.backgroundColor = "rgb(245, 245, 101)"; // Réinitialiser l'apparence des cartes
    });

};
const LoseGame = new Audio("Lose.mp3");
const disable_Cards = () => {
    const cards = document.querySelectorAll("#memoryCardContainer .card-text");
    cards.forEach((card) => {
        card.removeEventListener("click", showEmoji); // Supprimer les événements de clic
        card.style.backgroundColor = "rgb(245, 245, 101)"; // Réinitialiser l'apparence des cartes
    });
    LoseGame.play();

    // Afficher l'emoji de défaite
    showFull_ScreenEmoji('😭');

    // Activer le bouton de redémarrage
    restartButton.disabled = false;
    restartButton.addEventListener("click", handleReplay);
};
// Modifions d'abord la fonction showEmoji pour vérifier si le jeu a commencé
const showEmoji = (event) => {
    // Si le jeu n'a pas commencé (timer pas lancé), on ignore le clic
    if (!gameStarted) {
        return;
    }

    const p_tag = event.target;
    if (p_tag.innerText === "") {
        clicks++;
        if (clicks <= 2) {
            p_tag.innerHTML = finalEmojiGameSelection[p_tag.pindex];
            chooseGameButton.disabled = true;
            if (clicks === 1) {
                emojiOne = p_tag;
                emojiOne.style.backgroundColor = "rgb(230, 230, 62)";
            } else if (clicks === 2) {
                emojiTwo = p_tag;
                emojiTwo.style.backgroundColor = "rgb(230, 230, 62)";
                checkResult();
            }
        }
    }
};

// Modifions la fonction handleStartGame pour initialiser correctement le jeu
const handleStartGame = () => {
    if (!gameStarted) {
        gameStarted = true; // Active le jeu
        startTimer(); // Démarre le timer
        gameStatusText.innerHTML = "Find the pairs before the end of time. ⏳!";
        
        // Désactive le bouton GO une fois le jeu commencé
        const goButton = document.getElementById("goButton");
        goButton.disabled = true;
    }
};

// Modifions la fonction handleReplay pour réinitialiser correctement
const handleReplay = () => {
    let contentOfCard = document.getElementById("memoryCardContainer");
    
    // Vider complètement le conteneur de cartes
    contentOfCard.innerHTML = '';
    
    // Réinitialiser le type de jeu et recréer les cartes
    shuffleGameType();
    for (let j = 0; j < finalEmojiGameSelection.length; j++) {
        const cardTag = document.createElement("p");
        cardTag.className = "card-text";
        cardTag.id = "card";
        cardTag.addEventListener("click", showEmoji);
        cardTag.pindex = j;
        contentOfCard.appendChild(cardTag);
    }

    gameStatusText.innerHTML = "Appuyez sur GO pour commencer !";
    points = 0;
    document.getElementById("points").innerHTML = pointsText + getPointsEmoji(points);
    chooseGameButton.disabled = false;
    restartButton.disabled = true;
    
    // Réactive le bouton GO
    const goButton = document.getElementById("goButton");
    goButton.disabled = false;
    
    // Réinitialise l'état du jeu
    gameStarted = false;
    memoryRandomizer();
    
    // Arrête et réinitialise le timer
    stopTimer();
};

// Modifions la fonction initialize pour mettre le bon message initial
const initalise = () => {
    shuffleGameType();
    for (let j = 0; j < finalEmojiGameSelection.length; j++) {
        const cardTag = document.createElement("p");
        cardTag.className = "card-text";
        cardTag.id = "card";
        cardTag.addEventListener("click", showEmoji);
        cardTag.pindex = j;
        document.getElementById("memoryCardContainer").appendChild(cardTag);
    }
    
    gameStatusText = document.getElementById("gameStatus");
    gameStatusText.innerHTML = ""; // Message initial modifié
    pointsText = document.getElementById("points").innerHTML;
    chooseGameButton = document.getElementById("chooseGameButton");
    restartButton = document.getElementById("restartButton");
    restartButton.disabled = true;

    timerText = document.getElementById("timer");
    document.getElementById("gameTypeTitle").innerHTML = `${gameNames[arrayIndex]}`;
    memoryRandomizer();

    const goButton = document.getElementById("goButton");
    goButton.addEventListener("click", handleStartGame);
};


function createFloatingEmoji() {
    const emojiList = [
        "🐬", "🐳", "🐟", "🐠", "🐡", "🐙", "🦑", "🦈", "🦀", "🦞", 
        "🦐", "🪸", "🐚", "🌊", "🏄‍♂️", "🏄‍♀️", "🏄‍", "🏄🏽‍♀️", 
        "🚤", "⛵", "🛶", "🏝️", "🏖️", "🌴", "🌅", "⚓", "🐋", "🪼", 
        "🐾", "🌌", "🌍", "🐉", "🐊", "🌞", "💧", "☂️", "⛱️", "🏊‍♂️", 
        "🏊‍♀️", "🏊🏽‍♂️", "🏊🏽‍♀️", "🐦", "🌁", "🌀", "🌬️", "💦", 
        "🌈", "☀️", "⭐", "🐌", "🐜", "🌳", "🖼️", "⛅", "🏞️"
    ];
    const emojiContainer = document.getElementById('floating-emojis');

    // Créer un nouvel emoji
    const emoji = document.createElement('span');
    emoji.className = 'emoji';
    emoji.innerText = emojiList[Math.floor(Math.random() * emojiList.length)];

    // Position horizontale aléatoire
    emoji.style.left = `${Math.random() * 100}%`;
    emoji.style.fontSize = `${20 + Math.random() * 40}px`; // Taille aléatoire

    // Ajouter l'emoji au conteneur
    emojiContainer.appendChild(emoji);

    // Supprimer l'emoji après l'animation
    setTimeout(() => {
        emojiContainer.removeChild(emoji);
    }, 10000);
}

// Générer des emojis toutes les 500ms
setInterval(createFloatingEmoji, 500);

// Calls the initalise function when the page is fully loaded
window.addEventListener('load', () => {
    initalise();
    setInterval(createFloatingEmoji, 500);
});
function playSoundAnim(emoji) {
    const soundMap = {
        "🦀": "../sounds/scorpion.mp3",
        "🐡": "../sounds/Fish.mp3",
        "🐢": "../sounds/Turtle.mp3",
        "🐳": "../sounds/dauphin.mp3",
        "🦑": "../sounds/Octopus.mp3"
    };

    // Vérifiez si l'emoji existe dans le mapping des sons
    if (soundMap[emoji]) {
        const sound = new Audio(soundMap[emoji]);
        sound.play();
    } else {
        console.error("Son non défini pour cet emoji :", emoji);
    }
}
function changeColor(emoji) {
    playSoundAnim(emoji);
    let color;
    switch (emoji) {
        case '🦀': color = 'linear-gradient(100deg, whitesmoke -100%, rgb(255, 105, 31))'; break; // Orange
        case '🐡': color = 'linear-gradient(100deg, whitesmoke -100%, rgb(250, 184, 30))'; break; // Jaune
        case '🐢': color = 'linear-gradient(100deg, whitesmoke -100%, rgb(25, 207, 134))'; break; // Vert
        case '🐳': color = 'linear-gradient(100deg, whitesmoke -100%, rgb(27, 149, 224))'; break; // Bleu
        case '🦑': color = 'linear-gradient(100deg, whitesmoke -100%, rgb(152, 28, 235))'; break; // Violet
        default: color = '#ffffff'; break;
    }

    document.querySelectorAll('.header-section').forEach(rectangle => {
        rectangle.style.background = color;
    });
    document.querySelectorAll('.card-text').forEach(rectangle => {
        rectangle.style.background = color;
    });
    

    document.querySelector('.feedback-section').style.background = color;
}