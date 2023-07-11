import axios from "axios";

const apiUrl = import.meta.env.VITE_BASEURL;

export const getAnimeList = async () => {
    const anime = await axios.get(`${apiUrl}/anime`);
    return anime.data.data;
}

export const getAnimePopular = async () => {
    const anime = await axios.get(`${apiUrl}/top/anime`);
    return anime.data.data;
}

export const searchAnime = async (id) => {
    const anime = await axios.get(`${apiUrl}/anime/${id}/full`);
    // return anime.data.data;
    console.log(anime)
}