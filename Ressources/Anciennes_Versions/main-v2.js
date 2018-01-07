/*_____MENU : fox-emoticons_____*/

$pics = document.querySelectorAll('.mood-child')
for (let pic of $pics) {
    pic.addEventListener("click", setSelected)
}

function setSelected(e) {
    let $old = document.querySelector('.selected')
    if ($old) $old.classList.remove("selected")
    $selection = this.classList.add("selected")

    /*_____POP-UP : Apparition_____*/

    $popUp = document.querySelector('#pop-up-child')
    $popUp.style.visibility = "visible";


    /*_____MOOD : Attribution de la font_____*/

    // Accès à l'ID du fox selectionné
    console.log(e.target.id);
    var font = "";

    switch (e.target.id) {
        case "neutral":
            font = "Alfa Slab One";
            break;
        case "happy":
            font = "Patrick Hand";
            break;
        case "sad":
            font = "Pangolin";
            break;
        case "angry":
            font = "Permanent Marker";
            break;
        case "suprised":
            font = "Amatic SC";
            break;
        case "tired":
            font = "Cooming Soon";
            break;
        default:
            font = "Arial";
    }

    $popUp.style.fontFamily = font;

}

// Accès à l'API Google Fonts avec la clé d'accès AIzaSyCq2Ygc98wsvGDk4XY_ApI4CoXNPu__Q5Y
ajaxGet("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCq2Ygc98wsvGDk4XY_ApI4CoXNPu__Q5Y", function (reponse) {

    var fonts = JSON.parse(reponse);
    var famille = document.createElement("p");
    var items = fonts.items;
    var family = "";

    for (var i = 0; i < items.length; i++) {

        switch (fonts.items[i].family) {
            case "Alfa Slab One":
                family = ("Alfa Slab One");
                break;
            case "Patrick Hand":
                family = ("Patrick Hand");
                break;
            case "Pangolin":
                family = ("Pangolin");
                break;
            case "Permanent Marker":
                family = ("Permanent Marker");
                break;
            case "Amatic SC":
                family = ("Amatic SC");
                break;
            case "Cooming Soon":
                family = ("Cooming Soon");
                break;
            default:
                family = ("Arial");
        }

        famille.textContent = "Famille : " + family;
        var infos = document.querySelector("#pop-up-child");
        infos.appendChild(famille);

    }

});



/*

// Accès à l'API Google Fonts avec la clé d'accès AIzaSyCq2Ygc98wsvGDk4XY_ApI4CoXNPu__Q5Y
ajaxGet("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCq2Ygc98wsvGDk4XY_ApI4CoXNPu__Q5Y", function (reponse) {
    var fonts = JSON.parse(reponse);
    // Récupération de certains résultats
    var items = fonts.items[0].family;
    // Affichage des résultats

    var famille = document.createElement("p");
    var cat = document.createElement("p");
    famille.textContent = "Famille : " + items;
    cat.textContent = "Catégorie : " + items;
    var infos = document.querySelector("#pop-up-child");
    infos.appendChild(famille);
});

*/

// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
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