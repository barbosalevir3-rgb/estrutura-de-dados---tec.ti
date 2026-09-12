function fatorial(){
  let fatorial = 1, i = 1
  while(i <= numero){
    fatorial*=i
    i++
  }
   return fatorial
}
let numero = parseInt(prompt("Número"))
alert(`${numero}!=${fatorial()}`)
