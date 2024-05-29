import Grid from '@/components/Grid';
import RecentProjects from '@/components/RecentProjects';
import React from 'react'

const page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
       <section className="pb-20 pt-36">
      <div>
          Hey Look!
        </div>
        <Grid />
        <RecentProjects />
       </section>
      </div>
    </main>
  )
}

export default page;