
function getCoin(num){
  const monedas = [50,20,10,5,2,1]
  const newCambio = monedas.map(element => {
    if (element<=num){
      let modulus = num % element
      let factor = Math.floor(num/element)
      num = modulus
      return 1 * factor
    } else {
      return 0
    }
  })
  return newCambio.reverse()
}
let num = 5

console.log(getCoin(num))