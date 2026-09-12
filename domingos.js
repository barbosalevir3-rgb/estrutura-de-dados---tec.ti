let qtde_dias = parseInt(prompt("Quantos dias"))
let primeiro_domingo = parseInt(prompt("Primeiro domingo"))
var dias
var contdomingos = 1
for(dias = 1; dias<primeiro_domingo; dias++){
    document.writeln(dias)
}
document.writeln("<br> ")
for(dias = primeiro_domingo; dias<=qtde_dias; dias ++){
    document.writeln(dias)
}
for(primeiro_domingo = primeiro_domingo+7;primeiro_domingo<qtde_dias; primeiro_domingo+=7){
    contdomingos++
}
alert(contdomingos)
