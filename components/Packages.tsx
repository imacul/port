import React from 'react'
import { PackagesCard } from './PackagesCard';
import { packages } from '@/data';

const Packages = () => {
  return (
    <section className="py-20 w-full">
      <h2 className="heading">Choose Your <span className="text-purple">Digital Transformation</span> Package!</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-20">
        {packages.map((pack) => (
          <PackagesCard key={pack.title} {...pack} />
        ))}
      </div>
    </section>
  )
}

export default Packages;