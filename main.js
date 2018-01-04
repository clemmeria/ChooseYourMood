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

// Accès à l'API Google Fonts avec la clé d'accès AIzaSyCq2Ygc98wsvGDk4XY_ApI4CoXNPu__Q5Y

ajaxGet("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCq2Ygc98wsvGDk4XY_ApI4CoXNPu__Q5Y", function (reponse) {

    var fonts = JSON.parse(reponse);

    /*_____MENU : fox-emoticons_____*/

    // Appel de la fonction setSelected

    $pics = document.querySelectorAll('.mood-child')
    for (let pic of $pics) {
        pic.addEventListener("click", setSelected)
    }

    // Création des spans qui vont recueillir les infos typographiques
    // A insérer dans la pop-up
    
    var famille = document.createElement("span");
    var categorie = document.createElement("span");

    function setSelected(e) {

        let $old = document.querySelector('.selected')
        if ($old) $old.classList.remove("selected")
        $selection = this.classList.add("selected")

        /*_____POP-UP : Apparition_____*/

        $popUp = document.querySelector('#pop-up-child')
        $popUp.style.visibility = "visible";


        /*_____MOOD : Attribution de la font_____*/

        // Recherche du fox selectionné et attribution de la font

        console.log(e.target.id);
        var font = "";

        switch (e.target.id) {
            case "neutral":
                font = "Patrick Hand";
                break;
            case "happy":
                font = "Merienda";
                break;
            case "sad":
                font = "Pangolin";
                break;
            case "angry":
                font = "Permanent Marker";
                break;
            case "surprised":
                font = "Amatic SC";
                break;
            case "tired":
                font = "Coming Soon";
                break;
            default:
                font = "Arial";
        }

        // Changement de la font 

        $popUp.style.fontFamily = font;

        // Recherche d'informations sur la font :
        // Famille et Catégorie
        
        var items = fonts.items;
        var family = font;
        var variants = items.variants;
        for (var i = 0; i < items.length; i++) {
            if (font == items[i].family) {
                console.log(family);
                category = items[i].category
                console.log(category);
            }
        }
        
        // Modification du contenu pour ajouter les infos typographiques
        
        famille.textContent = "Famille : " + family + " & ";
        categorie.textContent = "Categorie : " + category;
        var infos = document.querySelector("#pop-up-child");
        
        // Ajout des infos en tant qu'enfant à la pop-up parent
        
        infos.appendChild(famille);
        infos.appendChild(categorie);

    }

});