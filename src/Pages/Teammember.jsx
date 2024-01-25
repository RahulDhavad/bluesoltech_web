import React from 'react'
import Team from '../component/Team'
import Hero from '../component/Hero'
import img3 from '../assets/img/human-brain-detailed-structure.jpg';




const Teammember = () => {
    return (
        <div>
            <Hero title="Our Team" subtitle=" Team" imagePath={img3} />

            <Team />
        </div>
    )
}

export default Teammember