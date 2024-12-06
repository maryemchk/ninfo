// Global variables
let emojiSequence = [];
let userSequence = [];
let currentLevel = 1;
let score = 0;
let timer;
let timeLeft = 10; // Timer for each level
// Liste des emojis
const emojis = ["🎉", "✨", "❤️", "🌟", "🔥", "🎈", "😀", "😃", "😄", "😁", "🤣", "😂", "😍", "🤩", "😘", "🥰", "😎", "😇", "🤓", "🧐", "😋", "😛", "😜", "🤪", "😝", "😱", "😡", "🥳", "🤯", "🤑", "😢", "😭", "👽️", "👾", "🤖", "💀", "☠️", "💩", "👻", "👹", "👺"];

const emojiContainer = document.getElementById("emoji-container");
const allEmojis = ['🐠', '🦈', '🦀', '🐢', '🦪', '🦑', '🪼', '🦭', '🐡', '🐙', '🐚', '🐊'];
const emojiSequenceContainer = document.getElementById('emoji-sequence');
const emojiOptionsContainer = document.getElementById('emoji-options');
const messageContainer = document.getElementById('message');
const scoreContainer = document.getElementById('score');
const timerContainer = document.getElementById('timer');
function showStatusEmoji(emoji) {
    const statusEmoji = document.getElementById("status-emoji");
    statusEmoji.innerText = emoji;
    statusEmoji.style.display = "block";
    setTimeout(() => {
        statusEmoji.style.display = "none";
    }, 2500); // L'emoji disparaît après 1 seconde
}
// Start the game
function startGame() {
    resetGame();
    generateSequence();
    displaySequence();
    startTimer();
}

// Reset the game
function resetGame() {
    emojiSequence = [];
    userSequence = [];
    currentLevel = 1;
    timeLeft = 10;
    messageContainer.textContent = '';
    score = 0;
    updateScore();
    clearInterval(timer);
    timerContainer.textContent = `Time Left: ${timeLeft} s`;
}

// Generate random emoji sequence
function generateSequence() {
    for (let i = 0; i < currentLevel + 2; i++) {
        const randomEmoji = allEmojis[Math.floor(Math.random() * allEmojis.length)];
        emojiSequence.push(randomEmoji);
    }
}

// Display the sequence temporarily
function displaySequence() {
    emojiSequenceContainer.innerHTML = emojiSequence.map(emoji => `<span class="emoji">${emoji}</span>`).join('');
    emojiOptionsContainer.innerHTML = '';
    setTimeout(() => {
        emojiSequenceContainer.innerHTML = ''; // Hide the sequence
        displayOptions();
    }, 3000); // Show sequence for 3 seconds
}

// Display clickable emoji options in a grid
function displayOptions() {
    const shuffledEmojis = [...new Set([...emojiSequence, ...allEmojis])]
        .sort(() => 0.5 - Math.random());
    emojiOptionsContainer.innerHTML = shuffledEmojis
        .map(emoji => `<div class="emoji" onclick="selectEmoji('${emoji}')">${emoji}</div>`)
        .join('');
}

// Handle emoji selection
function selectEmoji(selectedEmoji) {
    userSequence.push(selectedEmoji);
    const selectedEmojiElement = [...document.querySelectorAll('.emoji')].find(el => el.textContent === selectedEmoji);
    selectedEmojiElement.classList.add('selected');  // Apply the 'selected' class when clicked

    // Keep the selection visible until the user has completed the sequence
    if (userSequence.length === emojiSequence.length) {
        checkSequence();
    }
}

// Check if the user's sequence matches
function checkSequence() {
    if (userSequence.join('') === emojiSequence.join('')) {
        score += 10; // Increase score for correct sequence
        success.play();
        showStatusEmoji("🎉"); // Emoji festif pour une bonne réponse
                
        messageContainer.textContent = `Correct! Level ${currentLevel} completed.`;
        displayCorrectAnimation();
        currentLevel++;
        setTimeout(startGame, 2000);
    } else {
        score -= 5; // Deduct score for incorrect sequence
        brokenheart.play();
        showStatusEmoji("💔");
        messageContainer.textContent = 'Oops! Try again.';
        displayIncorrectAnimation();
        emojiSequenceContainer.innerHTML = emojiSequence.map(emoji => `<span class="emoji">${emoji}</span>`).join('');
    }
    updateScore();
}

