// Appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès

var $fonts;
var $selectFont;
var $imgs;

// Création des spans qui vont recueillir les infos typographiques à insérer dans la pop-up
var famille = document.createElement("p");
var categorie = document.createElement("p");
var infos = document.querySelector("#pop-up-text");

function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
}

// Accès à l'API Google Fonts avec la clé d'accès AIzaSyCq2Ygc98wsvGDk4XY_ApI4CoXNPu__Q5Y
ajaxGet("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCq2Ygc98wsvGDk4XY_ApI4CoXNPu__Q5Y", function (reponse) {

    $fonts = JSON.parse(reponse);

    // Appel de la fonction setSelected
    $imgs = document.querySelectorAll(".mood-child");
    for (let img of $imgs) {
        img.addEventListener("click", setSelected);
    }

});

function setSelected(e) {

    let $oldImg = document.querySelector(".mood-child-selected");
    if ($oldImg)
        $oldImg.classList.remove("mood-child-selected");

    let $newImg = this;
    $newImg.classList.add("mood-child-selected");

    //Apparition de la fenêtre pop-up contenant l'image du mood et le texte
    var $popUpText = document.querySelector("#pop-up-child");
    var $popUpImg = document.querySelector("#pop-up-img");
    $popUpImg.alt = $newImg.alt;
    $popUpImg.src = $newImg.src;
    document.querySelector("#pop-up-parent").style.visibility = "visible";

    //Changement du menu de selection par modification de class
    for (let img of $imgs) {
        img.classList.add("mood-child-selection");
    }
    var moodParent = document.querySelector(".mood-parent");
    moodParent.classList.add("mood-parent-selection");

    // Recherche du mood selectionné et attribution de la font
    var font = "";
    switch (e.target.id) {
        case "neutral":
            font = "Bitter";
            break;
        case "happy":
            font = "Lobster";
            break;
        case "sad":
            font = "Frijole";
            break;
        case "angry":
            font = "Bangers";
            break;
        case "surprised":
            font = "Amatic SC";
            break;
        case "tired":
            font = "Love Ya Like A Sister";
            break;
        default:
            font = "Lato";
    }

    $selectFont = font;
    // Changement de la font
    $popUpText.style.fontFamily = font;

    // Appel de la fonction searchTypo 
    searchTypo();
}

function searchTypo() {

    // Recherche d'informations sur la font : famille et catégorie
    var items = $fonts.items;
    var family = $selectFont;
    var category = "Non répertorié";
    var variants = items.variants;

    for (var i = 0; i < items.length; i++) {
        category = ($selectFont == items[i].family) ? items[i].category : category;
    }


    // Modification du contenu pour ajouter les infos typographiques
    famille.textContent = "Family : " + family;
    categorie.textContent = "Category : " + category;

    // Ajout des infos en tant qu'enfant au paragraphe pop-up-text
    infos.appendChild(famille);
    infos.appendChild(categorie);

}
