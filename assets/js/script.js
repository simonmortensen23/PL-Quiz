function addUserFormListener(userForm){
userForm.addEventListener('submit', event => {
    event.preventDefault();
  console.log("hello");
  var user = document.getElementById('user');
  if (user.value.length >= 1){
      console.log(user.value)
    window.location.assign("/game.html")
  } else {
      alert("Must enter username");
  }
  
});
}

function initializeQuiz(quizGame) {
    quizGame.addEventListener('DOMContentLoaded', function() {
    console.log("quiz")
    // add eventlisteners, startup code, etc...
})
} 

function initializeDocument() {
    const userForm = document.querySelector('#user-form');
    if (userForm) addUserFormListener(userForm);
 
    const quizGame = document.querySelector('#quiz');
    if (quizGame) initializeQuiz(quizGame);
 }
 
 window.addEventListener('DOMContentLoaded', initializeDocument);



/**
 * Function that reveals How To Play section in bottom of page
 */
function howToPlay() {
    
    let htp = document.getElementById('htpText')
    if (htp.innerHTML == ""){
        console.log(howToPlay);
    htp.innerHTML = "<h2>How To Play</h2> <br> Rules: <ul><li>Enter Username</li><li>The player gets 10 questions</li><li>1 point per question</li><li>Three wrong answers and the game is over</li></ul>"
    htp.style.width = "50vw"
    htp.style.border = "4px solid #37003c"
    htp.style.boxShadow = "5px 10px #37003c"
} else {
    console.log("Hi")
    htp.innerHTML = ""
    htp.style.border = "0px"
    } 
}