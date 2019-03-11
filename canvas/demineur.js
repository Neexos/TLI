/*Initialisation de la matrice 10*10 */
var finish = false;

var pion = new Array(10);
for (i = 0; i< 10; i++) {
  pion[i] = new Array(10);
  for (j = 0; j< 10; j++) {
    pion[i][j] = 0; //vide
  }
}

var clic = new Array(10);       //test final du nb de cases découvertes 
for (i = 0; i< 10; i++) {
  clic[i] = new Array(10);
  for (j = 0; j< 10; j++) {
    clic[i][j] = 0; //vide
  }
}

var bomb = new Array(10);
for(i=0; i<10; i++){
  bomb[i] = new Array(10);
  for(j=0; j<10; j++){
    if(getRandomInt(5) == 1){
    bomb[i][j] = 'b';
    }
    else{
      bomb[i][j] = 'a';
    } //affecte a ou b à une case. b = bomb | a = Pas de bomb
  }
}

var val = Array(10);

var etat = document.getElementById("etat");

function souris(event){
  var x = event.clientX;
  var y = event.clientY;
  var btn = event.button; //0=click gauche | 1=click molette | 2=click droit
  //document.getElementById('coordonnes').value = x + ', ' + y + ', ' + btn;
  if(finish == false){
    getPos(x,y);
  }
}




var id = document.getElementById("demineur");
var context = id.getContext("2d");

var taille_canvas = id.getBoundingClientRect();
var decal_droite = taille_canvas.left;
var decal_haut = taille_canvas.top;
//console.log(decal_droite, decal_haut);

context.fillStyle = "#bbbbbb"; //couleur cases
context.fillRect(0,0,1000,1000);
context.strokeStyle =  "#000000";
context.lineWidth = 3;
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

demineur();

/---------------Fonction Creation--------------------/
function demineur() {

  for(i=0; i<10; i++){			//Boucles incrémentation chiffres (i=ligne, j=colonne)
    for(j=0; j<10; j++){
      if(bomb[i][j]=="a"){
        if(i==0 && j==0){	       	//coin haut gauche 

            if(bomb[i][j+1]=="b"){
              pion[i][j]++;
            }
            if(bomb[i+1][j+1]=="b"){
              pion[i][j]++;
            }
            if(bomb[i+1][j]=="b"){
              pion[i][j]++;
            }
	      }

        if(i==0 && j==9){         	//coin haut droite 
          if(bomb[i][j-1]=="b"){
            pion[i][j]++;
          }
          if(bomb[i+1][j-1]=="b"){
            pion[i][j]++;
          }
          if(bomb[i+1][j]=="b"){
            pion[i][j]++;
          }
        }
          
        if(i==0 && j>0 && j<9){	    //ligne haut
	        if(bomb[i][j-1]=="b"){
            pion[i][j]++;
          }
          if(bomb[i][j+1]=="b"){
            pion[i][j]++;
          }
          if(bomb[i+1][j-1]=="b"){
            pion[i][j]++;
          }
          if(bomb[i+1][j]=="b"){
            pion[i][j]++;
          }
          if(bomb[i+1][j+1]=="b"){
            pion[i][j]++;
	        }
        }
      
        
        else if(i>0 && i<9 && j==0){	//colone gauche

          if(bomb[i-1][j]=="b"){
            pion[i][j]++;
          }
          if(bomb[i+1][j]=="b"){
            pion[i][j]++;
          }
          if(bomb[i-1][j+1]=="b"){
            pion[i][j]++;
          }
          if(bomb[i][j+1]=="b"){
            pion[i][j]++;
          }
          if(bomb[i+1][j+1]=="b"){
            pion[i][j]++;
          }
            
        }
          
        else if(i==9){	  
          if(j==0){             		  //coin bas gauche 
            if(bomb[i-1][j]=="b"){
              pion[i][j]++;
            }
            if(bomb[i-1][j+1]=="b"){
              pion[i][j]++;
            }
            if(bomb[i][j+1]=="b"){
              pion[i][j]++;
            }
          }
            
          if(j==9){         		      //coin bas doite 
            if(bomb[i-1][j]=="b"){
              pion[i][j]++;
            }
            if(bomb[i-1][j-1]=="b"){
              pion[i][j]++;
            }
            if(bomb[i][j-1]=="b"){
              pion[i][j]++;
            }
          }
      
          if(j>0 && j<9){		          //ligne bas
            if(bomb[i][j-1]=="b"){
              pion[i][j]++;
            }
            if(bomb[i][j+1]=="b"){
              pion[i][j]++;
            }
            if(bomb[i-1][j-1]=="b"){
              pion[i][j]++;
            }
            if(bomb[i-1][j]=="b"){
              pion[i][j]++;
            }
            if(bomb[i-1][j+1]=="b"){
              pion[i][j]++;
            }
          }
        }
          
        else if(j==9){
          if(i>0 && i<9){			        //colonne droite
            if(bomb[i-1][j]=="b"){
              pion[i][j]++;
            }
            if(bomb[i+1][j]=="b"){
              pion[i][j]++;
            }
            if(bomb[i-1][j-1]=="b"){
              pion[i][j]++;
            }
            if(bomb[i][j-1]=="b"){
              pion[i][j]++;
            }
            if(bomb[i+1][j-1]=="b"){
              pion[i][j]++;
            }
          }
        }

        else if(i>0 && i<9 && j>0 && j<9){  //tout le reste
          if(bomb[i-1][j]=="b"){
            pion[i][j]++;
          }
          if(bomb[i+1][j]=="b"){
            pion[i][j]++;
          }
          if(bomb[i-1][j-1]=="b"){
            pion[i][j]++;
          }
          if(bomb[i][j-1]=="b"){
            pion[i][j]++;
          }
          if(bomb[i+1][j-1]=="b"){
            pion[i][j]++;
          }
          if(bomb[i-1][j+1]=="b"){
            pion[i][j]++;
          }
          if(bomb[i][j+1]=="b"){
            pion[i][j]++;
          }
          if(bomb[i+1][j+1]=="b"){
            pion[i][j]++;
          }
        }

      }
    }
  }
  //affichage();
}

