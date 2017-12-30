/*
// Clé pour accéder aux données JSON Google Fonts
// AIzaSyCq2Ygc98wsvGDk4XY_ApI4CoXNPu__Q5Y 
https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCq2Ygc98wsvGDk4XY_ApI4CoXNPu__Q5Y
*/

/*
// Exemple de requête trouvé sur le guide pour créer une API Google Fonts
var apiUrl = [];
apiUrl.push('https://fonts.googleapis.com/css?family=');
apiUrl.push(anonymousPro.family.replace(/ /g, '+'));
if (contains('italic', anonymousPro.variants)) {
  apiUrl.push(':');
  apiUrl.push('italic');
}
if (contains('greek', anonymousPro.subsets)) {
  apiUrl.push('&subset=');
  apiUrl.push('greek');
}

// url: 'https://fonts.googleapis.com/css?family=Anonymous+Pro:italic&subset=greek'
var url = apiUrl.join('');
*/

// // // Création d'une classe pour les stats : // // // KESKECE?
var request = new XMLHttpRequest();
var classes;

request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        console.log(request.responseText);
        classes = JSON.parse(request.responseText);
    }
}

request.open('GET', 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCq2Ygc98wsvGDk4XY_ApI4CoXNPu__Q5Y/', true);
request.send();

console.log("Ok");
var nom=classes.family;

