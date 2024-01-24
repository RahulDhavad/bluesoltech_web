import React from 'react'
import Hero from '../component/Hero'
import Servicecont from '../component/Servicecont'
import Servicestype from '../component/Servicestype'

const Services = () => {
  return (
    <div className=' px-4 !overflow-y-hidden'>
      <Hero/>
      <Servicecont/>
      <Servicestype/>
    </div>
  )
}

export default Services