/---------------Fonction affichage--------------------/
function affichage(){

  for(i=0; i<10; i++){			//Boucle affichage chiffre / bomb
    for(j=0; j<10; j++){
      if(bomb[i][j]=='a'){
        if(pion[i][j]!=0 && pion[i][j]!='x'){
          var num = pion[i][j].toString();
          nombre(j,i,num);
        }
      }
      else{
        context.strokeStyle =  "#ffffff";
        context.fillStyle = "#ff0000";
        context.lineWidth = 5;
        context.beginPath();
        context.arc((j*2+1)*50, (i*2+1)*50, 20, 0, 2*Math.PI);
        context.fill();
        context.stroke();
      }
    }
  }
}

/---------------Fonction getPos--------------------/
function getPos(posx, posy){
  var y = Math.floor((posx - decal_droite)/100);
  var x = Math.floor((posy - decal_haut)/100);
  //console.log(x,y);
  testBomb(x,y);
}

/---------------Fonction testBomb--------------------/
function testBomb(x, y){
  if(bomb[x][y]=='b'){
    Perdu(x,y);
  }
  else if(pion[x][y]==0){
    Recursif(x,y);
  }
  else{
    afficheNombre(x,y);
  }
}

/---------------Fonction Perdu--------------------/
function Perdu(x,y){
  affichage();
  //setTimeout(function(){alert('YOU LOOSE \n\n Pour rejouer appuyer sur OK');},1500);
  etat.innerText = 'PERDU';
  document.getElementById("reload").style.display = "block";
  afficheBomb(x,y);
  finish = true;
}

/---------------Fonction afficheBomb--------------------/
function afficheBomb(x,y){
  context.strokeStyle =  "#ffffff";
  context.fillStyle = "#ff0000";
  context.lineWidth = 5;
  context.beginPath();
  context.arc((y*2+1)*50, (x*2+1)*50, 20, 0, 2*Math.PI);
  context.fill();
  context.stroke();
}


/---------------Fonction Recursif--------------------/
function Recursif(x,y){
  console.log(x,y);
  var matrix = new Array(9);
    // Ligne du dessus
  matrix[1] = [x-1, y-1];
  matrix[2] = [x-1, y];
  matrix[3] = [x-1, y+1];
    // Ligne cliquer
  matrix[4] = [x, y-1];
  matrix[5] = [x, y];
  matrix[6] = [x, y+1];
    // Ligne du dessous
  matrix[7] = [x+1, y-1];
  matrix[8] = [x+1, y];
  matrix[9] = [x+1, y+1];
  console.log(matrix);

  console.log(pion);
  matrix.forEach(function(element) {
    var x = element[0];
    var y = element[1];
    if((x>-1 && y>-1) && (x<10 && y<10)){
      if(pion[x][y] == 0){
        context.fillStyle = "#eeeeee";
        context.lineWidth = 5;
        context.beginPath();
        context.fillRect(y*100, x*100, 100, 100);
        context.stroke();
        pion[x][y] = 'x'; 
        Recursif(x,y);
      }
      else{
        afficheNombre(x, y);
      }
    }
  });

}

function check(matrice){

}

/---------------Fonction afficheNombre--------------------/
function afficheNombre(x,y){
  context.fillStyle = "#eeeeee";
  context.lineWidth = 5;
  context.beginPath();
  context.fillRect(y*100, x*100, 100, 100);
  context.stroke();
  if(pion[x][y]!=0 && pion[x][y] != 'x'){
    var num = pion[x][y].toString();
    nombre(y,x,num);
  }
}



/---------------Fonction getRandom--------------------/
function getRandomInt(max){
  return Math.floor(Math.random()*Math.floor(max));
}



/---------------Fonction nombre--------------------/
function nombre(x,y,numero){
  context.beginPath();
  context.fillStyle="#000000";
  context.font ="40px Arial";
  context.fillText(numero,(x*2+1)*50,(y*2+1)*50);
  context.stroke();
}