import React, { useEffect, useState } from 'react'
import { getAnimeEpisodes } from '../../services/api';
import { useParams } from 'react-router-dom';

function Episodes() {
    const [listEpisode, setListEpisode] = useState([]);

    const { id } = useParams([]);

    useEffect(() => {
        getAnimeEpisodes(id).then(res => {
            setListEpisode(res.data)
            console.log(res.data)
        })
        return () => getAnimeEpisodes(id)
    }, [id]);

    return (
        <>
            {/* {listEpisode.map((episode, index) => {
                <div key={index} className="border rounded-md border-state-500 p-4">
                    <h1 className='m-0'>{episode.mal_id}</h1>
                    <h3>{episode.title}</h3>
                </div>
            })} */}
            {listEpisode.length < 1 ? (
                    <h1>Episode Tidak Tersedia</h1>
            ) : (
                listEpisode.map((episode, index) => {
                    <div className="detailAnime flex flex-col p-6 gap-[24px]">
                        <div key={index} className="border rounded-md border-state-500 p-4">
                            <h1 className='m-0'>{episode.mal_id}</h1>
                            <h3>{episode.title}</h3>
                        </div>
                    </div>
                })
            )}
        </>
    )
}

export default Episodes