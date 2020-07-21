function doGet(e)
{
  
  // Definition des Variables //
  var i=2;
  var A = "A";
  var nb = A.concat(i);
  var total = "";
  var adresse ="alaoua_o@etna-alternance.net";
  var subject = "Envoi du nom des clients";
  
  //travailler dans l’application SpreadSheet
  var app = SpreadsheetApp ; 
  var classeur = app.getActiveSpreadsheet() ;
  var feuille = classeur.getActiveSheet();
  
  //Verifie que la case n'est pas vide avant d'envoyé.
  while(feuille.getRange(nb).getValue() != "") 
  {
    var message = feuille.getRange(nb).getValue();
    total = total.concat(",").concat(message);
    i++;
    var nb = A.concat(i);
  }
  
  //Verfie si le parametre "mail" est egal a true //
  if(e.parameter.mail == "true")
  {
    MailApp.sendEmail(adresse,subject, total);
  }
  
  //Verifie si le parametre card est egal a true //
  
  if(e.parameter.card == "true")  
  {
    var B= "B";
    var t  ;
    nb = A.concat(i);
    for (t=2 ; t<i ; t++)
    {
      var nom = A.concat(t);
      var prenom = B.concat(t);
      var fichier_n_l =feuille.getRange(nom).getValue();
      var fichier_p_l =feuille.getRange(prenom).getValue();
      var fichier_n = fichier_n_l.toUpperCase();
      var fichier_p = fichier_p_l.toUpperCase();
      var fichier = fichier_n.concat("_").concat(fichier_p).concat("_").concat("CARD");
      DriveApp.createFile(fichier, "contentdetevoir");
      
    }
     
  }
  
 
  
}

  
function doPost(e) {
  
  var intCaseVide = 2; //correspond aux lignes de la sheet
  var A = "A"; //pour selectionner la case A de la sheet -> pareil pour les autres lettres 
  var B = "B";
  var C = "C";
  var D = "D";
  
  //Permet de savoir la prochaine case vide ou je pourrais ecrire 
  var nomCaseVide = A.concat(intCaseVide);
  var prenomCaseVide = B.concat(intCaseVide);
  var emailCaseVide = C.concat(intCaseVide);
  var ageCaseVide = D.concat(intCaseVide);
  
  
  //mise des parametres dans une var
  var params = JSON.parse(e.postData.contents);  
  
  //Utilisation de la spreedSheet Ciblé
  var app = SpreadsheetApp ;
  var classeur = app.getActiveSpreadsheet() ;
  var feuille = classeur.getActiveSheet();
  
  
  //Ecriture dans une case vide en fonction du parametre (nom,prenom,email...)
  if (params.Name != "" )
  {
    
    while(feuille.getRange(nomCaseVide).getValue() != "") 
    {
      intCaseVide++;
      nomCaseVide = A.concat(intCaseVide);
    }
    var value = params.Name;
    feuille.getRange(nomCaseVide).setValue(value);
    intCaseVide = 2;
    
  }
  
  
   if (params.Firstname != "" )
  {
    
    while(feuille.getRange(prenomCaseVide).getValue() != "") 
    {
      intCaseVide++;
      prenomCaseVide = B.concat(intCaseVide);
    }
    var value = params.Firstname;
    feuille.getRange(prenomCaseVide).setValue(value);
    intCaseVide = 2;
  }
  
  
  
   if (params.Email != "" )
  {
    
    while(feuille.getRange(emailCaseVide).getValue() != "") 
    {
      intCaseVide++;
      emailCaseVide = C.concat(intCaseVide);
    }
    var value = params.Email;
    feuille.getRange(emailCaseVide).setValue(value);
    intCaseVide = 2;
  }
  
  
   if (params.Age != "" )
  {
    
    while(feuille.getRange(ageCaseVide).getValue() != "") 
    {
      intCaseVide++;
      ageCaseVide = D.concat(intCaseVide);
    }
    var value = params.Age;
    feuille.getRange(ageCaseVide).setValue(value);
    intCaseVide = 2;
  }
  
  
  return output;
}




