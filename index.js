/**
 * bter um usuario
 * obter o numero de telefone de um usuario a partir de seu ID
 * obter o endereço do usuário pelo ID
 */

function obterUsuario(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nopme: 'Batata',
            dataNascimento: new Date(),
        })
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

//resolverUsuario só será chamado quando a function obterUsuario tiver terminado.
obterUsuario(resolverUsuario);


function resolverUsuario(erro, usuario) {
    console.log("usuario", usuario);
}
