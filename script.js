let ism = ['Vor', 'Aziza', 'Tut', 'Nos', 'Kok', 'Avtobis', 'Jentra'];

let a = [];
let b = []; 

for (let ismlar of ism) {
    let normalized = ismlar.toLowerCase(); 
    let reversed = normalized.split('').reverse().join('');
    
    if (normalized === reversed) {
        a.push(ismlar); 
    } else {
        b.push(ismlar); 
    }
}

console.log( a);
console.log( b);
