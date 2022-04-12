let contador: number = 0;
let nodoNum = document.getElementById("numero");

function click() {
  contador++;

  nodoNum.innerHTML = contador;
}
let btnContar = document.getElementById("clickear");
btnContar.addEventListener("click", click);
