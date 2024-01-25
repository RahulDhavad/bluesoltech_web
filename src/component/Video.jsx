import React from 'react'
import { Player } from 'video-react'
import video1 from "../assets/img/video.mp4";

const Video = () => {
    return (
        <div>
        <section className="relative h-screen  flex flex-col items-center justify-center text-center text-white py-0 px-3 mt-[22px]">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <video className="min-w-full min-h-full absolute object-cover" src={video1} type="video/mp4" autoPlay muted loop></video>
            </div>
            <div className="video-docker relative z-10">
                <div className="text-6xl lg:text-9xl md:text-3xl sm:text-2xl leading-tight mb-8 text-white">
                    Meet your<br></br>future team
                </div>
                <div className="mb-16 font-manrope text-white text-opacity-70 text-lg lg:text-base md:text-sm sm:text-xs leading-7 lg:leading-6 md:leading-5 font-semibold text-center">
                    Register to get full CVs, schedule interviews and hire engineers in one click
                </div>
                <button className="btn h-16 min-w-[287px] md:w-[200px] sm:w-[150px] px-8 text-lg lg:text-base md:text-sm leading-11 lg:leading-9 md:leading-7 inline-block py-3 px-5 hover:bg-blue-300 hover:text-black border-0 cursor-pointer rounded-full bg-blue-800 text-white">
                    Hire developers
                </button>
            </div>
        </section>
    </div>
    
    )
}

export default Video