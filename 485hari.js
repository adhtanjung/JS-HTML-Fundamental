var total = 485;
var tahun = 360;
var bulan = 30;
var minggu = 7;
var hari = 1;


var result = Math.floor(total / tahun); 
console.log(result, " tahun");
var result1 = total % tahun;
console.log(Math.floor(result1 / bulan), " bulan");
var result2 = result1 % bulan;
console.log(Math.floor(result2 / minggu), " minggu");
var result3 = result2 % minggu;
console.log(Math.floor(result3 / hari), " hari");
