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
/*var request = new XMLHttpRequest();
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
var nom=classes.family;*/



/*_____MENU : fox-emoticons_____*/

var $moods = document.querySelectorAll(".mood-child");

for(var image of $moods) {
	console.log(image.alt);
}

function setSelected(event) {
    var $oldMood = document.querySelector(".mood-child-selected");
	$oldMood.classList.remove("mood-child-selected"); //Ces deux lignes fonctionnaient jusquà ce que jajoute les suivantes qui annulent leur effet

	//("$"+this.alt).classList.add("mood-child-selected");
	(event.target).classList.add("mood-child-selected");
	console.log(event.target); // NI this NI event.target NE FONCTIONNENT
	var $newMood = document.querySelector(".mood-child-selected");
	//console.log($newMood.classList);

	/*switch(this.alt) {
		case "neutral":
			break;

		case "3D":
			
			break;

		case "web":
			
			break;

		case "cinema":
			
			break;

			default:
	}*/

	/*for(var image of $moods) {
		console.log($moods.classList);
		image.classList.add("mood-child-selected");
	}*/

}

/*$moods.forEach(function(mood) {
 	mood.addEventListener("click", setSelected(this))});*/

/* for(var image of $moods) {
 	image.addEventListener("click", setSelected(this))});*/

var $neutral = document.querySelector("#neutral");
$neutral.addEventListener("click", setSelected());
var $happy = document.querySelector("#happy");
$happy.addEventListener("click", setSelected());
var $sad = document.querySelector("#sad");
$sad.addEventListener("click", setSelected());
var $angry = document.querySelector("#angry");
$angry.addEventListener("click", setSelected());
var $surprised = document.querySelector("#surprised");
$surprised.addEventListener("click", setSelected());
var $tired = document.querySelector("#tired");
$tired.addEventListener("click", setSelected());



/*
var $moodSelected = document.querySelector("#mood-child-selected");;
var $moodDisplayed;

function setMenu(event) {
	
}

$moods.addEventListener("click", setMenu);

function setSelected(event) {
	//$moodSelected.src = $moodDisplayed.src;
}
*/