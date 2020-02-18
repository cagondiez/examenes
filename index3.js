const fs = require('fs');
// Peticiones asíncronas:
fs.writeFile('./nevo.txt','Línea uno\nLínea dos', function(err){
    if (err)
    {
        console.log('---->>>>> '+err);
    }
    else
    {
        console.log('---->>>>> Fichero creado');
    }
});
console.log('Seguimos ejecutando el programa');
var i = 0;
while (i<2)
{
    console.log('Vamos por el '+i);
    i++;
}

fs.readFile('./nevo.txt', function(err, datos){
    if (err)
    {
        console.log('ERROR:'+err);
    }
    else if (datos)
    {
        console.log(datos.toString());
    }
})