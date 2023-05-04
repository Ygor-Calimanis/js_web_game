window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);


function onKeyDown(event) {
  var keyCode = event.keyCode;
  //* WASD
  switch (keyCode) {

    case 39: //SD
      keySD = true;
      break;
    case 40: //SB
      keySB = true;
      break;
    case 37: //SE
      keySE = true;
      break;
    case 38: //SC
      keySC = true;
      break;
    case 68: //d
      keyD = true;
      break;
    case 83: //s
      keyS = true;
      break;
    case 65: //a
      keyA = true;
      break;
    case 87: //w
      keyW = true;
      break;
  }

}

function onKeyUp(event) {
  var keyCode = event.keyCode;
  //*Setas do teclado
  switch (keyCode) {

    case 39: //SD
      keySD = false;
      break;
    case 40: //SB
      keySB = false;
      break;
    case 37: //SE
      keySE = false;
      break;
    case 38: //SC
      keySC = false;
      break;
    case 68: //d
      keyD = false;
      break;
    case 83: //s
      keyS = false;
      break;
    case 65: //a
      keyA = false;
      break;
    case 87: //w
      keyW = false;
      break;
  }

}

//? algumas variaveis importantes
var tickX = 10;
var tickY = 10;

var tickX2 = 590;
var tickY2 = 190;

var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;

var keySC = false;
var keySD = false;
var keySE = false;
var keySB = false;

//? valor gerado para a vida de cada robo
let bluelife = Math.floor(Math.random() * 19 + 1)
let redlife = Math.floor(Math.random() * 19 + 1)

document.getElementById("redLife").innerHTML = redlife;
document.getElementById("blueLife").innerHTML = bluelife;


function drawStuff() {
  window.requestAnimationFrame(drawStuff)
  //^ criacao dos robos
  var boneco1 = document.getElementById("drag1")
  var boneco2 = document.getElementById("drag2")

  var canvas = document.getElementById("myCanvas")
  var c = canvas.getContext("2d");

  c.clearRect(0, 0, 800, 800);

  c.drawImage(boneco1, tickX, tickY, 100, 100)

  c.drawImage(boneco2, tickX2, tickY2, 100, 100)


  if (keyD == true) {
    tickX += 4.5;
  }
  if (keyS == true) {
    tickY += 4.5;
  }
  if (keyA == true) {
    tickX -= 4.5;
  }
  if (keyW == true) {
    tickY -= 4.5;
  }
  //^ limites do canvas
  tickX = Math.max(0, Math.min(canvas.width - 100, tickX))
  tickY = Math.max(0, Math.min(canvas.height - 100, tickY))

  //^ velocidade
  if (keySD == true) {
    tickX2 += 4.5;
  }
  if (keySB == true) {
    tickY2 += 4.5;
  }
  if (keySE == true) {
    tickX2 -= 4.5;
  }
  if (keySC == true) {
    tickY2 -= 4.5;
  }

  tickX2 = Math.max(0, Math.min(canvas.width - 100, tickX2))
  tickY2 = Math.max(0, Math.min(canvas.height - 100, tickY2))


  const boneco1y = tickY + 80
  const boneco2y = tickY2 + 80
  const boneco1x = tickX + 80
  const boneco2x = tickX2 + 80

  //$ detecta colisao

  if (tickY <= tickY2 && tickX <= tickX2) {
    if (boneco1y >= tickY2 && boneco1x >= tickX2) {
      takesLife()
    }
  } else if (tickY >= tickY2 && tickX <= tickX2) {

    if (boneco2y >= tickY && boneco1x >= tickX2) {
      takesLife()
    }
  } else if (tickY <= tickY2 && tickX >= tickX2) {
    if (boneco1y >= tickY2 && boneco2x >= tickX) {
      takesLife()
    }
  } else if (tickY >= tickY2 && tickX >= tickX2) {
    if (boneco2y >= tickY && boneco2x >= tickX) {
      takesLife()
    }
  }
}

//$ decrementa vida do robo
function takesLife() {
  if (redlife != 1 && bluelife != 1) {
    redlife -= 1
    bluelife -= 1

    document.getElementById("redLife").innerHTML = redlife;
    document.getElementById("blueLife").innerHTML = bluelife;


    backTOplace()

  } else {
    backTOplace()
    //+ identifica o ganhador e retorna a posicao inicial apos o fim do combate
    if (redlife > bluelife) {
      alert('Red Dragon Wins')
    } else if (bluelife > redlife){
      alert('Blue Dragon Wins')
    }
    else{
      alert('EMEPATE!!')
    }
    location.reload()
  }
}

//+ retorna para a posicao inicial apos colidir 
function backTOplace() {
  tickX = 10
  tickY = 10
  tickX2 = 590
  tickY2 = 190
}

window.requestAnimationFrame(drawStuff);




//! esse caracteres nos comentários são de uma extensão que uso para realçar comentários dentro do código.
//* Better Comments - da para customizar cor e criar novas tags para diferentes comentários.
