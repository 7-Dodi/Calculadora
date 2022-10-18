function inserir(num){
    let numero= document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML= numero + num;
}
function apagar(){
    document.getElementById('resultado').innerHTML= "";
}
function calcular(){
    let resultado= document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML= eval(resultado);
}