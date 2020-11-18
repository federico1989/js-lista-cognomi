// Lista Cognomi
// Chiedere all'utente il cognome
var writeSurname = prompt("Inserisci il tuo cognome");
// Inserirlo in un array con altri cognomi: ‘Bianchi', ‘Rossi', ‘Duzioni', ‘Balsano', ‘Verdi'
var listSurname = [
  "Bianchi",
  "Rossi",
  "Duzioni",
  "Balsano",
  "Verdi"
];

listSurname.push(writeSurname);
var orderSurname = listSurname.sort();
console.log(listSurname);
// Stampa la lista ordinata alfabeticamente
for (var i = 0; i < orderSurname.length; i++) {
  var item = orderSurname[i];
  var contenutoLista = document.getElementById("lista-completa").innerHTML;
  document.getElementById("lista-completa").innerHTML = contenutoLista + "<li>" + item + "</li>";
}
// Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
document.getElementById("posizione").innerHTML = "Il tuo cognome è alla posizione numero: " + (orderSurname.indexOf(writeSurname)+1);
