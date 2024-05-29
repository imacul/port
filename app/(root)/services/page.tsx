import Image from 'next/image'
import React from 'react'

const page = () => {


  const Laptops = [
    {
        id: 1,
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        id: 2,
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "150",
        img: "/b1.svg",
  },
    {
        id: 3,
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "1000",
        img: "/b1.svg",
  },
    {
        id: 4,
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        id: 5,
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        id: 6,
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        id: 7,
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
    {
        title: "Elegant and great Dell XPS 15 laptop",
        description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
        price: "100",
        img: "/b1.svg",
  },
]

  const SmartPhones = [
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
]

  const SmartAndModernWatches = [
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
]

const SmartTvs = [
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
]

  const SmartAndModernSpeakers = [
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
  {
      title: "Elegant and great Dell XPS 15 laptop",
      description: "Buy and Check ou our Elegant Dell XPS 15 for every one especially full-stack developers",
      price: "100",
},
]

  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
    <section className="flex flex-wrap items-center justify-center pb-20 pt-36 sm:px-7 px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-around">
      {Laptops.map(({title, description, price, img, id}) => (
        <div className="border-2 border-white-200 rounded-tl-2xl items-center justify-center bg-black-200 py-8 px-4" key={id}>
          <div className="object-contain items-center bg-center w-full">
            {/* TODO: PLACE THE IMAGE PROPERLY IN THE CARD ON SURFACE DUO SCREEN  */}
            <Image src={img} width={345} height={145} alt={title} className="rounded-xl mb-4" />
          </div>
        <div className="flex flex-col text-center">
         <h1 className="font-bold text-base md:text-xl text-white-100">{title}</h1>
         <p className="text-sm text-white font-normal md:text-lg">{description}</p>
         <div className="flex flex-col">
           <p className="text-base text-white">{price}</p>
         </div>
       </div>
      </div>
      ))}
      </div>
    </section>
    </div>
    </main>
  )
}

export default page;