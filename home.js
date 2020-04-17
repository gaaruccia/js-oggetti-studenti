var nomeU = prompt("Inserci un nome")
var cognomeU = prompt("Inserci un cognome")
var etaU = parseInt(prompt("Inserci un età"))
var studenti = [
  {
    "nome": "Luca",
    "cognome": "Marini",
    "eta": 20
  },
  {
    "nome": "Filippo",
    "cognome": "Giangiacomi",
    "eta": 22
  },
  {
    "nome": "Flavio",
    "cognome": "Rimaldo",
    "eta": 24
  }
];
studenti.push({
  "nome": nomeU,
  "cognome": cognomeU,
  "eta": etaU
});
for (var i = 0; i < studenti.length; i++){
  var oggettoI = studenti[i];
  var nomeStudente = oggettoI.nome;
  var cognomeStudente = oggettoI.cognome;
  var etaStudente = oggettoI.eta;
  console.log(nomeStudente + " " + cognomeStudente + " " + etaStudente);
  console.log(nomeStudente + " " + cognomeStudente);
}
