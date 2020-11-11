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

function questionMark(str) {
	let q = 0;
	str = str.split("");
	for (let index = 0; index < str.length; index++) {
		if (str[index] == "?") {
			q++;
		}
	}
	if (q > 0) {
		return q;
	} else {
		return "Tidak ada tanda tanya";
	}
}
console.log(questionMark("??????asdasda"));
console.log(questionMark("asdadsa"));
console.log(questionMark("??"));