// Update the score display
function updateScore() {
    scoreContainer.textContent = `Score: ${score}`;
}

// Display correct animation
function displayCorrectAnimation() {
    messageContainer.classList.add('correct');
    setTimeout(() => messageContainer.classList.remove('correct'), 1000);
}

// Display incorrect animation
function displayIncorrectAnimation() {
    messageContainer.classList.add('incorrect');
    setTimeout(() => messageContainer.classList.remove('incorrect'), 1000);
}

// Timer function
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerContainer.textContent = `Time Left: ${timeLeft} s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            dommage.play();
            showStatusEmoji("😢");
            messageContainer.textContent = 'Time is up! You lost this round.';
            emojiSequenceContainer.innerHTML = emojiSequence.map(emoji => `<span class="emoji">${emoji}</span>`).join('');
        }
    }, 1000);
}
function createEmoji() {
    const emoji = document.createElement("div");
    emoji.classList.add("emoji1");
    emoji.innerText = ["🌊", "🌅", "🌄", "💧", "🌦️", "💦", "🌀", "🐋", "🐳", "🐬", "🐟", "🐠", '🐡', '🦈', '🐙', '🦭', '🦑', '🪼', '🐢', '🦀', '🦞', '🦐',
        '🦪', '🐚', '🪸', '🛶', '🚤', '🛥️', '🛳️', '⚓', '🪝', '🗺️','🏝️', '🌴', '🏖️', '⛱️', '🏄',' 🤿', '🦩', '🏊', '🌿', '🐕‍🦺',
        '💦', '💧', '☔️', '✨', '🌈', '🌩', '🌪', '💫', '🩵', '💙',
        '🥽', '✈️',  '❤️', '💙', '💚',
        '💛', '💜', '🤍', '🌍', '🌙', '☀️', '⭐', '🌊', '🌴', '🌹', '˖°⋆', 
         '•', '𓇼', '𓈒𓏸',  '🏄' ,
        "💦", "🌀", "🐋", "🐳", "🐬", "🐟", "🐠", '🐚', '😢', '🏝️',  '🦭', '🧜', 
         '𓆡', '🐋 ', '🫧', '🌊',"🌀"][Math.floor(Math.random() * 40)];

    const randomX = Math.random() * window.innerWidth;
    const randomDuration = Math.random() * (10 - 7) + 7;

    emoji.style.left = `${randomX}px`;
    emoji.style.animationDuration = `${randomDuration}s`;

    emojiContainer.appendChild(emoji);

    setTimeout(() => {
        emoji.remove();
    }, randomDuration * 1000);
}

setInterval(createEmoji, 500);

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

    // Déterminer la couleur en fonction de l'emoji
    switch (emoji) {
        case '🦀': color = 'linear-gradient(100deg, whitesmoke -100%, rgb(255, 105, 31))'; break; // Orange
        case '🐡': color = 'linear-gradient(100deg, whitesmoke -100%, rgb(250, 184, 30))'; break; // Jaune
        case '🐢': color = 'linear-gradient(100deg, whitesmoke -100%, rgb(25, 207, 134))'; break; // Vert
        case '🐳': color = 'linear-gradient(100deg, whitesmoke -100%, rgb(27, 149, 224))'; break; // Bleu
        case '🦑': color = 'linear-gradient(100deg, whitesmoke -100%, rgb(152, 28, 235))'; break; // Violet
        default: color = '#ffffff'; break; // Blanc par défaut
    }

    // Appliquer la couleur aux titres h1 dans .header
    document.querySelectorAll(' h1').forEach(title => {
        title.style.background = color; // Pour le texte, on change l'arrière-plan
        title.style.webkitBackgroundClip = 'text'; // Ajoute un effet de clip pour texte
        title.style.webkitTextFillColor = 'transparent'; // Rend le texte transparent pour afficher le dégradé
    });

    // Appliquer la couleur de fond aux cartes
    document.querySelectorAll('.emoji').forEach(rectangle => {
        rectangle.style.background = color;
    });
}
const brokenheart = new Audio("brokenheart.mp3");
const dommage = new Audio(" dommage.mp3");
const win=new Audio("win.mp3");
const success =new Audio("Success.mp3");