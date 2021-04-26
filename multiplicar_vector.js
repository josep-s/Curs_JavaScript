var vector = [2, 4, 6, 8, 10];
var numero = 2;
var multiplicar_vector = function(vector, numero) {
    for (var i = 0; i < vector.length; i++)
        vector[i] = vector[i] * numero;
    return vector;
};

console.log('El vector resultant de la multiplicació de', vector, 'i del número', numero,'és :', multiplicar_vector(vector, numero));