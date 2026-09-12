let peso, contPeso=0, altura,contAltura
let imc = parseInt(prompt("Digite seu peso e sua altura"))
let restante = peso/altura
if(restante >= 18.5 && restante >= 24.9){
    alert("Peso normal")
}else if(restante >= 25 && restante >=29.9 ){
    alert("Sobre peso")
}else if(restante >=30){
    alert("Obesidade")
}
