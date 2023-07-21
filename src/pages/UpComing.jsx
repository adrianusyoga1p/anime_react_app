import React, { useEffect, useState } from 'react'
import { getNewAnime } from '../services/api';
import Header from '../components/Header';
import CardAnime from '../components/Card/CardAnime';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

function UpComing() {
    const [newAnime, setNewAnime] = useState([]);
    const [pageAnime, setPageAnime] = useState(1);
    const [state, setState] = useState({
        query: '',
        list: []
    })

    useEffect(() => {
        getNewAnime(pageAnime).then(res => {
            setNewAnime(res.data)
        })
    }, [pageAnime])

    const search = (e) => {
        const results = newAnime.filter((anime) => {
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
                <div className="flex w-full items-center justify-end gap-[24px] mb-6">
                    <button className='btn-back' onClick={()=> setPageAnime((curr) =>  curr == 1 ? curr : curr - 1)}><HiArrowLeft /></button>
                    <span>Page {pageAnime}</span>
                    <button className='btn-back' onClick={()=> setPageAnime((curr) => curr + 1)}><HiArrowRight/></button>
                </div>
                <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-[24px]">
                    {(state.query == '' ? newAnime.map((anime, index) => {
                        return (
                            <CardAnime key={index} rates={anime.score} cardTitle={anime.title} imgSrc={anime.images.webp.large_image_url} href={`/upcoming/detailanime/${anime.mal_id}`} desc={anime.rating}/>
                        )
                    })
                     : !state.list.length ? "No matching anime" : state.list.map((anime, index) => {
                        return (
                            <CardAnime key={index} rates={anime.score} cardTitle={anime.title} imgSrc={anime.images.webp.large_image_url} href={`/upcoming/detailanime/${anime.mal_id}`} desc={anime.rating}/>
                        )
                    }))}
                </div>
            </div>
        </>
    )
}

export default UpComing
