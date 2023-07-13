import axios from "axios";

const apiUrl = import.meta.env.VITE_BASEURL;

export const getAnimeList = async (page) => {
    const anime = await axios.get(`${apiUrl}/anime?page=${page}`);
    return anime.data.data;
}

export const getAnimePopular = async () => {
    const popular = await axios.get(`${apiUrl}/top/anime`);
    return popular.data.data;
}

export const getAnimeEpisodes = async (id) => {
    const episode = await axios.get(`${apiUrl}/anime/${id}/episode`);
    return episode.data;
}

// else if (pathname.split('/').includes('ongoing')) {
//     getAnimeOngoing().then((res) => {
//         setDetailAnime(res)
//     })
// }