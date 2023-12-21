let nomeDoHeroi = "Fernanda";
let nivel = 11000;
let mensagemNivel = "";

if (nivel <= 1000) {
    mensagemNivel = "Nivel ferro";
} else if (nivel >= 1001 && nivel <= 2000) {
    mensagemNivel = "Nivel bronze";
} else if (nivel >= 2001 && nivel <= 5000) {
    mensagemNivel = "Nivel prata";
} else if (nivel >= 5001 && nivel <= 7000) {
    mensagemNivel = "Nivel ouro";
} else if (nivel >= 7001 && nivel <= 8000) {
    mensagemNivel = "Nivel platina";
} else if (nivel >= 8001 && nivel <= 9000) {
    mensagemNivel = "Nivel Ascendente";
} else if (nivel >= 9001 && nivel <= 10000) {
    mensagemNivel = "Nivel imortal";
} else if (nivel >= 10001) {
    mensagemNivel = "Nivel Radiante";
}

console.log("O Herói de nome " + nomeDoHeroi + " está no " + mensagemNivel);