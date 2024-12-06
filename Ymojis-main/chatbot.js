var cbot = document.getElementById("chat-box");
var data = {
    chatinit: {
        title: [
            "Bienvenue dans **Race for the Ocean**! 🌊",
            "Merci de rejoindre notre mission pour protéger les océans et leur incroyable biodiversité.",
            "Avez-vous déjà pris des mesures pour réduire votre impact sur les océans ?"
        ],
        options: ["Oui, j'agis déjà !", "Pas encore", "Je veux en savoir plus"]
    },
    oui: {
        title: [
            "Merci pour vos actions en faveur des océans ! 🌟",
            "Saviez-vous que des gestes simples comme réduire l'utilisation de plastique ou choisir des produits écoresponsables peuvent faire une énorme différence ?",
            "Continuons ensemble à protéger nos mers et océans !"
        ],
        options: []
    },
    pas: {
        title: [
            "Pas de problème ! Il n'est jamais trop tard pour commencer. 😊",
            "Voici quelques actions simples pour protéger les océans :",
            "- Réduire l'utilisation de plastique à usage unique.",
            "- Participer à des collectes de déchets sur les plages.",
            "- Soutenir des organisations œuvrant pour la préservation marine.",
            "Prêt à faire un pas ?"
        ],
        options: ["Oui, je veux aider !", "Pas maintenant"]
    },
    jamais: {
        title: [
            "Les océans couvrent 70% de notre planète et abritent une incroyable biodiversité. 🐠",
            "Protéger les océans, c'est protéger notre avenir.",
            "Rejoignez-nous pour apprendre comment agir dès aujourd'hui !"
        ],
        options: ["Découvrir des conseils", "Voir des initiatives"]
    },
    decouvrir: {
        title: [
            "Voici quelques moyens de protéger les océans au quotidien :",
            "- Choisissez des produits respectueux des océans (comme des cosmétiques sans microplastiques).",
            "- Réduisez vos déchets et recyclez autant que possible.",
            "- Soutenez les entreprises qui adoptent des pratiques durables.",
            "Chaque petit geste compte ! 🌊"
        ],
        options: []
    },
    initiatives: {
        title: [
            "Découvrez des initiatives inspirantes :",
            "- Des campagnes de nettoyage des plages.",
            "- La lutte contre la surpêche.",
            "- Le soutien aux réserves marines.",
            "Ces actions font une réelle différence pour nos océans."
        ],
        options: ["Participer à une initiative", "En savoir plus"]
    },
    participer: {
        title: [
            "Merci pour votre engagement ! 💙",
            "Consultez les événements locaux ou rejoignez une organisation pour contribuer activement.",
            "Ensemble, nous pouvons faire une différence pour nos océans."
        ],
        options: []
    }
};

document.getElementById("init").addEventListener("click", showChatBot);

function showChatBot() {
    console.log("Button clicked");
    var chatBotElement = document.getElementById("test");
    var initButton = document.getElementById("init");

    if (chatBotElement && initButton) {
        if (initButton.classList.contains("closed")) {
            chatBotElement.style.display = "block";
            initButton.classList.remove("closed");
            initButton.classList.add("open");
            initButton.innerHTML = '<i class="fa fa-times"></i>';
            initChat();
        } else {
            chatBotElement.style.display = "none";
            initButton.classList.remove("open");
            initButton.classList.add("closed");
            initButton.innerHTML = '<i class="fa fa-comments"></i>';
        }
    } else {
        console.error("Element not found. Check if 'test' and 'init' elements exist.");
    }
}

function initChat() {
    var len1 = data.chatinit.title.length;
    j = 0;
    cbot.innerHTML = "";
    for (var i = 0; i < len1; i++) {
        setTimeout(handleChat, i * 500);
    }
    setTimeout(function () {
        showOptions(data.chatinit.options);
    }, (len1 + 1) * 500);
}

var j = 0;
function handleChat() {
    console.log(j);
    var elm = document.createElement("p");
    elm.innerHTML = data.chatinit.title[j];
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);
    j++;
    handleScroll();
}

function showOptions(options) {
    for (var i = 0; i < options.length; i++) {
        var opt = document.createElement("span");
        var inp = "<div>" + options[i] + "</div>";
        opt.innerHTML = inp;
        opt.setAttribute("class", "opt");
        opt.addEventListener("click", handleOpt);
        cbot.appendChild(opt);
        handleScroll();
    }
}

function handleOpt() {
    console.log(this);
    var str = this.innerText;
    var textArr = str.split(" ");
    var findText = textArr[0];

    document.querySelectorAll(".opt").forEach((el) => {
        el.remove();
    });
    var elm = document.createElement("p");
    elm.setAttribute("class", "test");
    var sp = '<span class="rep">' + this.innerText + "</span>";
    elm.innerHTML = sp;
    cbot.appendChild(elm);

    console.log(findText.toLowerCase());
    var tempObj = data[findText.toLowerCase()];
    
    // Modification de la fonction handleResults
    handleResults(tempObj.title, tempObj.options);
}

// Fonction handleResults modifiée
function handleResults(title, options) {
    for (let i = 0; i < title.length; i++) {
        setTimeout(function () {
            handleDelay(title[i]);
        }, i * 500);
    }

    setTimeout(function () {
        showOptions(options);
    }, title.length * 500);
}

function handleDelay(title) {
    var elm = document.createElement("p");
    elm.innerHTML = title;
    elm.setAttribute("class", "msg");
    cbot.appendChild(elm);
    handleScroll();
}

function handleScroll() {
    var elem = document.getElementById("chat-box");
    elem.scrollTop = elem.scrollHeight;
}