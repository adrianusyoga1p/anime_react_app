import axios from "axios";

const apiUrl = import.meta.env.VITE_BASEURL;

export const getAnimeList = async () => {
    const anime = await axios.get(`${apiUrl}/anime`);
    return anime.data.data;
}

export const getAnimePopular = async () => {
    const popular = await axios.get(`${apiUrl}/top/anime`);
    return popular.data.data;
}

export const searchAnime = async () => {
    const search = await axios.get(`${apiUrl}/anime`);
    return search.data.data;
}