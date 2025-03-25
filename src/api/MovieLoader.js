import { API_URL, API_KEY } from "../constants/api";

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
    }
};

const Storage = {
    get(key) {
        return localStorage[key] ? JSON.parse(localStorage[key]) : {};
    },

    set(data, key) {
        localStorage[key] = JSON.stringify(data);
    }
}


export async function movieLoader({params}) {
    try {
        const response = await fetch(`${API_URL}/movie/${params.id}?language=pl-PL`, options);
        if (!response.ok) {
            throw ('Network response was not ok');
        }
        let movie = await response.json();

        const videosResponse = await fetch(`${API_URL}/movie/${params.id}/videos?language=pl-PL`, options);
        let videos = {
            results: []
        };
        if (videosResponse.ok) {
            videos = await videosResponse.json();
        }

        return { ...movie, videos: videos.results, reviews: Storage.get(`reviews`)[`reviews_${params.id}`] || [], userData: Storage.get('userData') };
    } catch (error) {
        console.error(error);
    }
}