var player1 = document.getElementById("cat")
var  food1 = document.getElementById("honey")
var xpos = 200
var ypos = 25
var width = 90
var height = 90
var foodEaten = 0
var timeStart = Date.now();
var gameOver;

   playerX = Number(player1.getAttribute("x"))
   playerY = Number(player1.getAttribute("y"))

   foodX = Number(food1.getAttribute("x"))
   foodY = Number(food1.getAttribute("y"))

   function randomNumber(min,max)
   {
    return Math.floor(Math.random()*(max-min+1)+min);
   }

   if (playerX > foodX && playerX < foodX + width && playerY > foodY && playerY < foodY + height) {
     var randX = randomNumber(200,600)
     food1.setAttribute("x", randX)
   }

document.addEventListener("keydown", function (e) {
  if (e.keyCode == 37) {
  document.getElementById("cat").setAttribute("x",xpos-15)
  xpos = xpos-15
}
    if (e.keyCode == 39) {
      document.getElementById("cat").setAttribute("x",xpos+15)
      xpos = xpos+15
   }
 if (e.keyCode == 38) {
   document.getElementById("cat").setAttribute("y",ypos-15)
   ypos = ypos-15
 }
    if (e.keyCode == 40) {
 document.getElementById("cat").setAttribute("y",ypos+15)
 ypos = ypos+15
 }


  playerX = Number(player1.getAttribute("x"))
  playerY = Number(player1.getAttribute("y"))

  foodX = Number(food1.getAttribute("x"))
  foodY = Number(food1.getAttribute("y"))

  if (playerX > foodX && playerX < foodX + width && playerY > foodY && playerY < foodY + height) {
    var randX = randomNumber(200,600)
    food1.setAttribute("x", randX)
  }

if (playerX > foodX && playerX < foodX + width && playerY > foodY && playerY < foodY + height){
  foodEaten = foodEaten + 1
  document.getElementById("Score").textContent = foodEaten
}


if (foodEaten == 3) {
 document.getElementById("gameboard").pauseAnimations()
 var timeStop = Date.now()
 var timeDuration = timeStop - timeStart
 timeDuration = timeDuration/1000
 document.getElementById("totaltime").textContent = timeDuration
 document.getElementById("Score").textContent = foodEaten

}
})
