// // var password = 'asdfjklsadlkfjsdlfladf';

// // if(password.length >= 8){
// //   console.log('Strong');
// // } else if(password.length >= 4 && password.length <8){
// // console.log('Medium');
// // } else{
// // console.log('Weak')
// // }

// let job = 'guru'
// switch(job){
//     case 'dokter':
//         console.log('rumah sakit');
//         break;
//     case 'polisi':
//         console.log('kantor polisi');
//         break;
//     case 'guru':
//         console.log('sekolah');
//         break;
//     default:
//         console.log('pengangguran');
// }

let weight =65
let height = 1.72

let bmi = weight / Math.pow(height,2)
console.log(bmi)

if (bmi < 18.5){
    console.log('berat badan kurang');
}
else if (bmi >=18.5 && bmi <=24.9){
    console.log('berat badan ideal');
}
else if (bmi >=25.0 && bmi <=29.9){
    console.log('berat badan berlebih');
}
else if (bmi >=30.0 && bmi <=39.9){
    console.log('berat badan sangat berlebih');
}
else {
    console.log('Obese')
}