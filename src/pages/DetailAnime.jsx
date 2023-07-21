import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'
import { getDetailAnime } from '../services/api'
import { HiArrowLeft } from 'react-icons/hi';
import './DetailAnime.css'
import Episodes from '../components/Episodes/Episodes';

function DetailAnime() {

    const [detailAnime, setDetailAnime] = useState([]);

    const { id } = useParams([]);

    const { pathname } = useLocation();

    useEffect(() => {
        if(pathname.split('/').includes('popular')){
            getDetailAnime(id).then((res) => {
                setDetailAnime(res)
                // console.log(res)
            })
        } else {
            getDetailAnime(id).then((res) => {
                setDetailAnime(res)
                // console.log(res)
            })
        }
    }, [pathname, id]);

    let navigate = useNavigate();

    let previously = () => {
        navigate(-1)
    }
    
    return (
        <>
            {detailAnime.length === 0 ? (
                <></>
            ) : (
                <div className='w-full h-full md:container container-fluid flex flex-col relative mx-auto py-[64px]'>
                    <div className="flex flex-col gap-6 px-[24px]">
                        <div className="flex gap-4 items-center">
                            <button className="btn btn-circle btn-back p-2" onClick={previously}><HiArrowLeft/></button>
                            <h1 className="titleDetail m-0 md:text-[32px] text-[24px]">{detailAnime.title}</h1>
                        </div>
                        <div className="detailAnime flex flex-col p-6 gap-[24px]">
                            <div className='grid md:grid-cols-3 grid-cols-1 md:gap-[24px] gap-y-[24px]'>
                                <img src={detailAnime.images.webp.large_image_url} className='md:w-[300px] w-full h-auto object-cover' style={{borderRadius: '6px'}}/>
                                <div className="informationAnime col-span-2 flex flex-col justify-between md:gap-0 gap-[16px]">
                                    <p className='text-[15px]'><b>Aired :</b> {detailAnime.aired.string}</p>
                                    <p className='text-[15px]'><b>Rating :</b> {detailAnime.rating}</p>
                                    <p className='text-[15px]'><b>Rank :</b> {detailAnime.rank}</p>
                                    <p className='text-[15px]'><b>Score :</b> {detailAnime.score}</p>
                                    <p className='text-[15px]'><b>Scored By :</b> {detailAnime.scored_by}</p>
                                    <p className='text-[15px]'><b>Popularity :</b> {detailAnime.popularity}</p>
                                    <p className='text-[15px]'><b>Status :</b> {detailAnime.status}</p>
                                    <p className='text-[15px]'><b>Source :</b> {detailAnime.source}</p>
                                    <p className='text-[15px]'><b>Duration :</b> {detailAnime.duration}</p>
                                    <p className='text-[15px]'><b>Episode :</b> {detailAnime.episodes}</p>
                                </div>
                            </div>
                            <div className="desc">
                                <p className='text-[15px]'>{detailAnime.synopsis}</p>
                            </div>
                        </div>
                        <h1 className="titleDetail m-0 md:text-[32px] text-[24px]">Trailer</h1>
                        {detailAnime.trailer.embed_url ? (
                                <div className="detailAnime flex flex-col">
                                    <iframe src={detailAnime.trailer.embed_url} className='videoTrailer'></iframe>
                                </div>
                            ) : (
                                <h1 className='md:text-[32px] text-[24px]'>Trailer tidak tersedia</h1>
                            )}
                        <h1 className="titleDetail m-0 md:text-[32px] text-[24px]">Episodes</h1>
                        <div className="detailAnime flex flex-col p-6 gap-[24px]">
                            <Episodes/>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default DetailAnime
