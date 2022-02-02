const play = document.querySelector('#special-form');

play.addEventListener('submit', event => {
    
  event.preventDefault();
  var user = document.getElementById('user');
  if (user.value.length >= 3){
    window.location.assign("/game.html")
   
  } else {
      alert("Username is too short");
  }
  
});



/**
 * Function that reveals How To Play section in bottom of page
 */
function howToPlay() {
    let htp = document.getElementById('htpText')
    if (htp.innerHTML == ""){
    htp.innerHTML = "<h2>How To Play</h2> <br> Rules: <ul><li>Enter Username</li><li>The player gets 10 questions</li><li>1 point per question</li><li>Three wrong answers and the game is over</li></ul>"
    htp.style.width = "50vw"
    htp.style.border = "4px solid #37003c"
} else {
    htp.innerHTML = ""
    htp.style.border = "0px"
    }
}