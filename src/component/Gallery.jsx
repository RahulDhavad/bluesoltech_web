import React from 'react'
import img1 from '../assets/img/1530826_3981_720.jpg';
import img2 from '../assets/img/earth-seen-from-space_720.jpg';
import img3 from '../assets/img/human-brain-detailed-structure.jpg';
import img4 from '../assets/img/logo-black.png';
import img5 from '../assets/img/soccer-players-celebrating-victory-with-trophee_720.jpg'
import about from '../assets/img/about.png';


const Gallery = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-2 gap-0 justify-items-center">
            <div className="container mx-auto flex items-center justify-items-center py-0 bg-[#ebebeb] h-[440px] rounded-3xl">
              {/* Left side content */}
              <div className="w-full p-6">
                <h1 className="text-4xl font-bold mb-4 text-gray-600">
                About us
                </h1>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex excepturi quae fuga necessitatibus laboriosam officia harum vitae labore et rem.
                </p>
                <button className="btn mt-4 bg-blue-600 p-4 rounded-lg px-8 text-white hover:bg-blue-800">More</button>
              </div>

              {/* Right side image */}
              <div className="hidden md:block w-1/2">
                <img
                  className="object-cover w-full h-full"
                  src={about}
                  alt="Right Side Image"
                />
              </div>
            </div>
            <div className="row items-center h-[440px]">
              <div className="col-12 lg:col-5 md:col-12 sm:col-12">
                <div
                  className="webby-about-img-box home-about-box"
                  data-aos="zoom-in"
                >
                  <div className="webby-about-circle-img relative">
                    <div className="webby-about-img  inset-0 transition duration-300 ease-in-out transform hover:scale-105">
                      <img
                        src={img2}
                        alt=""
                        className="w-[500px] h-[440px] object-cover rounded-3xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>

      <div className="container mx-auto mt-4 justify-center w-[1120px]">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-2 justify-center">
          <div className="grid gap-y-7">
            <div className='flex justify-end transition duration-300 ease-in-out transform hover:scale-105'>
              <img className=" max-w-[300px] rounded-lg" src={img1} alt="" />
            </div>
            <div className='flex justify-end transition duration-300 ease-in-out transform hover:scale-105'>
              <img className="max-w-[300px] rounded-lg" src={img5} alt="" />
            </div>
          </div>
          <div className="grid gap-0 transition duration-300 ease-in-out transform hover:scale-105">
            <div>
              <img className="max-w-[500px] h-[700px] rounded-lg gap-11" src={img3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery