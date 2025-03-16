// test_functions.js - Funções do Netlify (ainda não implementadas)
// Este arquivo não interfere no carregamento dos anúncios
exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Função Netlify ativa, mas ainda não implementada!" }),
    };
};
