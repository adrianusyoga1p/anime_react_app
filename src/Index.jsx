// import React from 'react'
import CardAnime from './components/Card/CardAnime'
import Header from './components/Header'
import { useEffect, useState } from 'react'
import { getAnimeList } from './services/api'

function Index() {
    const [animeList, setAnimeList] = useState([]);
    const [state, setState] = useState({
        query: '',
        list : []
    });

    useEffect( () => {
        getAnimeList().then((res) => {
            setAnimeList(res)
        })
    }, []);

    const search = (e) => {
        const results = animeList.filter((anime) => {
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
                {(state.query == '' ? animeList.map(anime => {
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

export default Index
