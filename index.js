let a = 2;
let b = 1;
let c = -2;
let x1, x2;

let D = b*b-4*a*c;

if (D > 0){
    x1 = (-b+Math.sqrt(D))/(2*a);
    x2 = (-b-Math.sqrt(D))/(2*a);
    console.log(`x1 = ${x1}`);
    console.log(`x2 = ${x2}`);
}
else if (D = 0){
    x1 = -b / (2*a);
    console.log('x1 = ${x1}');
}
else{
    console.log('действительных корней нет');
}