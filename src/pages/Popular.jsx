import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { getAnimePopular, searchAnime } from '../services/api';
import CardAnime from '../components/Card/CardAnime';

function Popular() {
    const [popularAnime, setPopularAnime] = useState([]);
    // const [search, setSearch] = useState("")

    useEffect( () => {
        getAnimePopular().then((res) => {
            setPopularAnime(res)
        })
        .catch(error => {
            console.log('error fetching data' + error);
        })
    }, []);

    return (
        <>
            <Header />
            <div className="container mx-auto w-full p-6">
                <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-[24px]">
                    {popularAnime.map((anime, index) => {
                        return (
                            <CardAnime key={index} rates={anime.score} cardTitle={anime.title} imgSrc={anime.images.jpg.large_image_url} href={`/detailanime/popular/${anime.mal_id}`}/>
                            )
                        })}
                </div>
            </div>
        </>
    )
}

export default Popular
