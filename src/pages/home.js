import { useState, useEffect } from 'react';
import { View, Text, Image, Linking, Alert } from 'react-native';

import stylesHome from '../styles/pages/home';
import { ICONS, IMAGES } from '../constants/index';
import { apiCall } from '../services/apiCall';

export default function Home() {
    // Variável criada apenas para exemplo de controle de carregamento da página
    const [loadPage, setLoadPage] = useState(false);

    async function apiSearch(route, parameters) {    
        const searchApiObj = (...rest) => {
            return {
                route: rest[0],
                parameters: rest[1]
            }
        }

        const returnRequest = await apiCall(searchApiObj(route, parameters));

        console.log(returnRequest)
        // Trate aqui os erros que podem ser retornados com avisos personalizados
        if(returnRequest.success == true) {
            return await returnRequest.return.data;
        } else {
            Alert.alert(
                'Erro ao tentar realizar requisição',
                'Erro: xxxx',
                [
                    {
                        text: 'Voltar',
                        onPress: _ => console.log('Botão voltar do alerta de erro pressionado')
                    },
                ],
            );
        }
    }

    // Função criada para chamada da api, recomendo esta utilização para fins de organização e escalabilidade
    async function apiPokemonInfo(nameOrId) {
        return await apiSearch('pokemon', [nameOrId]);
    }

    // Apenas para exemplo de funcionamento e organização das requisições é realizada essa busca dessa forma
    async function buttonTestRequest() {
        const pokemonInfo = await apiPokemonInfo(1);

        Alert.alert(
            'A requisição funcionou!',
            `Pokemon: ${pokemonInfo.name}`,
            [
                {
                    text: 'Voltar',
                    onPress: _ => console.log('Botão voltar do alerta de funcionamento pressionado')
                },
            ],
        );
    }

    useEffect(async() => {
        setLoadPage(true);

        return () => { }
    }, []);

    // Esse template usa esse sistema loadPage para carregar a página, mas você pode personalizar e usar como quiser.
    // Caso queira ajuda, dê uma olhada na ferramenta AppLoading 
    if(loadPage == true) {
        return (
            <View style={stylesHome.container}>
                <Image
                    source={IMAGES.ExampleImage}
                    style={stylesHome.imageIconExample}
                />
                <Image
                    source={ICONS.ExampleIcon}
                    style={stylesHome.imageIconExample}
                />
                <Text style={stylesHome.textTitle}>
                    Obrigado por usar o template :)
                </Text>
                <Text style={stylesHome.textSubTitle}>
                    Se puder envie um feedback.
                </Text>
                <Text style={stylesHome.textBody}>
                    {`Leia o arquivo readme em: `}
                    
                    <Text
                    style={stylesHome.textLink}
                    onPress={_ => Linking.openURL('https://github.com/matheusalvesdev/Expo_Template')}>
                        https://github.com/matheusalvesdev/Expo_Template
                    </Text>
                    
                    {` para saber mais detalhes.`}
                </Text>
                <Text
                style={stylesHome.textLinkRequest}
                onPress={_ => buttonTestRequest()}>
                    Clique aqui para testar a requisição de exemplo
                </Text>
            </View>
        );
    } else return null
}