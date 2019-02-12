// all.js


function $_GET(param) {
	var vars = {};
	window.location.href.replace( location.hash, '' ).replace( 
		/[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
		function( m, key, value ) { // callback
			vars[key] = value !== undefined ? value : '';
		}
	);

	if ( param ) {
		return vars[param] ? vars[param] : null;	
	}
	return vars;
}


function remiseZero(){
  
  document.getElementById("destination").value = '';
  document.getElementById("name").value = '';
  document.getElementById("firstname").value = '';
  document.getElementById("mail").value = '';
  document.getElementById("dateGo").value = '';
  document.getElementById("dateBack").value = '';
  document.getElementById("adults").value = 0;
  document.getElementById("kids").value = 0;
  document.getElementById("breakfast").value = '';
  document.getElementById("commentary").value = '';
  
}


function dateDiff(date1, date2){
    var diff = {}                           // Initialisation du retour
    var tmp = date2 - date1;
 
    tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
    diff.sec = tmp % 60;                    // Extraction du nombre de secondes
 
    tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
    diff.min = tmp % 60;                    // Extraction du nombre de minutes
 
    tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
    diff.hour = tmp % 24;                   // Extraction du nombre d'heures
     
    tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
    diff.day = tmp;
     
    return diff;
}

function fnReservation(){
  
  var destination;
  var nom;
  var prenom;
  var mail;
  var depart;
  var retour;
  var nbadultes;
  var nbenfants;
  var petitdej;
  var commentaire;
  

    destination = $_GET('destination');
//    alert(destination);

   nom = $_GET("name");
//   alert(nom);
   
   prenom = $_GET("firstname");
//   alert(prenom);
   
   mail = $_GET("mail");
//   alert(mail);
   
   depart = $_GET("dateGo");
//   alert(depart);
   
   retour = $_GET("dateBack");
//   alert(retour);
   
   nbadultes = parseInt($_GET("adults"));
//   alert(nbadultes);
   
   nbenfants = parseInt($_GET("kids"));
//   alert(nbenfants);
   
   petitdej = $_GET("breakfast");
//   alert(petitdej);
   
   commentaire = $_GET("commentary");
//   alert(commentaire);
  
   //alert(petitdej);
   
   var prixAdulte;
   
   switch (destination) {
     case 'Stolipinovo':
       prixAdulte = 50;
     break;
     case 'Cwmystwyth':
       prixAdulte = 200;
     break;
     case 'Fucking':
       prixAdulte = 150;
     break;
     case 'Kaunas':
       prixAdulte = 500;
     break;
     case 'Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu':
       prixAdulte = 12345;
     break;
     case 'Charleroi':
       prixAdulte = 99.99;
     break;
     default:
       prixAdulte = 0;
   }
   
   prixEnfant = 0.4*prixAdulte;
       
   
   var nbPersonnes;
   
   nbPersonnes = nbenfants + nbadultes;
   
   if (petitdej == 'on'){
     prixPetitDej = nbPersonnes * 8;
   } else {
     prixPetitDej = 0;
  };
   
   var prixTotal;
   
   var nbJours;
   
   alert(depart);
   
   dateDep = new Date(depart);
   dateRet = new Date(retour);
   
   var tmp;
   tmp = dateDiff(dateRet, dateDep);
   alert(tmp);
   
//    prixTotal = nbenfant * prixEnfant + nbadultes * prixAdulte + prixPetitDej * nbJours;
   
   var resultat;
   resultat = "<h3>Merci pour votre réservation !</h3> <p> Votre réservation pour " + destination + " pour " + nbPersonnes + " personnes (" + nbadultes + " adultes et " + nbenfants + " enfants) a bien été enregistrée.</p>";
  
    
   document.getElementById("idTest").innerHTML = resultat;
 
  
}

