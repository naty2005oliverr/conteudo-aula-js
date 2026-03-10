// Utilizando BigInt
let a = BigInt;("515616351632105631564135210231012110002251485462632158485562632549652632514515184820");
console.log(a);

// Utilizando n
let b = 515616351632105631564135210231012110002251485462632158485562632549652632514515184820n;
console.log(b);

// Utilizando operadores aritméticos no  BigINt
let c = 5156163516321n;
let d = 5156163516321n;
let e = (c * d);
console.log(e);

// Convertendo BigInt
let f = BigInt("2685451515147541521025154");
let fconvertido = Number(f);
console.log(fconvertido);

// Utilizando métodos de comparação em BigInt
let g = 100n;
let h = 90n;
let exComparacao = ( g > h);
console.log(exComparacao);