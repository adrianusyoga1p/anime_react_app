import axios from "axios";

const apiUrl = import.meta.env.VITE_BASEURL;

export const getAnimeList = async () => {
    const anime = await axios.get(`${apiUrl}/top/anime`);
    return anime.data.data;
}

export const getAnimeDetail = async () => {
    const anime = await axios.get(`${apiUrl}/top/anime`);
    return anime.data.data;
}