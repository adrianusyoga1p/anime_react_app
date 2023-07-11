import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAnimeDetail } from '../services/api'

function DetailAnime() {

    const [detailAnime, setDetailAnime] = useState([]);

    const { id } = useParams([]);

    useEffect(() => {
        getAnimeDetail().then((res) => {
            setDetailAnime(res)
        })
    }, []);

    console.log(detailAnime[0])

    return (
        <div className='w-full container mx-auto'>
            {detailAnime.map((anime) => {
                if(anime.mal_id === id){
                    return <div key={anime.mal_id} className="flex flex-col gap-[32px]">
                        <img src={anime.images.jpg.large_image_url} className='w-[300px] h-auto'/>
                        <p>{anime.aired.from}</p>
                    </div>
                }
            })}
        </div>
    )
}

export default DetailAnime
