interface Testimonials {
  quote: string;
  name: string;
  title: string;
  img: string;
}



export const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
];

export const gridItems = [
  {
    id: 1,
    title: "We prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "We are very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Our tech stack",
    description: "We constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "We are a tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building Projects Mastery Platform",
    description: "Our Current Project!",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Would you like to email us to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials: Testimonials[] = [
  {
  quote:
  "Thier expertise in web development is exceptional. They delivered our project on time, and the result exceeded our expectations. Their dedication to quality and customer satisfaction is impressive.",
  name: "Emily Chen",
  title: "Marketing Manager",
  img: "/prof1.svg",
  },
  {
  quote:
  "Working with Projects Mastery Connect was a pleasure. They listened to our needs and created a website that perfectly represents our brand. Their attention to detail and creative approach are outstanding.",
  name: "David Lee",
  title: "CEO",
  img: "/prof2.svg",
  },
  {
  quote:
  "Projects Mastery Connect's passion for web development shines through in their work. They're a true professional team, and their enthusiasm is contagious. We couldn't be happier with our new website!",
  name: "Sophia Patel",
  title: "CEO",
  img: "/prof3.svg",
  },
  {
  quote:
  "I love thier expertise in website design and development is top-notch. They delivered a high-quality website that has boosted our online presence. Their communication skills and project management are excellent.",
  name: "Ryan Brown",
  title: "Operations Manager",
  img: "/prof4.svg",
  },
  {
  quote:
  "Projects Mastery Connect's creative approach and technical skills have resulted in a website that exceeds our expectations. Their dedication to customer satisfaction is impressive, and we highly recommend their services.",
  name: "Julia Kim",
  title: "Creative Director",
  img: "/prof5.svg",
  },
  ];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Website Design and Development",
    desc: "We offer customized website design that is mobile-friendly and responsive, developed with the latest technologies to provide a modern and user-friendly website that meets your business needs.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Content Creation",
    desc: "Our content creation services include high-quality writing that is optimized for search engines, engaging and informative, and tailored to resonate with your target audience.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Website Maintenance",
    desc: "We provide ongoing website maintenance, including regular updates and security checks, priority support and troubleshooting, and monthly backups and storage to ensure your website remains secure and up-to-date.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Additional Features",
    desc: "We offer tailored website features, including a contact form and social media integration, a blog section and news feed, with any features you want us to add to your website or software and customized design elements to enhance your website's functionality and user experience.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];


export const packages = [
  {
    title: 'Launch Your Online Presence - Fast & Affordable', // Emphasize speed and affordability
    description:
      'Get started online quickly and easily with a professional 3-5 page website. This package includes basic SEO optimization, mobile-responsive design, 2-3 revisions, and social media integration to connect with your audience.',
    price: '$1,500 - $2,000', // Reduced price range
    benefits: [
       '3-5 page website (perfect for starting businesses)', // Highlight appropriate website size
       'Basic SEO optimization (improve search visibility)',
       'Mobile-responsive design (great for all devices)',
       '2-3 revisions (ensure your satisfaction)',
       'Fast turnaround time (get online in 2-3 weeks)',
       'Social Media Integration (connect with your customers)',
    ],
    cta: 'Build My Website Now!', // Create a sense of urgency
    href: 'https://wa.me/2347076151463',
  },  
  {
    title: 'Stand Out Online - Advanced Website & Marketing',
    description:
      'Attract more customers and elevate your brand with a custom-designed 8-12 page website. This package includes advanced SEO optimization for better search ranking, eye-catching custom graphics & animations, and priority support to ensure your success.',
    price: '$5,000 - $7,000',  // Price remains the same
    benefits: [
      '8-12 page custom website (tailored to your needs)',  // Emphasize customization
      'Advanced SEO optimization (dominate search results)',   // Stronger benefit description
      'Custom graphics & animations (create a lasting impression)', // Highlight visual appeal
      '5-7 revisions (ensure your vision comes to life)',  // Focus on client satisfaction
      'Priority support (dedicated team for fast assistance)',  // Explain priority support benefit
      'Social Media Integration (connect with your audience)',
    ],
    cta: 'Attract More Customers', // Extended CTA with clear benefit
    href: 'https://wa.me/2347076151463',
  },
  
  {
    title: 'Dominate Your Market - Enterprise-Level Website',
    description:
      'Take complete control of your online presence with a comprehensive website solution. This package includes a feature-rich 13+ page website, advanced SEO optimization for maximum visibility, custom database integration for complex data management, and a dedicated project manager for a seamless experience.',
    price: '$10,000 - $15,000',  // Price remains the same
    benefits: [
      '13+ page website (extensive customization & features)',  // Highlight extensive capabilities
      'Comprehensive SEO optimization (dominate search results & attract qualified leads)',   // Strengthen benefit descriptions
      'Custom database integration (manage complex data efficiently)', // Explain database integration benefit
      '10+ revisions (ensure your website is perfect)',  // Focus on client satisfaction
      'Dedicated project manager (your personal point of contact)',  // Emphasize dedicated support
      'Social Media Integration (connect and engage with your audience)',
    ],
    cta: 'Build a Powerful Website', // Extended CTA with clear benefit
    href: 'https://wa.me/2347076151463',
  },  
];

export const Services = [
   // Content Services
   {
    title: 'Craft Compelling Content',
    description:
      'Get high-quality content creation services for your website, including blog posts, product descriptions, and more.',
    price: '$250 - $1,500',
    benefits: [
      'High-quality content creation',
      'Engaging writing style',
      'Optimized for SEO',
      'Estimated timeframe (1-3 weeks)',
    ],
    cta: 'Write My Content',
    href: 'https://wa.me/2347076151463',
  },
  // Security Services
  {
    title: 'Stay Up-to-Date and Secure',
    description:
      'Keep your website updated and secure with our ongoing maintenance and updates package.',
    price: '$500 - $2,000 per month',
    benefits: [
      'Regular website updates',
      'Security monitoring and fixes',
      'Performance optimization',
      'Ongoing support',
    ],
    cta: 'Maintain My Website',
    href: 'https://wa.me/2347076151463',
  },
];