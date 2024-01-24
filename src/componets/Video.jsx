import React from 'react'
import { Player } from 'video-react'
import video1 from "../assets/img/video.mp4";

const Video = () => {
    return (
        <div>
        <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3 mt-[22px]">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <video className="min-w-full min-h-full absolute object-cover" src={video1} type="video/mp4" autoPlay muted loop></video>
            </div>
            <div className="video-docker relative z-10">
                <div className="text-[240px] lg:text-[180px] md:text-[150px] sm:text-[120px] leading-[230px] lg:leading-[150px] md:leading-[120px] mb-[40px] text-white">
                    Meet your<br></br>future team
                </div>
                <div className="mb-16 font-manrope text-white text-opacity-70 text-[34px] lg:text-[28px] md:text-[24px] sm:text-[20px] leading-30 lg:leading-24 md:leading-20 font-semibold text-centre">
                    Register to get full CVs, schedule interviews and hire engineers in one click
                </div>
                <button className="btn h-86 min-w-[287px] px-57 text-[30px] lg:text-[24px] md:text-[20px] leading-44 lg:leading-36 md:leading-30 inline-block py-9 px-15 hover:bg-blue-300 hover:text-black border-0 cursor-pointer no-underline rounded-[50%] bg-blue-800 text-white">
                    Hire developers
                </button>
            </div>
        </section>
    </div>
    
    )
}

export default Video