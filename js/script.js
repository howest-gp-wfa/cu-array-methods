"use strict";

var bezochteSteden = new Array("Brugge", "Granada", "Nice");
var teBezoekenSteden = new Array(3);
var divFeedback;
var feedback = "";
window.addEventListener('load', Initieer);

function Initieer() {
  // invoer = document.getElementById("ingave");
  // feedback = document.getElementById("response");
  VulArrayTeBezoekenSteden();
  KoppelButtons();
  ToonArraysEnFeedback();
}

function KoppelButtons() {
  let btnVoegToe = document.querySelector("#btnVoegToe");
  let btnPop = document.querySelector("#btnPop");  //bezochteSteden
  let btnPush = document.querySelector("#btnPush");  //bezochteSteden
  let btnSplice = document.querySelector("#btnSplice");  //bezochteSteden
  let btnUnshift = document.querySelector("#btnUnshift");  //bezochteSteden
  let btnConcat = document.querySelector("#btnConcat");
  let btnReverse = document.querySelector("#btnReverse");
  let btnSort = document.querySelector("#btnSort");
  let btnSlice = document.querySelector("#btnSlice");
  let btnShift = document.querySelector("#btnShift");
  divFeedback = document.querySelector("#divFeedback");

  btnVoegToe.addEventListener("click", VoegElementToeAanBezochteSteden);
  btnPop.addEventListener("click", VerwijderLaatsteBezochteStad);
  btnPush.addEventListener("click", VoegElementenToeAanBezochteSteden);
  btnSplice.addEventListener("click", VervangBezochteSteden);
  btnUnshift.addEventListener("click", VoegBezochteStedenIn);
  btnConcat.addEventListener("click", VoegArraysSamen); 
  btnReverse.addEventListener("click", KeerVolgordeOm); 
  btnSort.addEventListener("click", Sorteer); 
  btnSlice.addEventListener("click", OnttrekElementen); 
  btnShift.addEventListener("click", VerwijderEersteTeBezoekenStad); 
}

function KeerVolgordeOm() {
  teBezoekenSteden.reverse();
  feedback = 'reverse: keer de volgorde om<br />'+
  "teBezoekenSteden.reverse();<br />"
  ToonArraysEnFeedback();
}

function OnttrekElementen() {
  let onttrokkenSteden = teBezoekenSteden.splice(1,2);
  feedback = 'slice: verwijder een stuk van een array en sla die op in een nieuwe array<br />'+
  "let onttrokkenSteden = teBezoekenSteden.splice(1,2);<br />";
  feedback += `onttrokkenSteden: ${onttrokkenSteden}`;
  ToonArraysEnFeedback();
}

function Sorteer() {
  teBezoekenSteden.sort();
  feedback = 'sort: sorteer de array alfabetisch<br />'+
  "teBezoekenSteden.reverse();<br />"
  ToonArraysEnFeedback();
}

function ToonArraysEnFeedback() {
  let bezochteStedenLijst = "";
  let teBezoekenStedenLijst = "";
  let divElementen1 = document.getElementById("divElementen1");
  let divElementen2 = document.getElementById("divElementen2");

  for(let index in bezochteSteden) {
    bezochteStedenLijst += bezochteSteden[index] + "<br />";
  }

  for (let index in teBezoekenSteden) {
    teBezoekenStedenLijst += teBezoekenSteden[index] + "<br />";
  }

  divElementen1.innerHTML = bezochteStedenLijst;
  divElementen2.innerHTML = teBezoekenStedenLijst;

  divFeedback.innerHTML = feedback;
}

function VervangBezochteSteden() {
  let verwijderdeSteden = bezochteSteden.splice(2, 1, 'Namen', 'Monschau');
  feedback = 'splice: vervang elementen door andere of voeg elementen in <br />'+
  "let verwijderdeSteden = bezochteSteden.splice(2, 1, 'Namen', 'Monschau');<br />";
  feedback += `verwijderdeSteden: ${verwijderdeSteden}`;
  ToonArraysEnFeedback();
}

function VerwijderEersteTeBezoekenStad() {
  let verwijderdeStad = teBezoekenSteden.shift();
  feedback = 'shift: verwijder het eerste element<br />'+
  "teBezoekenSteden.shift();<br />"
  feedback += `verwijderdeStad: ${verwijderdeStad}`;
  ToonArraysEnFeedback();
}

function VerwijderLaatsteBezochteStad() {
  let verwijderdeStad = bezochteSteden.pop();
  feedback = 'pop: verwijder het laatste element <br />'+
  "let verwijderdeStad = bezochteSteden.pop();<br />";
  feedback += `verwijderdeStad: ${verwijderdeStad}`;
  ToonArraysEnFeedback();
}

function VoegBezochteStedenIn() {
  let nieuweLengte = bezochteSteden.unshift('Namen', 'Monschau');
  feedback = 'unshift: voeg elementen toe aan het begin van de array<br />'+
  "let nieuweLengte = bezochteSteden.unshift('Namen', 'Monschau');<br />";
  feedback += `nieuweLengte: ${nieuweLengte}`;
  ToonArraysEnFeedback();
}

function VoegArraysSamen() {
  let samengevoegd = bezochteSteden.concat(teBezoekenSteden);
  feedback = 'concat: voeg twee arrays samen tot een nieuwe<br />'+
  "let samengevoegd = bezochteSteden.concat(teBezoekenSteden);<br />";
  feedback += `samengevoegd: ${samengevoegd}`;
  ToonArraysEnFeedback();
}

function VoegElementToeAanBezochteSteden() {
  let txtNieuwElement = document.getElementById("txtNieuwElement");
  let nieuwElement = txtNieuwElement.value;
  bezochteSteden[bezochteSteden.length] = nieuwElement;
  txtNieuwElement.value = "";
  feedback = 'let txtNieuwElement = document.getElementById("txtNieuwElement");<br />' +
  'let nieuwElement = txtNieuwElement.value;<br />' +
  'bezochteSteden[bezochteSteden.length] = nieuwElement;<br />' ;
  ToonArraysEnFeedback();
}

function VoegElementenToeAanBezochteSteden() {
  let nieuweArrayLength = bezochteSteden.push('Parijs', 'Londen');
  feedback = 'push: voeg elementen toe <br />'+
  "let nieuweArrayLength = bezochteSteden.push('Parijs, Londen');<br />";
  feedback += `nieuweArrayLength: ${nieuweArrayLength}`;
  ToonArraysEnFeedback();
}

function VulArrayTeBezoekenSteden() {
  teBezoekenSteden[0] = "Marseille";
  teBezoekenSteden[1] = "Rome";
  teBezoekenSteden[2] = "Praag";
}




