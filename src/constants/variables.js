// O template usa como exemplo uma requisição ligada a PokeApi, por isso por padrão APIURL vem com este valor
const APIURL = __DEV__ ? 'https://pokeapi.co/api/v2/'
                : 'https://pokeapi.co/api/v2/';

/*
    Utilize as suas próprias variáveis
    Recomendo utilizar esse arquivo para variáveis constantes que serão usadas em todo app.

    Caso queira salvar um valor localmente no celular do usuário recomendo utilizar o AsyncStorage juntamente com esse arquivo, assim você tem uma utilização bem organizada.
    Exemplo: 
        Declare
            const getApiUrl = async_ => {
                return __DEV__ ? 'urlDesenvolvimento'
                        : await AsyncStorage.getItem('apiUrl');
            }

            async function API() {
                return {
                    ApiUrl: await getApiUrl(),
                }
            }

        Exporte
            export {
                API,
            }

        Importe
            import { API } from 'this_archive_url';

        Use
            async function funcaoExemplo() {
                const apiUrl = (await API()).url;
            }

    PS: Para salvar uma variável no AsyncStorage use: await AsyncStorage.setItem('apiUrl', valor_a_ser_salvo);
*/

// Função para agrupar os valores relacionados a API
// Retorna um objeto com os campos adicionados
async function API() {
    return {
        url: APIURL,
        // Demais variáveis relacionadas a API
    }
}

// Exporta tudo que é necessário
export {
    API,
}