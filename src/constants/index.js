import {
  frontend,
  backend,
  // ux,
  // prototyping,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  postgresql,
  thinkfulbnb,
  // space,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  }
];

// add in Express, Bootstrap
const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  }
];

const experiences = [
  {
    title: 'Cross-Functional Store Manager',
    company_name: 'Carmax',
    icon: '',
    iconBg: '#333333',
    date: 'Mar 2019 - Present',
  },
  {
    title: 'Software Developer',
    company_name: 'Thinkful',
    icon: '',
    iconBg: '#333333',
    date: 'Aug 2023 - Jan 2024',
  },
  {
    title: 'Sales manager',
    company_name: 'Sprint',
    icon: '',
    iconBg: '#333333',
    date: 'May 2014 - Mar 2019',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Flashcard-o-matic',
    description: 'An online study application that gives teachers the ability to create, read, update, edit, and delete decks and cards for their students to study.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: '',
    repo: 'https://github.com/petrihcour/flashcard-app',
    demo: 'https://shaqdeff.github.io/KomiKult/',
  },
  {
    id: 'project-2',
    name: 'Thinkful-bnb',
    description:
      'A static website that emulates AirBnB and focuses on a responsive, intuitive user interface with a mobile-first approach.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: thinkfulbnb,
    repo: 'https://github.com/petrihcour/thinkfulbnb-project',
    demo: 'https://petrihcour.github.io/thinkfulbnb-project/',
  },
  {
    id: 'project-3',
    name: 'WeLoveMovies',
    description: 'A database for a movie website, enabling users to search for their favorite movies.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: '',
    repo: 'https://github.com/petrihcour/WeLoveMovies-Backend',
    demo: 'https://welovemovies-frontend-sjx0.onrender.com/',
  },
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: movie,
  //   repo: 'https://github.com/shaqdeff/Movie-Metro',
  //   demo: 'https://movie-metro.netlify.app/',
  // },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { services, technologies, experiences, projects };
