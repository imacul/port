import { Services } from '@/data';
import React from 'react';
import { ServicesCard } from './ServiceCard';

const AdditionalServices = () => {
    return(
      <section className="py-20 w-full">
      <h2 className="heading my-4">Enhance Your <span className="text-purple">Online Presence</span> with Our Ongoing Services</h2>
      <p className="relative text-sm md:text-lg max-w-4xl text-center mx-auto text-white font-normal">
        Take your website to the next level with our ongoing services, designed to
        help you stay ahead of the competition and keep your website fresh and
        secure.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
        {Services.map((service) => (
          <ServicesCard key={service.title} {...service} />
        ))}
      </div>
  </section>
    )
}

export default AdditionalServices;