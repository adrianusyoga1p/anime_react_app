import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { getAnimePopular } from '../services/api';
import CardAnime from '../components/Card/CardAnime';

function Popular() {
    const [popularAnime, setPopularAnime] = useState([]);
    const [state, setState] = useState({
        query: '',
        list : []
    })

    useEffect( () => {
        getAnimePopular().then((res) => {
            setPopularAnime(res)
        })
        .catch(error => {
            console.log('error fetching data' + error);
        })
    }, []);

    const search = (e) => {
        const results = popularAnime.filter((anime) => {
            return anime.title.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setState({ 
            query: e.target.value,
            list: results
         })
    }

    return (
        <>
            <Header search={search}/>
            <div className="container mx-auto w-full p-6">
                <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-[24px]">
                    {(state.query == '' ? popularAnime.map(anime => {
                        return (
                            <CardAnime key={anime.mal_id} rates={anime.score} cardTitle={anime.title} imgSrc={anime.images.jpg.large_image_url} href={`/detailanime/popular/${anime.mal_id}`}/>
                        )
                    })
                     : !state.list.length ? "No matching anime" : state.list.map(anime => {
                        return (
                            <CardAnime key={anime.mal_id} rates={anime.score} cardTitle={anime.title} imgSrc={anime.images.jpg.large_image_url} href={`/detailanime/popular/${anime.mal_id}`}/>
                        )
                    }))}
                </div>
            </div>
        </>
    )
}

export default Popular
