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

// function tambah(x, y) {
//     return x + kaliDua(y)
// }

// function kaliDua(z, v) {
//     return v * z
// }

// console.log(tambah(10, 2))

// var rotateMatrix = function (matrix) {
// 	flipMajorDiagonal(matrix);
// 	reverseEachRow(matrix);
// 	return matrix;
// };

// var flipMajorDiagonal = function (matrix) {
// 	for (let i = 0; i < matrix.length; i++) {
// 		for (let j = i; j < matrix[0].length; j++) {
// 			let temp = matrix[i][j];
// 			matrix[i][j] = matrix[j][i];
// 			matrix[j][i] = temp;
// 		}
// 	}
// 	return matrix;
// };

// var flipMinorDiagonal = function (matrix) {
// 	rotateMatrix(matrix);
// 	matrix.reverse();
// 	return matrix;
// };

// var reverseEachRow = function (matrix) {
// 	for (let i = 0; i < matrix.length; i++) {
// 		matrix[i].reverse();
// 	}
// 	return matrix;
// };

var rotateMatrix = function (matrix) {
	return flipMajorDiagonal(matrix.reverse());
};

var flipMajorDiagonal = function (matrix) {
	return matrix[0].map((column, index) => matrix.map((row) => row[index]));
};
var matrixInput = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
];

// var majorFlip = flipMajorDiagonal(matrixInput); // [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
// var rotated = rotateMatrix(matrixInput); // [[7, 4, 1], [8, 5, 2], [9, 6, 3]]
// var minorFlip = flipMinorDiagonal(matrixInput); // [[9, 6, 3], [8, 5, 2], [7, 4, 1]]

// console.log(majorFlip);

let mat = matrixInput.map((val, i) => {
	return val[0];
});
console.log(mat);
