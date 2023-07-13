import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import { getAnimeList, getAnimePopular, getAnimeEpisodes } from '../services/api'
import { HiArrowLeft } from 'react-icons/hi';
import './DetailAnime.css'
// import Episodes from '../components/Episodes/Episodes';

function DetailAnime() {

    const [detailAnime, setDetailAnime] = useState([]);
    const [pageAnime, setPageAnime] = useState(1);

    const { id } = useParams([]);

    const { pathname } = useLocation();

    useEffect(() => {
        if(pathname.split('/').includes('popular')){
            getAnimePopular().then((res) => {
                setDetailAnime(res)
            })
        } else {
            getAnimeList(pageAnime).then((res) => {
                setDetailAnime(res)
            });
        }
    }, [pathname, pageAnime]);

    // useEffect(() => {
    //     getAnimeEpisodes().then((res) => {
    //         setListEpisode(res)
    //     })
    // },[id])

    // console.log({listEpisode: listEpisode})

    let navigate = useNavigate();

    let previously = () => {
        navigate(-1)
    }

    return (
        <div className='w-full h-full md:container container-fluid flex flex-col relative mx-auto py-[64px]'>
            {detailAnime.map(anime => {
                if(anime.mal_id == id){
                    return <div key={anime.mal_id} className="flex flex-col gap-6 px-[24px]">
                        <div className="flex gap-4 items-center">
                        <button className="btn btn-circle btn-back p-2" onClick={previously}><HiArrowLeft/></button>
                            <h1 className="titleDetail m-0 md:text-[32px] text-[24px]">{anime.title}</h1>
                        </div>
                        <div className="detailAnime flex flex-col p-6 gap-[24px]">
                            <div className='grid md:grid-cols-3 grid-cols-1 md:gap-[24px] gap-y-[24px]'>
                                <img src={anime.images.jpg.large_image_url} className='md:w-[300px] w-full h-auto object-cover' style={{borderRadius: '6px'}}/>
                                <div className="informationAnime col-span-2 flex flex-col justify-between md:gap-0 gap-[16px]">
                                    <p className='text-[15px]'><b>Aired :</b> {anime.aired.string}</p>
                                    <p className='text-[15px]'><b>Rating :</b> {anime.rating}</p>
                                    <p className='text-[15px]'><b>Rank :</b> {anime.rank}</p>
                                    <p className='text-[15px]'><b>Score :</b> {anime.score}</p>
                                    <p className='text-[15px]'><b>Scored By :</b> {anime.scored_by}</p>
                                    <p className='text-[15px]'><b>Popularity :</b> {anime.popularity}</p>
                                    <p className='text-[15px]'><b>Status :</b> {anime.status}</p>
                                    <p className='text-[15px]'><b>Source :</b> {anime.source}</p>
                                    <p className='text-[15px]'><b>Duration :</b> {anime.duration}</p>
                                    <p className='text-[15px]'><b>Episode :</b> {anime.episodes}</p>
                                </div>
                            </div>
                            <div className="desc">
                                <p className='text-[15px]'>{anime.synopsis}</p>
                            </div>
                        </div>
                        <h1 className="titleDetail m-0 md:text-[32px] text-[24px]">Trailer</h1>
                        {anime.trailer.embed_url ? (
                            <iframe src={anime.trailer.embed_url} className='videoTrailer'></iframe>
                        ) : (
                            <h1 className='md:text-[32px] text-[24px]'>Trailer tidak tersedia</h1>
                        )}
                        {/* <h1 className="titleDetail m-0 md:text-[32px] text-[24px]">Episodes</h1>
                        <div className='detailAnime grid grid-cols-2 p-6 gap-[24px]'>
                            {listEpisode.map((anime, index) => {
                                <Episodes key={index} episode={anime.mal_id} episodeTitle={anime.title}/>
                            })}
                        </div> */}
                    </div>
                }
            })}
        </div>
    )
}

export default DetailAnime
