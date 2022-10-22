let p = 5;
let q = p;
console.log(p, q);
q = 7; // q is reassigned and this case p and q are different 
// memory location 
console.log(p, q);

let x = { job: 'web developer' };
let y = x;
console.log(x, y);
y = { job: 'spiderman' };
console.log(x, y); // same case of p and q they are not separate
// but act like that . for array and object , inside update of certain 
// value will be different.
let c = { name: 'zayed' };
let d = c;
d.name = 'zyva';
console.log(c, d); // now both are changed 




// in this case q value is reassigned so 
