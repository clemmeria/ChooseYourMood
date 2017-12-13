/*
// Clé pour accéder aux données JSON Google Fonts
// AIzaSyCq2Ygc98wsvGDk4XY_ApI4CoXNPu__Q5Y 
https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCq2Ygc98wsvGDk4XY_ApI4CoXNPu__Q5Y
*/

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

