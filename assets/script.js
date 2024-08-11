const stats = {
 wins: 0,
 ties: 0,
 losses: 0,


}

const playgame = function () {

    const options = ["R","P","S",];

   let userChoice = window.prompt("Enter R, P, or S");
   
   if (!userChoice) {
    alert("User choice cannot be empty");
    return;
   };
   
   userChoice = userChoice.toUpperCase()
   
   if (!options.includes(userChoice)) {
       alert("User must choose R,P or S");
       return;
    };
    
    
    
    const computerChoiceIndex  = Math.floor(Math.random() * options.length)
    const computerChoice = options[computerChoiceIndex]
    
    console.log(userChoice, computerChoice);

    if(userChoice === computerChoice) {
        stats.ties++;
        window.alert("TIE!!!");
    } else if (
        (userChoice === "R" && computerChoice ==="S") ||
        (userChoice === "P" && computerChoice ==="R") ||
        (userChoice === "S" && computerChoice ==="P") 
    ) {
        stats.wins++;
        window.alert("You WIN!!");
      } else {
        stats.losses++;
        window.alert("YOU Lose!!");
      }

      window.alert(`Stats:
        Wins: ${stats.wins}
        losses: ${stats.losses}
        Tie: ${stats.ties }`

      )
     const isPlayingAgain = window.confirm("Play Again?");
     if (isPlayingAgain) {
        playgame();
     }
   
}
 playgame();