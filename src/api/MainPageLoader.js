
import { API_URL, API_KEY } from "../constants/api";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
    }
};

async function getVideos(id) {
    return fetch(`${API_URL}/movie/${id}/videos?language=pl-PL`, options)
    .then(res => res.json())
    .then(res => { return res.results })
    .catch(err => {
        console.error(err);
        return false;
    });
}

export function mainPageLoader() {
    console.log('ok');
    return fetch(`${API_URL}/movie/popular?language=pl-PL&page=1`, options)
    .then(res => res.json())
    .then(async res => {
        for await (const result of res.results) {
            const videos = await getVideos(result.id);
            result.videos = videos ? videos : null;
        }
        console.log(res.results);
        return res.results;
    })
    .catch(err => console.error(err));
};