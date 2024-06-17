import axios from 'axios';
import { generateAuthHeader } from '../utils/auth.js';

const baseUrl = `${process.env.BASE_URL}/wiki/rest/api`;

async function getConfluencePages() {
    try {
        const authHeader = generateAuthHeader();
        const response = await axios.get(`${baseUrl}/content`, {
            params: {
                limit: 10
            },
            headers: {
                'Authorization': authHeader,
                'Accept': 'application/json'
            }
        });
        
        return response.data;
    } catch (error) {
        throw new Error(`Erro ao obter páginas do Confluence: ${error.message}`);
    }
}

export { getConfluencePages };
