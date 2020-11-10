// Array

// let nama = 'Lian';
// let search = 'Bambang'
// let namaStorage = [
// nama, 
// 'Bambang', 
// 'Susilo',
// nama, 
// 'Bambang', 
// 'Susilo',
// nama, 
// 'Bambang', 
// 'Susilo',
// nama, 
// 'Bambang', 
// 'Susilo',];

// namaStorage.splice(1, 1)
// namaStorage.splice(3, 1)
// namaStorage.splice(5, 1)
// namaStorage.splice(7, 1)

// for(var i = 1; i <= namaStorage.length; i+=2){  //kenapa var nya dimulai dari 1? karna bambang posisinya ada di 1
//     console.log(namaStorage.splice(i,1))
// }
// console.log(namaStorage)

// console.log(namaStorage[0])

// let panjangArray = namaStorage.length;

// for (let i = 0; i < panjangArray; i++){
//     console.log(namaStorage[i]); // memanggil string yang ada di dalam array namaStorage sesuai dengan nilai i
// }  

// namaStorage.pop()
// console.log(namaStorage)

// .pop() = menghilangkan data index terakhir
// .push() = menambahkan data index terakhir
// .shift() = menghilangkan data index pertama
// .unshift() = menambahkan data index pertama

// var nama = [
//     'Adhi', 
//     'Indriawan', 
//     'Tanjung', 
//     'Adhit', 
//     'Marlon', 
//     'Brando'
// ];
// console.log(nama.slice(2,5))

// let buah = ['apel', 'rambutan', 'mangga']
// buah[buah.length] = 'nanas'// ini sama aja kaya pake .push()
// console.log(buah)

// var buah1 = ['apel', 'nanas']
// var buah2 = ['pisang', 'jeruk']
// var buah3 = [buah1, buah2]
// // var buahgabung = buah1.concat(buah2);
// console.log(buah3[1][1])

var buah = ['mangga', 'pisang']
var buah1 = 'apel'
buah.push(buah1)
console.log(buah)