// Função temporária para manter a pasta no GitHub
exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Função de teste funcionando!" })
    };
};
