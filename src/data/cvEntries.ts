export type CvEntry = {
  date: string;
  title: string;
  slug: string;            // matches the article route
  description: string;
  gradient: string;
  logoSrc?: string;        // small logo path under /public
  tileImage?: string;      // image for tile hover/expand
  coverImage?: string;     // hero image used in the article page
};

export const cvEntries: CvEntry[] = [
  {
    date: 'June 2025',
    title: "Papercup's Orchestrator",
    slug: 'papercup-orchestrator',
    description: 'Building the orchestration layer for AI-powered dubbing at scale',
    gradient: 'from-neon-purple to-neon-pink',
    logoSrc: '/images/logos/papercup.png',
    tileImage: '/images/cv/papercup.jpg',
    coverImage: '/images/cv/papercup.jpg'
  },
  {
    date: 'November 2022',
    title: "Made.com's Secret Weapon",
    slug: 'madecom-secret-weapon',
    description: 'Transforming data infrastructure for e-commerce excellence',
    gradient: 'from-neon-blue to-neon-purple',
    logoSrc: '/images/logos/made.png',
    tileImage: '/images/cv/made.png',
    coverImage: '/images/cv/made.png'
  },
  {
    date: 'November 2021',
    title: "Project Agora's Ant Worker",
    slug: 'project-agora-ant-worker',
    description: 'Contributing to the future of decentralized networks',
    gradient: 'from-neon-pink to-neon-purple',
    logoSrc: '/images/logos/projectagora.png',
    tileImage: '/images/cv/projectagora,png',
    coverImage: '/images/cv/projectagora.png'
  },
  {
    date: 'June 2019',
    title: "Neurocom's rising star",
    slug: 'neurocom-rising-star',
    description: 'Where the journey began in data engineering',
    gradient: 'from-silver to-neon-blue',
    logoSrc: '/images/logos/neurocom.png',
    tileImage: '/images/cv/neurocom.png',
    coverImage: '/images/cv/neurocom.png'
  }
];
