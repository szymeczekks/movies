import { API_URL, API_KEY } from "../constants/api";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
    }
};


export async function categoryLoader({params}) {
    try {
        console.log(params);
    } catch (error) {
        console.error(error);
    }
}