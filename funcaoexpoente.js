function fexpoente(base, expoente){
    let resultado = 1
    for(let i = 1; i <= expoente; i++){
        resultado*=base
    }
    return resultado
}
let base = parseInt(prompt("Base"))
let expoente = parseInt(prompt("Expoente"))
alert(`${base} ^ ${expoente} = ${fexpoente(base, expoente)}`)
