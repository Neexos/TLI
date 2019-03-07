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

  
  for(i=0; i<10; i++){			//Boucles affichage chiffres (i=ligne, j=colonne)
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
          
        if(i==0 && (j>0 && j<9)){	//ligne haut
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
      }
        
      else if((i>0 && i<9) && j==0){	//colone gauche

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
	  if(j==0){         		//coin bas gauche 
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
          
          if(j==9){         		//coin bas doite 
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
	  
	  if(j>0 && j<9){		//ligne bas
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
	if(i>0 && i<9){			//colonne droite
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
        
    }
  }
  

  for(i=0; i<10; i++){			//Test
    for(j=0; j<10; j++){
      if(bomb[i][j]=="a"){
	var num = pion[i][j].toString();
	nombre(j,i,num);
      }
      else{
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
  
}




function getRandomInt(max){
  return Math.floor(Math.random()*Math.floor(max));
}

function nombre(x,y,numero){
  context.beginPath();
  context.fillStyle="#000000";
  context.font ="40px Arial";
  context.fillText(numero.toString(),(x*2+1)*50,(y*2+1)*50);
  context.stroke();
}

function deux(x,y){
  context.beginPath();
  context.fillStyle="#000000";
  context.font ="40px Arial";
  context.fillText("2",(x*2+1)*50,(y*2+1)*50);
  context.stroke();
}

function trois(x,y){
  context.beginPath();
  context.fillStyle="#000000";
  context.font ="40px Arial";
  context.fillText("3",(x*2+1)*50,(y*2+1)*50);
  context.stroke();
}

function quatre(x,y){
  context.beginPath();
  context.fillStyle="#000000";
  context.font ="40px Arial";
  context.fillText("4",(x*2+1)*50,(y*2+1)*50);
  context.stroke();
}

function cinq(x,y){
  context.beginPath();
  context.fillStyle="#000000";
  context.font ="40px Arial";
  context.fillText("5",(x*2+1)*50,(y*2+1)*50);
  context.stroke();
}



