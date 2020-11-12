// function xo(str) {
// 	let x = 0;
// 	let o = 0;
// 	let z = str.toLowerCase();
// 	// console.log(z.length);
// 	for (let i = 0; i < z.length; i++) {
// 		if (z[i] == "x") {
// 			x++;
// 		} else if (z[i] == "o") {
// 			o++;
// 		}
// 	}
// 	return `Huruf x: ${x} | Huruf o: ${o}`;
// }

// console.log(xo("XXXYYYOOOO"));

// let a = "abc";
// let b = "defd";
// console.log(a.length / 2);

// function mid(str) {
// 	let idx = 0;

// 	if (str.length % 2 == 0) {
// 		idx = str.length / 2;
// 		return `Huruh tengah dari ${str} adalah: '${str[idx - 1]}' dan '${
// 			str[idx]
// 		}'`;
// 	} else {
// 		let idx1 = str.length / 2;
// 		idx = Math.floor(idx1);
// 		return `Huruh tengah dari ${str} adalah: '${str[idx]}'`;
// 	}
// }
// console.log(mid("MAKANAN"));

// function repeat(str, num) {
// 	return str.repeat(num);
// }
// console.log(repeat("buah", 4));

// function repeat(str, num) {
// 	let string = "";
// 	for (let i = 0; i < num; i++) {
// 		string += str;
// 	}
// 	return string;
// }

// console.log(repeat("makan", 5));

// function firstLast(str) {
// 	let lastidx = str.length - 1;
// 	console.log(str);
// 	return `Huruf pertama: ${str[0]} | Huruf terakhir: ${str[lastidx]}`;
// }
// console.log(firstLast("Bambang"));
// str = str.split("");
// str.splice(0, 1);
// str.splice(str.length - 1, 1);
// return str.join("");
// function removeFirstLast(str) {
// 	str = str.split("");
// 	str.shift();
// 	str.pop();
// 	return str.join("");
// }
// console.log(removeFirstLast("Adhi"));
// console.log(removeFirstLast("Bambang"));
// console.log(removeFirstLast("ABC"));

// function questionMark(str) {
// 	let q = 0;
// 	str = str.split("");
// 	for (let index = 0; index < str.length; index++) {
// 		if (str[index] == "?") {
// 			q++;
// 		}
// 	}
// 	if (q > 0) {
// 		return q;
// 	} else {
// 		return "Tidak ada tanda tanya";
// 	}
// }
// console.log(questionMark("??????asdasda"));
// console.log(questionMark("asdadsa"));
// console.log(questionMark("??"));

function berapaTahun(pAwal, perc, pendatang, target) {
	let tahun = 0;
	perc = perc / 100;
	do {
		//INI PAKE DO WHILE
		pAwal += pAwal * perc + pendatang;
		tahun++;
	} while (pAwal < target);
	return `Waktu yang dibutuhkan untuk mencapai target adalah: ${tahun} Tahun`;
	// let tahun = 0;
	// perc = perc / 100;
	// for (let i = 0; pAwal < target; i++) { //INI PAKE FOR LOOP
	// 	pAwal += pAwal * perc + pendatang;
	// 	tahun++;
	// }
	// return tahun;
}
// console.log(berapaTahun(1000, 2, 50, 1200));
// console.log(berapaTahun(1500, 5, 100, 5000));
// console.log(berapaTahun(1500000, 2.5, 10000, 2000000));
// 	let pendudukTotal = pAwal; //1000
//
// 	let persentase = pendudukTotal * perc; //70
// 	let pTotal = pendudukTotal + persentase + pendatang; //1070
//
// 	for (let i = 0; pTotal < target; i++) {
// 		pTotal += pTotal * perc + pendatang;
// 		tahun++;
// 		// pTotal += ditambah;
// 		// console.log(pendudukTotal, pTotal);
// 	}
// 	return tahun + " Tahun";

function everyArr(arr1, arr2) {
	arr1 = arr1.join("");
	arr2 = arr2.join("");
	console.log(arr1, arr2);
	if (arr1 === arr2) {
		return true;
	} else {
		return false;
	}
}
console.log(everyArr([1, 2, 4], [1, 2, 3]));
console.log(everyArr([1, 2, 3], [1, 2, 3]));
console.log(everyArr([4, 4, 4], [4, 4, 4]));

// function equal(arr) {
// 	for arr === arr[0];
// }
// console.log(equal([1, 1, 1, 1]));

// function equal(array) {
// 	let cekvalue = array.filter((val) => {
// 		return val === val[0];
// 	});
// 	return cekvalue;
// }
// console.log(equal([1, 1, 1, 2]));

// const allEqual = (arr) => arr.every((v) => v === arr[0]);
// console.log(allEqual(["abc", "abdc"])); // false

function equal(arr) {
	let arrai = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[0]) {
			arrai.push(arr[i]);
		}
	}
	if (arrai.length == arr.length) {
		return true;
	} else {
		return false;
	}
}
// console.log(equal(["abc", "abc", "abc", "def", 1])); //false
// console.log(equal(["abc", "abc", "abc", "abc", "abc"])); //true
// console.log(equal([1, 1, 1])); //true
// console.log(equal([1, 1, 1, "abc"])); //false
