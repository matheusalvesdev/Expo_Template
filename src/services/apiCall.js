import apiRequest from "./apiRequest";
// Importe e use variáveis que sejam pertinentes as requisições, como por exemplo tokens e etc
// Recomendo utilizar o arquivos constants/variables.js para exporta essas variáveis, afim de manter o projeto escalável e organizado

const returnRequestObj = (method, url, headers, data, params) => {
    return {
        method: method,
        url: url,
        headers: headers,
        data: data,
        params: params
    };
}

const returnRequest = async(dadosRequisicao) => {
    return (await apiRequest({
        method: dadosRequisicao.method,
        url: dadosRequisicao.url,
        headers: dadosRequisicao.headers,
        data: dadosRequisicao.data,
        params: dadosRequisicao.params,
        navigation: dadosRequisicao.navigation
    }));
}

// Requisições
// Os seus parametros virão em uma lista então tome cuidado para usar
// Nesse exemplo é passado apenas um parâmetro (arguments[0].parameters[0]) e ele precisa vir logo após a rota (arguments[0].route) + '/'
// Fique atento ao objeto que será construído: metodo, url, headers, data, params
// Headers/Data/Params pode ser passados com {} (objeto vazio) que não afetará a requisição
async function getPokemonInfo() {
    const dataRequest = returnRequestObj('GET', `${arguments[0].route + '/' + arguments[0].parameters[0]}`, {}, {}, {});

    return await returnRequest(dataRequest);
}

// Caso queira utilizar esse exemplo sempre passe chame a função apiCall da seguinte forma:
// await apiCall({route: string, parameters: list});
// No qual route sempre é uma string e parameters é uma lista
async function apiCall() {
    let callReturn = null;

    // Adicione suas rotas
    // Essa rota é apenas para entendimento e exemplo
    switch(arguments[0].route) {
        case 'pokemon': {
            callReturn = await getPokemonInfo(arguments[0]);

            break;
        }

        default: {
            callReturn = {
                success: false,
                return: null,
            }

            break;
        }
    }

    return callReturn;
}

export { apiCall }