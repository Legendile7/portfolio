import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Divesh Gupta',
  description: "Learn about me!",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Divesh Gupta`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">High School Senior</strong>, studying
        at <strong className="text-stone-100">Alliance Academy for Innovation</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me doing <strong className="text-stone-100">Magic Tricks</strong>,
        coding or playing a <strong className="text-stone-100">Video Game</strong>, or competing in {' '}
        <strong className="text-stone-100">Cybersecurity Competitions</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/1k25e8Cb8fROFwJ1nctSd9uFZb5UGN807/view?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `mailto:diveshg9@gmail.com`,
      text: 'Email',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Cybersecurity and Computer Science Student. Proficient in Java, Python, and C#. Love to compete in hacking, game design, and coding contests!`,
  aboutItems: [
    {label: 'Location', text: 'Cumming, GA', Icon: MapIcon},
    {label: 'Age', text: '16', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Magic, Coding, Hacking', Icon: SparklesIcon},
    {label: 'Study', text: 'Alliance Academy for Innovation', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Mathnasium', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 10,
      },
      {
        name: 'Spanish',
        level: 7,
      },
    ],
  },
  {
    name: 'Programming',
    skills: [
      {
        name: 'Java',
        level: 10,
      },
      {
        name: 'C#',
        level: 9,
      },
      {
        name: 'Python',
        level: 8,
      },
    ],
  },
  {
    name: 'Game Development',
    skills: [
      {
        name: 'Unity',
        level: 9,
      },
      {
        name: 'Unreal Engine',
        level: 5,
      },
      {
        name: 'Flowlab',
        level: 10,
      },
    ],
  },
  {
    name: 'Hacking',
    skills: [
      {
        name: 'Open Source Intelligence',
        level: 10,
      },
      {
        name: 'Cryptography',
        level: 9,
      },
      {
        name: 'Password Cracking',
        level: 9,
      },
      {
        name: 'Scanning & Reconnaissance',
        level: 8,
      },
      {
        name: 'Log Analysis',
        level: 7,
      },
      {
        name: 'Network Traffic Analysis',
        level: 6,
      },
      {
        name: 'Web Application Exploitation',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'GridShift Cipher',
    description: 'A custom encryption algorithm that uses a key and multiple Caesar Ciphers.',
    url: 'https://github.com/Legendile7/GridShift',
    image: porfolioImage1,
  },
  {
    title: 'Common Ground',
    description: 'Website for a youth organization',
    url: 'https://common-ground.wixsite.com/club',
    image: porfolioImage2,
  },
  {
    title: 'Overshock Games',
    description: 'Website for company.',
    url: 'http://overshock.games',
    image: porfolioImage3,
  },
  {
    title: 'Astroflight',
    description: 'Multiplatform Cloud Video game',
    url: 'https://overshock-games.itch.io/astroflight',
    image: porfolioImage4,
  },
  {
    title: 'Origins',
    description: 'First Person Shooter Video Game for PC\'s',
    url: 'https://overshock-games.itch.io/origins',
    image: porfolioImage5,
  },
  {
    title: 'Marooned',
    description: 'Upcoming First Person SHooter Video Game for PC\'s',
    url: 'https://overshock-games.itch.io/marooned',
    image: porfolioImage6,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Aug 2019 - Present',
    location: 'Alliance Academy for Innovation',
    title: 'Cybersecurity Student',
    content: <p>Classes: AP Computer Science Principles, Game Design Animation & Simulation, AP Computer Science A, Digital Technology, Cybersecurity</p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2022 - Present',
    location: 'Mathnasium',
    title: 'Instructor',
    content: (
      <p>
        ▪ Teach study skills and other methods for test preparation<br></br>
        ▪ Assist students with homework using curriculum and materials provided by program<br></br>
        ▪ Review and assess student work, notes, and discussions

      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: '',
  items: [
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/legendile7'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/divesh2027'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/legendile7'},
];
