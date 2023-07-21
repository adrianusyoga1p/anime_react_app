import React, { useEffect, useState } from 'react'
import { getAnimeEpisodes } from '../../services/api';
import { useParams } from 'react-router-dom';
// import InfiniteScroll from 'react-infinite-scroll-component';

function Episodes() {
    const [listEpisode, setListEpisode] = useState([]);

    const { id } = useParams([]);

    useEffect(() => {
        getAnimeEpisodes(id).then(res => {
            setListEpisode(res)
            console.log(res)
        })
    }, [id]);

    return (
        <>
            {/* <InfiniteScroll dataLength={listEpisode.length} next={fetchMoreData} hasMore={hasMore}> */}
                {listEpisode.map((episode, index) => {
                    <div key={index} className="border rounded-md border-state-500 p-4">
                        <h1 className='m-0'>{episode.mal_id}</h1>
                        <h3>{episode.title}</h3>
                    </div>
                })}
            {/* </InfiniteScroll> */}
            {/* {listEpisode.forEach((episode, index) => {
                episode.length <= 11 ? (
                    <></>
                ) : (
                    <div key={index} className="border rounded-md border-state-500 p-4">
                        <h1 className='m-0'>{episode.mal_id}</h1>
                        <h3>{episode.title}</h3>
                    </div>
                )
            })} */}
        </>
    )
}

export default Episodes