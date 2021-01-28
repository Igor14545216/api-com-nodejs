/**
 * obter um usuario
 * obter o numero de telefone de um usuario a partir de seu ID
 * obter o endereço do usuário pelo ID
 */

function obterUsuario() {
    // quando der algum problema => reject (ERRO)
    // uqnado sucess => RESOLVE
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(() => {
            return reject(new Error('Deu erro.'))

            return resolve({
                id: 1,
                nome: 'Batata',
                dataNascimento: new Date(),
            })
        }, 1000);
    })
}

function obterTelefone(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            numero: '0123132',
            ddd: 31
        })
    }, 2000);
}

function obterEndereco(idUsuario, callback) {
    setTimeout(() => {
        return callback(null, {
            rua: 'betula',
            numero: 75
        })
    }, 3000);
}

const usuarioPromise = obterUsuario()
// para manipular sucesso, usamos o .then
// para manipular erros, usamos o .catch

usuarioPromise.then(function (resultado) {
    console.log('resultado ', resultado);

}).catch(function (error) {
    console.log(error);
})


