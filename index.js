/**
 * bter um usuario
 * obter o numero de telefone de um usuario a partir de seu ID
 * obter o endereço do usuário pelo ID
 */

function obterUsuario(callback) {
    setTimeout(() => {
        return callback(null, {
            id: 1,
            nome: 'Batata',
            dataNascimento: new Date(),
        })
    }, 1000);
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

obterUsuario(function obterUsuario(error, usuario) {
    if (error)
        return console.log('deu erro usuario', error);

    obterTelefone(usuario.id, function obterTelefone(erro1, telefone) {
        if (erro1)
            return console.log('deu erro telefone', erro1);

        obterEndereco(usuario.id, function obterEndereco(erro2, endereco) {
            if (erro2) {
                return console.log('deu erro endereco');
            }

            console.log(`
                Nome: ${usuario.nome},
                Endereço: ${endereco.rua}, ${endereco.numero},
                Telefone: (${telefone.ddd}), ${telefone.numero}
                `);
        })
    })
})
