import React, { useEffect, useState } from 'react'
import { getAnimeEpisodes } from '../../services/api';
import { useParams } from 'react-router-dom';

function Episodes() {
    const [listEpisode, setListEpisode] = useState([]);

    const { id } = useParams([]);

    useEffect(() => {
        getAnimeEpisodes(id).then(res => {
            setListEpisode(res)
            console.log(res)
        })
    }, [id])

    return (
        <>
             {listEpisode.map((animeEpisode, index) => {
                <div key={index} className="border rounded-md border-state-500 p-4">
                    <h1 className='m-0'>{animeEpisode.mal_id}</h1>
                    <h3>{animeEpisode.score}</h3>
                </div>
            })}
        </>
    )
}

export default Episodes