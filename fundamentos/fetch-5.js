fetch('https://reqres.in/api/users/1')
    .then(resp => {

        if (resp.ok) {
            return resp.json();
        } else {
            // console.log('No existe el usuario 1000');
            throw new Error('No existse el usuario 1000')

        }
    })
    .catch(error => {
        console.log('Error en la peticion');
        console.log(error);
    })