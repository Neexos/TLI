/*Initialisation de la matrice 10*10 */
var pion = new Array(10);
for (i = 0; i< 10; i++) {
  pion[i] = new Array(10);
  for (j = 0; j< 10; j++) {
    pion[i][j] = 0; //vide
  }
}

var bomb = new Array(10);
for(i=0; i<10; i++){
  bomb[i] = new Array(10);
  for(j=0; j<10; j++){
    if(getRandomInt(2) == 1){
    bomb[i][j] = "b";
    }
    else{
      bomb[i][j] = "a";
    } //affecte a ou b à une case. b = bomb | a = Pas de bomb
  }
}

var id = document.getElementById("tic_tac_toe");
var context = id.getContext("2d");
tic_tac_toe();



/---------------Fonction Creation--------------------/
function tic_tac_toe() {
  context.fillStyle = "#bbbbbb" //couleur fond
  context.fillRect(0,0,1000,1000);

  context.strokeStyle =  "#ffb33c";
  context.lineWidth = 5;
  context.beginPath();
  context.rect(0,0,1000,1000);
  
  for(i=0; i<10; i++){        //lignes verticales
    context.moveTo(i*100,0);
    context.lineTo(i*100,1000);
  }

  for(i=0; i<10; i++){        //lignes horizontales
    context.moveTo(0,i*100);
    context.lineTo(1000,i*100);
  }  
  context.stroke(); 

  
  for(i=0; i<10; i++){				//Dessin des bombes
    for(j=0; j<10; j++){
      if(bomb[i][j] == "b"){
      context.strokeStyle =  "#ffffff";
      context.fillStyle = "#ffffff"
      context.lineWidth = 5;
      context.beginPath();
      context.arc((i*2+1)*50, (j*2+1)*50, 10, 0, 2*Math.PI);
      context.fill();
      context.stroke();
      }
    }
  }
  
  for(i=0; i<10; i++){				//Boucles affichage chiffres
    for(j=0; j<10; j++){
      if(i==0){
	
      }
      else if(j==0){
	
      }
      else if(i==9){
	
      }
      else if(){
	
      }
    }
  }
}




function getRandomInt(max){
  return Math.floor(Math.random()*Math.floor(max));
}

function un(x,y){
  context.beginPath();
  context.fillStyle="#000000"
  context.font ="40px Arial";
  context.fillText("1",(x*2+1)*50,(y*2+1)*50);
  context.stroke();
}

function deux(x,y){
  context.beginPath();
  context.fillStyle="#000000"
  context.font ="40px Arial";
  context.fillText("2",(x*2+1)*50,(y*2+1)*50);
  context.stroke();for(i=0; i<10; i++){
    bomb[i] = new Array(2);
      for(j=0; j<10; j++){
        if(getRandomInt(2) == 1){
          bomb[i][j] = "b";
        }
        else{
          bomb[i][j] = "a";
        } //affecte a ou b à une case. b = bomb | a = Pas de bomb
      }
    }
}

function trois(x,y){
  context.beginPath();
  context.fillStyle="#000000"
  context.font ="40px Arial";
  context.fillText("3",(x*2+1)*50,(y*2+1)*50);
  context.stroke();
}

function quatre(x,y){
  context.beginPath();
  context.fillStyle="#000000"
  context.font ="40px Arial";
  context.fillText("4",(x*2+1)*50,(y*2+1)*50);
  context.stroke();
}

function cinq(x,y){
  context.beginPath();
  context.fillStyle="#000000"
  context.font ="40px Arial";
  context.fillText("5",(x*2+1)*50,(y*2+1)*50);
  context.stroke();
}



