import axios from "axios";

// Abaixo estão todas as funções request do projeto

//Url da rora principal
const mainRoute = "https://dhodonto.ctdprojetos.com.br";

export const getDentist = async () =>
{
    try{

        const response = await axios.get(`${mainRoute}/dentista`);

        return await response.data;

    }catch(error)
    {
        console.error(error);
    }
}