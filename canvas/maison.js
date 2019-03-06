function maison() {
  var id = document.getElementById("maison");
  var context = id.getContext("2d");
  context.strokeStyle =  "#000000";
  context.lineWidth = 10;
  context.beginPath();
  context.rect(400, 200, 250, 200);
  context.lineTo(305,100);
  context.lineTo(550,100);
  context.lineTo(650,200);
  context.moveTo(300,100);
  context.lineTo(200,200);
  context.lineTo(200,400);
  context.lineTo(400,400);
  context.rect(500, 300, 75, 100); //porte
  context.moveTo(510,350);
  context.lineTo(511,351);
  context.rect(420, 220, 75, 60);//fenetre
  context.moveTo(420,220);
  context.lineTo(495,280);
  context.moveTo(495,220);
  context.lineTo(420,280);
  context.stroke();

  context.beginPath();
  context.strokeStyle =  "#7a4b0b";
  context.lineWidth = 10;
  context.moveTo(50,405);
  context.lineTo(50,200);
  
  context.moveTo(100,405);
  context.lineTo(100,200);

  context.arc(100,100,10,0,2*Math.PI);
  context.moveTo(50,200)
  context.arc(50,100,10,0,2*Math.PI);
  context.moveTo(50,400);
  context.bezierCurveTo(100,600,200,400,300,450);
  context.moveTo(300,450);
  context.bezierCurveTo(400,500,500,400,600,450);
  context.stroke();
}

maison();
