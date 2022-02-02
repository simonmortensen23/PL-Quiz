const play = document.querySelector('#special-form');

play.addEventListener('submit', event => {
  event.preventDefault();
  var user = document.getElementById('user');
  if (user.value.length >= 3){
  
     window.location.assign("/game.html") 
  } else {
      alert("Username is too short");
  }
  console.log(user);
});



/**
 * Function that reveals How To Play section in bottom of page
 */
function howToPlay() {
    let htp = document.getElementById('htpText')
    htp.innerHTML = '<h2>How To Play</h2> <br> Rules:'
    htp.style.width = "50%"
    htp.style.backgroundColor = "purple"
}