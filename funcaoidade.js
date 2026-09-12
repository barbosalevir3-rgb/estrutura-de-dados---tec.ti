function idade(){
   return 2026 - ano
}
var ano = parseInt(prompt("Ano de nascimento"))
alert((idade()<18)? `Você tem ${idade()} anos e é menor de idade`:
`Você tem ${idade()} e é maior de idade`)
