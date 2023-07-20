// import React, { useEffect, useState } from 'react'
// import { getAnimeEpisodes } from '../../services/api';
// import { useParams } from 'react-router-dom';

function Episodes(titileEpisode, currEpisode) {
    return (
        <div className="border rounded-md border-state-500 p-4">
            <h1 className='m-0'>{titileEpisode}</h1>
            <h3>{currEpisode}</h3>
        </div>
    )
}

export default Episodes