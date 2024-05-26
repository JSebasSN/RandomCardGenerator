/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  function numAleatorio() {
    let letNumAleatorio = [
      "A",
      "Q",
      "K",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "J"
    ];

    let num = Math.floor(Math.random() * letNumAleatorio.length);

    return letNumAleatorio[num];
  }

  let simbolos = [
    "src/img/heart.png",
    "src/img/diamonds.png",
    "src/img/clover.png",
    "src/img/heart_red.png",
    "src/img/clover_red.png",
    "src/img/diamonds_red.png"
  ];

  function objAletorio() {
    let simbol = Math.floor(Math.random() * simbolos.length);
    return simbolos[simbol];
  }

  document.getElementById("change").addEventListener("click", function() {
    let numero = numAleatorio();
    let imagen = objAletorio();

    document.getElementById("simbIni").src = imagen;
    document.getElementById("simbFin").src = imagen;
    document.getElementById("numCard").innerHTML = numero;
  });
};
