import axios from 'axios'
import { API } from '../constants/variables';

// Padrão criado para uso da biblioteca axios para o relacionamento com API
// Esse template usa um padrão básico para uso do axios, organize-o como quiser
const apiRequest = async(props) => {
    try {
        const request = await axios({
            method: props.method,
            url: (await API()).url + props.url,
            headers: props.headers,
            data: props.data,
            params: props.params
        });

        return ({
            success: true,
            return: request,
        });
    } catch (error) {
        return ({
            success: false,
            return: error
        });
    }
}

export default apiRequest;