import React from 'react'

const Work = () => {
  return (
    <>
      <span className="flex w-full flex-col items-stretch mt-11 px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="text-blue-600 text-8xl font-extrabold self-stretch mt-96 max-md:max-w-full max-md:text-4xl max-md:mt-10">
          <span className="text-amber-300">OUR </span>
          <span className="text-blue-600">WORK</span>
        </div>{" "}
        <div className="text-white text-xl font-extrabold whitespace-nowrap mr-32 mt-44 self-end max-md:mr-2.5 max-md:mt-10">
          MORE
        </div>
        <div className="max-md:max-w-full max-md:mr-2">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[72%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ab6adb5e73cf080fb6625b0810a47e03c1c1c1899fedb182c61c28e81159cf57?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab6adb5e73cf080fb6625b0810a47e03c1c1c1899fedb182c61c28e81159cf57?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab6adb5e73cf080fb6625b0810a47e03c1c1c1899fedb182c61c28e81159cf57?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab6adb5e73cf080fb6625b0810a47e03c1c1c1899fedb182c61c28e81159cf57?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab6adb5e73cf080fb6625b0810a47e03c1c1c1899fedb182c61c28e81159cf57?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab6adb5e73cf080fb6625b0810a47e03c1c1c1899fedb182c61c28e81159cf57?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab6adb5e73cf080fb6625b0810a47e03c1c1c1899fedb182c61c28e81159cf57?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ab6adb5e73cf080fb6625b0810a47e03c1c1c1899fedb182c61c28e81159cf57?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
                className="aspect-[0.95] object-contain object-center w-full shadow-md overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>{" "}
            <div className="flex flex-col items-stretch w-[28%] ml-5 max-md:w-full max-md:ml-0">
              <span className="flex flex-col items-stretch mt-6 max-md:mt-10">
                <div className="text-black text-6xl font-extrabold max-md:text-4xl">
                  Lorem Ipsum
                </div>{" "}
                <div className="text-black text-5xl mt-20 max-md:text-4xl max-md:mt-10">
                  Lorem Ipsum is simply <br />
                  dummytextof the printing
                  <br /> and typesetting
                </div>{" "}
                <span className="text-white text-xl font-extrabold bg-blue-600 justify-center items-center mt-40 px-16 py-8 rounded-[30px] max-md:mt-10 max-md:px-5">
                  MORE
                </span>
              </span>
            </div>
          </div>
        </div>{" "}
        <div className="text-black text-lg font-semibold whitespace-nowrap mr-96 mt-64 self-end max-md:mr-2.5 max-md:mt-10">
          NEWS LATTER
        </div>
      </span>{" "}
    
    </>
  )
}

export default Work