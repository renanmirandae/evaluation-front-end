import axios from "axios";

// Abaixo estão todas as funções request do projeto

//Url da rota principal
const mainRoute = "https://dhodonto.ctdprojetos.com.br";

//Buscar todos os dentistas
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

//Buscar dentista por id
export const getDentistId = async (id) =>
{
    try{

        const response = await axios.get(`${mainRoute}/dentista?matricula=${id}`);

        return await response.data;
        
    }catch(error)
    {
        console.error(error)
    }
}