function sumarUno(numero) {
    console.log(numero);

    var promesa = new Promise(function(resolve, reject) {
        if (numero >= 8) {
            reject('El numero es muy alto')
        }
        setTimeout(() => {
            resolve(numero + 1)
        }, 800);
    });

    return promesa;
}

sumarUno(5)
    .then(sumarUno)
    .then(sumarUno)
    .then(sumarUno)
    .then(sumarUno)
    .then(sumarUno)
    .then(nuevoNumero => {
        console.log(nuevoNumero);
    }).catch(error => {
        console.log('ERROR EN LA PROMESA');
        console.log(error);

    });