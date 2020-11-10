// var angka; 

// for (angka = 0; angka <= 10; angka++){
//     console.log(angka);
// }
// console.log(angka, 'console')

// for (let angka = 1; angka <= 30; angka++){
//     if (angka % 2 == 0){
//         console.log("GENAP \t", angka
            
//         )
//     }else{
//         console.log('GANJIL \t', angka)
//     }
// }

// let output = ""

//     for (let i = 0; i < 5; i++){
//       output+= '*'
//     }

let output = ""
for(let j = 0; j < 10; j++){
    for(let i = 10; j < i ; i--){
        output+= '*'
    } output += '\n'
}
console.log(output)