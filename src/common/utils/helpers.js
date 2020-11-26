const reverse = (s) => s.split("").reverse().join("")

export const separator = (txt, num = 3, sym = ',') => {
  txt = txt.toString().replace(/,/g, '')
  let arr = []
  for (let i = 0; i < Math.ceil(txt.length / num); i++) {
    arr.push(reverse(txt).substring(i * num, i * num + num))
  }
  return reverse(arr.join(sym))
}

export const calcCartPrices = arr => arr.reduce(((ac, cu) => ac + (cu.count * cu.prod.price.final_price)), 0)