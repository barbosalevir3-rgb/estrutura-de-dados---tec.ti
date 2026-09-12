const numeros = []
var tamanho = parseInt(prompt(""))
function inserir(){
    for(let i = 0; i < tamanho; i++){
        numeros[i] = parseInt(prompt("Escreva os numeros"))
    }
}
//alert(numeros.length)
function mostrar(){
    for(let i = 0; i < tamanho; i++){
        document.writeln(numeros[i])
    }
}
inserir();// essa parte é chamando a linha 3 ^^
mostrar();// essa parte também chama a linha 8 ^^
