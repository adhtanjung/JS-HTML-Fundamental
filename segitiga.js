let output = ''
// for (var j = 0; j < 5; j++) {
//     for (var i = 0; i < 5; i++) {
//         output += '*'
//     } output += '\n'
// }


for (var j = 0; j < 5; j++){
    for (var i = 5; i > j; i--){
        output += ' '
    } 
    for (var k = 0; k <= j; k++){
        output += '*'
    } 
    for (var l = 0; l < j; l++){
        output += '*'
    } 
    output += '\n'
}
console.log(output)