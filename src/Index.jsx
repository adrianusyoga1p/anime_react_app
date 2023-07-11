// import React from 'react'
import CardAnime from './components/Card/CardAnime'
import Header from './components/Header'
import { useEffect, useState } from 'react'
import { getAnimeList } from './services/api'

function Index() {
    const [animeList, setAnimeList] = useState([])

    useEffect( () => {
        getAnimeList().then((res) => {
            setAnimeList(res)
        })
    }, []);

    return (
        <>
            <Header/>
            <div className="container mx-auto w-full p-6">
                <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-[24px]">
                    {animeList.map((anime, index) => {
                        return (
                            <CardAnime key={index} rates={anime.score} cardTitle={anime.title} imgSrc={anime.images.jpg.large_image_url} href={`/detailanime/${anime.mal_id}`}/>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Index
