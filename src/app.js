/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dominio = [".com", ".net", ".cl", ".es"];
  let resultado = "";
  for (let indexpronoun = 0; indexpronoun < pronoun.length; indexpronoun++) {
    for (let indexadj = 0; indexadj < adj.length; indexadj++) {
      for (let indexnoun = 0; indexnoun < noun.length; indexnoun++) {
        for (
          let indexdominio = 0;
          indexdominio < dominio.length;
          indexdominio++
        ) {
          resultado =
            resultado +
            pronoun[indexpronoun] +
            adj[indexadj] +
            noun[indexnoun] +
            dominio[indexdominio] +
            "\n";
        }
      }
    }
  }
  console.log(resultado);
  let elemento = document.getElementById("dominios");
  elemento.innerText = resultado;
};
