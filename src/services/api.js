import axios from "axios";

const apiUrl = import.meta.env.VITE_BASEURL;

export const getAnimeList = async (page) => {
    const anime = await axios.get(`${apiUrl}/anime?page=${page}`);
    return anime.data;
}

export const getAnimePopular = async (page) => {
    const popular = await axios.get(`${apiUrl}/top/anime?page=${page}`);
    return popular.data;
}

export const getDetailAnime = async (id) => {
    const detail = await axios.get(`${apiUrl}/anime/${id}`);
    return detail.data.data;
    // console.log({detail: detail.data})
}

export const getAnimeEpisodes = async (id) => {
    const episode = await axios.get(`${apiUrl}/anime/${id}/episodes`);
    return episode.data.data;
}

// else if (pathname.split('/').includes('ongoing')) {
//     getAnimeOngoing().then((res) => {
//         setDetailAnime(res)
//     })
// }