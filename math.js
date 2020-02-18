const Math = {};
function add(x1, x2)
{
    return x1+x2;
}
function substract(x1, x2)
{
    return x1-x2;
}
function multiply(x1, x2)
{
    return x1*x2;
}
function divide(x1, x2)
{
    if (x2==0)
    {
        console.log("División X 0 = infinito");
        return 'oo';
    }
    else
    {
        return x1/x2;
    }
}

Math.add = add;
Math.substract  =substract;
Math.multiply  =multiply;
Math.divide  = divide;

//exports.nombre = objeto => exporta una propiedad de un objeto
// module.exports = objeto; => exporta un objeto (puede ser una función , variable, etc.)

module.exports = Math;