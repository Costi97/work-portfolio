import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    tesisquare,
    java,
    coldfusion,
    angular,
    postgresql,
    mantis,
    jenkins,
    portfolioproject
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "CI/CD",
      icon: creator,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Java",
      icon: java
    },
    {
      name: "CFML",
      icon: coldfusion
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Angular",
      icon: angular
    },
    {
      name: "postgresql",
      icon: postgresql
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "jenkins",
      icon: jenkins,
    },    
    {
      name: "mantis",
      icon: mantis
    }
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Tesisquare",
      icon: tesisquare,
      iconBg: "#FFFFFF",
      date: "Jan 2023 - Present",
      points: [
        "Engaged in the development and maintenance of critical functionalities for a retail front-office management web application.",
        "Pioneered the creation of a new invoice management system, introducing efficiency and precision to financial transaction processes.",
        "Led the reconstruction of the campaign manager functionality, simplifying the user experience and optimizing processes.",
        "Orchestrated the successful release of new major versions, providing comprehensive customer support."
      ]
    },
    {
      title: "Back End Developer",
      company_name: "Tesisquare",
      icon: tesisquare,
      iconBg: "#FFFFFF",
      date: "Oct 2019 - Dec 2022",
      points: [
        "Engineered and maintained resilient RESTful APIs, enhancing the platform's connectivity and facilitating seamless data interaction.",
        "Implemented advanced algorithms to optimize database queries, significantly reducing response times.",
        "Successfully managed the comprehensive maintenance of the entire application, consistently meeting and exceeding KPI targets.",
        "Took a leadership role in coaching and educating new team members, ensuring a smooth onboarding process."
      ]
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    }
  ];
  
  const projects = [
    {
      name: "My portfolio",
      description:
        "Personal web portfolio",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolioproject,
      source_code_link: "https://github.com/Costi97/work-portfolio",
    }
  ];

  const imagesAttribution = {
    backgroundWawe: '<a href="https://www.freepik.com/free-vector/3d-abstract-wave-pattern-background-vector_18880200.htm#page=2&query=cyberpunk&position=2&from_view=keyword&track=sph&uuid=e2127665-f31c-45d0-8219-44a0cc7d0d5b">Image by rawpixel.com</a> on Freepik',
    background2: '<a href="https://www.freepik.com/free-vector/black-background-with-light-pattern-black-background_39202421.htm#query=coding&position=26&from_view=search&track=sph&uuid=c46e00c6-f069-47a6-8018-dade8bb10fb1">Image by AndreaCharlesta</a> on Freepik',
    fullStack: 'Image by <a href="https://www.freepik.com/free-vector/hand-drawn-flat-design-sql-illustration_22112356.htm#query=full%20stack&position=8&from_view=search&track=ais&uuid=5b627cf3-2825-4535-b952-7c5b507404a4">Freepik</a>',
    backend: '<a href="https://www.freepik.com/free-vector/computer-technology-isometric-icon-server-room-digital-device-set-element-design-pc-laptop_4103157.htm#query=servers&position=2&from_view=search&track=sph&uuid=cb22968e-f799-45af-8c33-108056860eb9">Image by fullvector</a> on Freepik',
  }
  
  export { services, technologies, experiences, testimonials, projects, imagesAttribution };