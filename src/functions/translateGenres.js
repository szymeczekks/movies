import { GENRES } from "../constants/api";

export function translateGenres(genre_ids) {
    return genre_ids.map((genre_id) => GENRES.find(genre => genre.id === genre_id).name);
}