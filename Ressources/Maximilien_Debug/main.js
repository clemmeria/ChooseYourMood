$pics = document.querySelectorAll('.pic')
for ( let pic of $pics ) {
  pic.addEventListener("click", setSelected)
}

function setSelected ( e ) {console.log("ok");
  let $old = document.querySelector('.selected')
  if ( $old ) $old.classList.remove("selected")
  this.classList.add("selected")
}