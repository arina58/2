let s = 2000000
let p = 10
let year = 5

let pm = (p/100)/12
let km = year*12
let ep = s *pm*Math.pow((1+pm),km)/(Math.pow((1+pm),km)-1)
let perep = km*ep-s
console.log(perep)