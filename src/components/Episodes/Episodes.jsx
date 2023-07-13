// import React, { useEffect, useState } from 'react'
// import { getAnimeEpisodes } from '../../services/api';
// import { useParams } from 'react-router-dom';

function Episodes(episode, episodeTitle) {

    // const [listEpisode, setListEpisode] = useState([]);

    // const { id } = useParams();

    // useEffect(() => {
    //     getAnimeEpisodes().then((res)=> {
    //         setListEpisode(res)
    //     })
    // },[id])


    return (
        <div className="border rounded-md border-state-500 p-4">
            <h1 className='m-0'>{episode}</h1>
            <h3>{episodeTitle}</h3>
        </div>
    )
}

export default Episodes