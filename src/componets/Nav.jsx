import React from 'react'

const Nav = () => {
  return (
    <>
    <div className="backdrop-blur-[2px] bg-black bg-opacity-10 flex w-full items-stretch justify-between gap-5 pl-9 pr-12 py-8 max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f963ef648f2bb5300f330ce8b6335489cc7781ac0d63053793da644b6baa13de?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f963ef648f2bb5300f330ce8b6335489cc7781ac0d63053793da644b6baa13de?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f963ef648f2bb5300f330ce8b6335489cc7781ac0d63053793da644b6baa13de?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f963ef648f2bb5300f330ce8b6335489cc7781ac0d63053793da644b6baa13de?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f963ef648f2bb5300f330ce8b6335489cc7781ac0d63053793da644b6baa13de?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f963ef648f2bb5300f330ce8b6335489cc7781ac0d63053793da644b6baa13de?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f963ef648f2bb5300f330ce8b6335489cc7781ac0d63053793da644b6baa13de?apiKey=7b31b7140b444c699f3522e50f1c6b97&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f963ef648f2bb5300f330ce8b6335489cc7781ac0d63053793da644b6baa13de?apiKey=7b31b7140b444c699f3522e50f1c6b97&"
          className="aspect-square object-contain object-center w-[58px] overflow-hidden shrink-0 max-w-full"
        />
        <span className="flex items-start justify-between gap-5 mt-1.5 self-start max-md:max-w-full max-md:flex-wrap">
          <div className="text-black text-base self-center whitespace-nowrap my-auto">
            HOME
          </div>
          <div className="text-black text-base self-center my-auto">
            ABOUT US
          </div>
          <div className="text-black text-base self-center my-auto">
            SERVICE
          </div>
          <span className="text-white text-base whitespace-nowrap bg-blue-600 self-stretch grow justify-center items-stretch px-8 py-5 rounded-[30px] max-md:px-5">
            GET STARTED
          </span>
        </span>
      </div>
    </>
  )
}

export default Nav