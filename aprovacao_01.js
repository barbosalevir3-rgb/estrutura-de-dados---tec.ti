var notaexamefinal,contEstudantes=0, contReprovados =0, contAprovados =0, contExameFinal =0
do{
    var nota1= parseFloat(prompt("digite nota1"))
    var nota2= parseFloat(prompt("digite nota2"))
    var media =(nota1+nota2)/2
if(media <=4){
    alert("reprovado")
    contReprovados++
}
else if (media > 4 && media < 6){
    contExameFinal++
    alert("exame final")
    notaexamefinal = parseFloat(prompt("nota final"))
    media=(media+notaexamefinal)/2
    if(media>5){
        alert("aprovado")
        contAprovados++
    }else{
    alert("reprovado")
    contReprovados++
    }
}
else{
    alert("aprovado")
    contAprovados++
}

}while(nota1!=-1 || nota2!=-1)
    alert(`${contAprovados}\n${contReprovados}\n${contExameFinal}`)
