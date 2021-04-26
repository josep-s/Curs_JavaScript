var alçaria = 20;
var asteriscos = 1;

for (var i = 0; i < alçaria; i++) {
    var fila = '';
    for (var j = 0; j < alçaria - i - 1; j++)
        fila += ' ';
    for (var k = 0; k < asteriscos; k++)
        fila += '*';
    console.log(fila);
    asteriscos += 2;
}