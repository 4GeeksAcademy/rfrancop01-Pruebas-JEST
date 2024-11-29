// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromYenToPound, fromDollarToYen } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5).toFixed(2);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = (3.5 * 1.07).toFixed(2);

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 145.26 yen", function() {

    const yenes = fromDollarToYen(10).toFixed(2);

    const expected = ((10 / 1.07) * 156.50).toFixed(2); 

    expect(yenes).toBe(expected); 
})

test("One yen should be 0.0055 pound", function() {

    const pounds = fromYenToPound(20).toFixed(2);

    const expected = ((20 / 156.5) * 0.87).toFixed(2);

    expect(pounds).toBe(expected); 
})