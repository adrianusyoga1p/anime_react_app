import axios from "axios";

const apiUrl = import.meta.env.VITE_BASEURL;

export const getAnimeList = async (page) => {
    const anime = await axios.get(`${apiUrl}/top/anime?page=${page}`);
    return anime.data;
}

export const getAnimePopular = async (page) => {
    const popular = await axios.get(`${apiUrl}/anime?page=${page}&order_by=popularity`);
    return popular.data;
}

export const getAnimeAiring = async (page) => {
    const airing = await axios.get(`${apiUrl}/anime?page=${page}&status=airing`);
    return airing.data;
}

export const getNewAnime = async(page) => {
    const newAnime = await axios.get(`${apiUrl}/anime?page=${page}&status=upcoming`);
    return newAnime.data;
}

export const getCompleteAnime = async(page) => {
    const complete = await axios.get(`${apiUrl}/anime?page=${page}&status=complete`);
    return complete.data;
}

export const getDetailAnime = async (id) => {
    const detail = await axios.get(`${apiUrl}/anime/${id}`);
    return detail.data;
}

export const getAnimeEpisodes = async (id) => {
    const episode = await axios.get(`${apiUrl}/anime/${id}/episodes`);
    return episode.data;
}



// else if (pathname.split('/').includes('ongoing')) {
//     getAnimeOngoing().then((res) => {
//         setDetailAnime(res)
//     })
// }