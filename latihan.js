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
// let bintang = "";

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

let waktu = new Date();
let num = waktu.getTime();
console.log(num);
