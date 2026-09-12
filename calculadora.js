function adicao(a,b){
    return a + b
}
function subtracao(a, b){
    return a - b
}
function multiplicacao(a, b){
    return a * b
}
function divisao(a, b){
    return a / b
}
do{
var a = parseInt(prompt(""))
var opcao = prompt("Qual operação: 1: adição\n2. subtração\n3. multiplicação\n4. divisão")
var b = parseInt(prompt(""))
switch(opcao){
    case '+':
        alert(adicao(a, b));break;
    case '-':
        alert(subtracao(a, b));break;
    case '*':
        alert(multiplicacao(a, b));break;
    case '/':
        alert(divisao(a, b).toFixed(2));break;
    default:
        alert("Opção inválida")
}
}while(opcao !='0')
