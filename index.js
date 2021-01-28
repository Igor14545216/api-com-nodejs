/**
 * bter um usuario
 * obter o numero de telefone de um usuario a partir de seu ID
 * obter o endereço do usuário pelo ID
 */

function obterUsuario() {

    setTimeout(() => {

        return {
            id: 1,
            nopme: 'Batata',
            dataNascimento: new Date(),
        }
    }, 1000);
}

function obterTelefone(idUsuario) {
    setTimeout(() => {

        return {
            telefone: '0123132',
            ddd: 111
        }
    }, timeout);
}

const usuario = obterUsuario();
//usuario retornando undefined
console.log(usuario);