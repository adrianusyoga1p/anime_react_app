import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAnimeList } from '../services/api'
import { HiArrowLeft } from 'react-icons/hi';
import './DetailAnime.css'

function DetailAnime() {

    const [detailAnime, setDetailAnime] = useState([]);

    const { id } = useParams([]);

    useEffect(() => {
        getAnimeList().then((res) => {
            setDetailAnime(res)
        })
    }, []);

    return (
        <div className='w-full h-full container flex flex-col relative mx-auto py-[64px]'>
            {detailAnime.map((anime) => {
                if(anime.mal_id == id){
                    return <div key={anime.mal_id} className="flex flex-col gap-6 px-[24px]">
                        <div className="flex gap-4 items-center">
                            <button className="btn btn-circle btn-back p-2"><HiArrowLeft/></button>
                            <h1 className="titleDetail m-0">{anime.title}</h1>
                        </div>
                        <div className="detailAnime flex flex-col p-6 gap-[24px]">
                            <div className='grid md:grid-cols-3 grid-cols-1 md:gap-[24px] gap-y-[24px]'>
                                <img src={anime.images.jpg.large_image_url} className='md:w-[300px] w-full h-auto object-cover' style={{borderRadius: '6px'}}/>
                                <div className="informationAnime col-span-2 flex flex-col gap-[24px]">
                                    <p className='text-[15px]'><b>Aired :</b> {anime.aired.string}</p>
                                    <p className='text-[15px]'><b>Rating :</b> {anime.rating}</p>
                                    <p className='text-[15px]'><b>Rank :</b> {anime.rank}</p>
                                    <p className='text-[15px]'><b>Score :</b> {anime.score}</p>
                                    <p className='text-[15px]'><b>Scored By :</b> {anime.scored_by}</p>
                                    <p className='text-[15px]'><b>Popularity :</b> {anime.popularity}</p>
                                    <p className='text-[15px]'><b>Status :</b> {anime.status}</p>
                                    <p className='text-[15px]'><b>Source :</b> {anime.source}</p>
                                    <p className='text-[15px]'><b>Duration :</b> {anime.duration}</p>
                                </div>
                            </div>
                            <div className="desc">
                                <p className='text-[15px]'>{anime.synopsis}</p>
                            </div>
                        </div>
                    </div>
                }
            })}
        </div>
    )
}

export default DetailAnime
