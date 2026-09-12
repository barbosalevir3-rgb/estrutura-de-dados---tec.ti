do{
var examefinal, contEstudantes=0, contReprovados=0, contAprovados=0, contExamefinal=0
var nota1 = parseFloat(prompt("Digite a primeira nota"))
var nota2 = parseFloat(prompt("Digite a segunda nota"))
var media = (nota1 + nota2)/2
if(media < 4){
    contReprovados++
    alert("Reprovado :(")
}
else if(media > 4 && media < 6){
    contExamefinal++
    alert("Exame final") 
examefinal = parseFloat(prompt("Digite a nota do exame final"))
media = (media + examefinal)/2
if(media > 5){
    contAprovados++
    alert("Aprovado")
}else
     alert("Reprovado")
     contReprovados++
}else
    alert("Aprovado")
    contAprovados++
}while(nota1!=-1 || nota2 !=-1) // adicionar contadores nos if/else 
    alert(`${contAprovados}\nReprovado:${contReprovados}\n${examefinal}`)
