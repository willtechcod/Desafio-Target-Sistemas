
let sp = parseFloat(67836.43);
let rj = parseFloat(36678.66);
let mg = parseFloat(29229.88);
let es = parseFloat(27165.48);
let outros = parseFloat(19849.53);

let total = parseFloat(sp + rj + mg + es + outros);

console.log('Faturamento mensal de R$' + total);

let psp = ((sp / total) * 100);
let prj = ((rj / total) * 100);
let pmg = ((mg / total) * 100);
let pes = ((es / total) * 100);

let pout = ((outros / total) * 100);
console.log('----------------------------------------------------------------------------');
console.log('São Paulo contribuio com ' + (psp.toFixed(2) + ' % no faturamento'));
console.log('----------------------------------------------------------------------------');
console.log('Rio de Janeiro contribuio com ' + (prj.toFixed(2) + ' % no faturamento'));
console.log('----------------------------------------------------------------------------');
console.log('Minas Gerais contribuio com ' + (pmg.toFixed(2) + ' % no faturamento'));
console.log('----------------------------------------------------------------------------');
console.log('Espirito Santo contribuio com ' + (pes.toFixed(2) + ' % no faturamento'));
console.log('----------------------------------------------------------------------------');
console.log('Os demais estádos, com ' + (pout.toFixed(2) + ' % no faturamento'));
console.log('----------------------------------------------------------------------------');