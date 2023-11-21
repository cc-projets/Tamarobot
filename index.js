const textElement = document.getElementById("text");
const responseElement = document.getElementById("response");
const text = "Bienvenue sur le jeu du Tamarobot npc";
let index = 0;

function typeText() {
    textElement.textContent = text.slice(0, index);
    index++;

    if (index <= text.length) {
        setTimeout(typeText, 50); // Ajustez la vitesse d'écriture ici
    } else {
        // Une fois le texte entièrement affiché, attendez 5 secondes, puis effacez-le
        setTimeout(() => {
            textElement.textContent = "";

            // Ensuite, montrez les boutons
            document.getElementById("button-container").style.display = "block";
        }, 1000);
    }
}

typeText();

// Cacher les boutons au départ
document.getElementById("button-container").style.display = "none";

// Gestionnaires d'événements pour les boutons
document.getElementById("btnBonjour").addEventListener("click", () => {
    displayResponse(getRandomResponse([
        "Hey !",
        "Coucou",
        "Je suis ravi de te voir !",
        "Salut !",
        "Bonjour !"
    ]));
});

document.getElementById("btnManger").addEventListener("click", () => {
    displayResponse(getRandomResponse([
        "Nourriture donnée !",
        "Bon appétit !",
        "Miam miam !",
        "Voilà de la nourriture, miaam !",
        "non merci je n'ai pas faim"
    ]));
});

document.getElementById("btnBoire").addEventListener("click", () => {
    displayResponse(getRandomResponse([
        " Boisson donnée !",
        " Voilà à boire !",
        " Santé !",
        " oushddnezaj .. ! ! !",
        " Un peu d'eau pour moi slurp !"
    ]));

    if (response === " oushddnezaj .. ! ! !") {
        // Si la réponse est "oushddnezaj .. ! ! !", affichez-la en rouge
        displayResponse(response, true);
        // Affichez également un avertissement
        displayWarning("Attention Votre Tamarobot a trop bu");
    } else {
        // Sinon, affichez la réponse normalement
        displayResponse(response);
    }
});

document.getElementById("btnChanter").addEventListener("click", () => {
    displayResponse(getRandomResponse([
        "La la la... Une belle berceuse !",
        "je veux chanter avec toi !",
        "Musique douce...",
        "zzzz ...",
        "encore une chanson !"
    ]));
});

function getRandomResponse(responses) {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

function displayResponse(response, isRed = false) {
    const responseElement = document.getElementById("response");
    responseElement.textContent = ""; // Efface la réponse précédente

    if (isRed) {
        responseElement.style.color = "red";
    } else {
        responseElement.style.color = ""; // Réinitialisez la couleur par défaut
    }

    const responseText = response.split("");
    let responseIndex = 0;

    function typeResponse() {
        responseElement.textContent += responseText[responseIndex];
        responseIndex++;

        if (responseIndex < responseText.length) {
            setTimeout(typeResponse, 100); // Ajustez la vitesse d'écriture ici
        }
    }

    typeResponse();
}

// Fonction pour afficher un avertissement
function displayWarning(warningText) {
    const warningElement = document.getElementById("warning");
    warningElement.textContent = warningText;

    // Effacez l'avertissement après un certain délai (par exemple, 5 secondes)
    setTimeout(() => {
        warningElement.textContent = "";
    }, 5000);
}