// function kali(p1) {
//     console.log(p1 * 2)
// }

// function namaFunction(){
//     console.log('Hello World');
// }

// function greeting(name){
//     console.log('Halo ' + name)
// }

// function kurang(angka1, angka2, angka3 = 100){      //default value angka 3 = 100, jika angka 3 tidak diisi
//      angka1 + angka2, 'dan', angka3
// }
// console.log(kurang(1,2))

// function oddEven(num){
//     if (num % 2 == 0){
//         return 'Genap'
//     } else{
//         return 'Ganjil'
//     }
// }
// console.log(oddEven(12))
// var output = ''

// function square(num) {
//     for (var j = 0; j < num; j++) {
//         for (var i = 0; i < num; i++) {
//             output = output + "*";
//         }
//         output += "\n";
//     }
//     return output
// }

// console.log(square(5))
// // console.log(output);

// function tambah1(num){
//     return num + 1;
// }

// function tambah2(num){
//     return num + 2;
// }
// console.log(tambah1(100) + tambah2(200))
// function sayHello() {
//     console.log('Hello')
// }
// setTimeout(sayHello, 3000)
// setInterval(sayHello, 1000)

function tambah(x, y) {
    return x + kaliDua(y)
}

function kaliDua(z, v) {
    return v * z
}

console.log(tambah(10, 2))