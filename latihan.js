// var arrProduct = [
// 	{
// 		id: 15945893849,
// 		category: "Fast Food",
// 		name: "Noodle",
// 		price: 5000,
// 		stock: 9,
// 	},
// 	{
// 		id: 15945893843,
// 		category: "Electronic",
// 		name: "Headphone",
// 		price: 500000,
// 		stock: 10,
// 	},
// 	{
// 		id: 15945893844,
// 		category: "Clothing",
// 		name: "Hoodie",
// 		price: 300000,
// 		stock: 7,
// 	},
// 	{
// 		id: 15945893845,
// 		category: "Fruit",
// 		name: "Apple",
// 		price: 10000,
// 		stock: 8,
// 	},
// ];

// let newarr = arrProduct.find((val) => {
// 	return val.id === 15945893845;
// });
// console.log(newarr);
// var array = [
// 	{ name: "A", usia: 10 },
// 	{ name: "B", usia: 20 },
// ];

// var abc = array.map((val) => {
// 	val;
// });
// console.log(abc);

// let newArr = ''
// for(var i = 0; i<cart.length;i++){
// 	newArr += cart[i].name + cart[i].qty; cart[i].price;
// }
// let nama = "Adhiindriawan Tanjung";
// let nama2 = nama.toLowerCase();
// let search = "i";
// let includenama = nama.includes(search);
// console.log(includenama);

// let arr = [{ nama: "adhi", usia: "20", pekerjaan: "coder" }];
// let nama = [{ ...arr, sex: "pria", hobby: "makan" }];
// console.log(nama);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let arr2 = [10, 11, 12, , 13, 14, 15, 16, 17, 18];

// let arr3 = [...arr, ...arr2];
// // console.log(arr3);
// let arr = [{ nama: "Adhi", umur: "20" }];
// let arr2 = [{ job: "pelukis", gender: "pria" }];
// // let arr3 = { ...arr, ...arr2 };
// console.log(arr3);
// const circle = [
// 	{
// 		radius: 10,
// 	},
// ];
// const coloredCircle = [
// 	{
// 		...circle,
// 		color: "black",
// 	},
// ];

// console.log(coloredCircle);
// comment123
let bintang = "";

//KOTAK
// for (let i = 0; i < 5; i++) {
// 	for (let j = 0; j < 5; j++) {
// 		bintang += "*";
// 	}
// 	bintang += "\n";
// }

//SEGITIGA1
// for (let i = 1; i <= 5; i++) {
// 	for (let j = 0; j < i; j++) {
// 		bintang += "*";
// 	}
// 	bintang += "\n";
// }

//SEGITIGA2
// for (let i = 0; i < 5; i++) {
// 	for (let j = 5; j > i; j--) {
// 		bintang += "*";
// 	}
// 	bintang += "\n";
// }
// console.log(bintang);
//SEGITIGA3
// for (let i = 0; i < 5; i++) {
// 	for (let j = 5; j > i; j--) {
// 		bintang += " ";
// 	}
// 	for (let n = 0; n <= i; n++) {
// 		bintang += "*";
// 	}
// 	for (let m = 0; m < 2; m++) {
// 		bintang += " ";
// 	}
// 	for (let k = 0; k <= i; k++) {
// 		bintang += "*";
// 	}

// 	bintang += "\n";
// }

// console.log(bintang);

// let num = Math.floor(Math.random() * 100000 + 1);
// console.log(num);

// let waktu = new Date();
// let num = waktu.getTime();
// console.log(num);

// let angka = [
// 	[1, 2, 3],
// 	[4, 5, 6],
// 	[7, 8, 9],
// ];
// console.log(angka[0]);

// function automorphic(n) {
// let sqr = n * n;
// let y = n.toString();
// let arr = [];
// for (let i = 0; i < y.length; i++) {
// 	arr.push(parseInt(y[i]));
// }
// let arr2 = parseInt(arr.join(""));
// let sqr2 = sqr.toString();
// if (sqr2.slice(-y.length) == y) {
// 	return "Automorphic";
// } else {
// 	return "Not!!";
// }

// 	let len = n.toString().length;
// 	let num = (n * n).toString().slice(-len);
// 	return n == num ? "Automorphic" : "Not!!";
// }
// console.log(automorphic(12345));
// let a = 100;
// let b = a.toString();
// let a = [1, 1, 1, 6, 2, 5];
// let b = a.toString();
// let c = b.split();
// let x = 332;
// let arr = [];
// let z = x.toString();
// let y = arr.push(x[1]);
// console.log(z.length);
// console.log(parseInt(a.join("")));
// console.log(b);
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function minSum(arr) {
// 	let arr2 = arr;
// 	let len = arr2.length / 2;
// 	let output = 0;
// 	for (let i = 0; i < len; i++) {
// 		let max = Math.max(...arr2);
// 		let min = Math.min(...arr2);
// 		output += max * min;

// 		let Maximum = arr2.findIndex((val) => {
// 			return val == max;
// 		});
// 		arr2.splice(Maximum, 1);
// 		let Minimum = arr2.findIndex((val) => {
// 			return val == min;
// 		});
// 		arr2.splice(Minimum, 1);
// 	}
// 	return output;
// }

// console.log(minSum([5, 4, 2, 3]));
