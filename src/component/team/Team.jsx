import React from 'react'
 import './Team.css'; 
 
const Team = () => {
  return (
    <div className="about-company bg-blue-100 p-5 md:p-10">
    <div className="about-company-main w-full flex flex-col md:flex-row items-center justify-between">
      <div className="about-company-img relative flex justify-center text-center items-center md:items-start h-96 w-96 md:w-80">
        <div className="img-round absolute transform-origin-center animation-rotateImg1 md:m-2">
          <img src="/images/first-circle.png" alt="Circle Image" className="w-4/5 md:w-full" />
        </div>
        <div className="img-circle absolute transform-origin-center animation-rotateImg m-2">
          <img src="/images/first-circle.png" alt="Circle Image" className="w-5/6 md:w-full" />
        </div>
        <div className="final-img absolute z-1 border-6 border-blue-800 overflow-hidden justify-center rounded-full w-3/4 md:w-2/3">
          <img src="/images/home-about-img.png" alt="Final Image" className="w-full" />
        </div>
      </div>
      <div className="about-company-content w-full md:w-1/2">
        {/* Your content goes here */}
      </div>
    </div>
  </div>
  )
}

export default Team