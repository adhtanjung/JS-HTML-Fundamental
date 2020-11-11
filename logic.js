function xo(str) {
	let x = 0;
	let o = 0;
	let z = str.toLowerCase();
	// console.log(z.length);
	for (let i = 0; i < z.length; i++) {
		if (z[i] == "x") {
			x++;
		} else if (z[i] == "o") {
			o++;
		}
	}
	return `Huruf x: ${x} | Huruf o: ${o}`;
}

console.log(xo("XXXYYYOOOO"));

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
