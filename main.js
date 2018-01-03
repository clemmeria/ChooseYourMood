/*_____MENU : fox-emoticons_____*/

$pics = document.querySelectorAll('.mood-child')
for (let pic of $pics) {
    pic.addEventListener("click", setSelected)
}

function setSelected(e) {
    let $old = document.querySelector('.selected')
    if ($old) $old.classList.remove("selected")
    this.classList.add("selected")

    /*_____POP-UP : Apparition_____*/

    $popUp = document.querySelector('.pop-up-text')
    $popUp.style.visibility = "visible";


    /*_____MOOD : Attribution de la font_____*/
    
    // Accès à l'ID du fox selectionné
    console.log(e.target.id);

    switch (e.target.id) {
        case "neutral":
         
            break;
        case "happy":
  
            break;
        case "sad":

            break;
        case "angry":

            break;
        case "suprised":

            break;
        case "tired":

            break;
        default:

    }


}


