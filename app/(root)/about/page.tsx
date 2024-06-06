import {AboutHero} from '@/components/AboutHero';
import Grid from '@/components/Grid';
import RecentProjects from '@/components/RecentProjects';
import React from 'react'

const page = () => {
  return (
    <main>
        <AboutHero />
        <Grid />
        <RecentProjects />
    </main>
  )
}

export default page;