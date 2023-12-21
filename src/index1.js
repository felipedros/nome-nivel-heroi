let nomeDoHeroi = "Fernanda";
let nivel = 11000;

if (nivel <= 1000) {
    console.log("Nivel ferro");
} else if (nivel >= 1001 && nivel <= 2000) {
    console.log("Nivel bronze");
} else if (nivel >= 2001 && nivel <= 5000) {
    console.log("Nivel prata");
} else if (nivel >= 5001 && nivel <= 7000) {
    console.log("Nivel ouro");
} else if (nivel >= 7001 && nivel <= 8000) {
    console.log("Nivel platina");
} else if (nivel >= 8001 && nivel <= 9000) {
    console.log("Nivel Ascendente");
} else if (nivel >= 9001 && nivel <= 10000) {
    console.log("Nivel imortal");
} else if (nivel >= 10001) {
    console.log("Nivel Radiante");
}

console.log("O Herói de nome " + nomeDoHeroi + " está no nível " + nivel);