import ReactStack from '@/components/atoms/svg/ReactStack';
import NextjsStack from '@/components/atoms/svg/NextjsStack';
import LaravelStack from '@/components/atoms/svg/LaravelStack';
import TypescriptStack from '@/components/atoms/svg/TypescriptStack';
import TailwindcssStack from '@/components/atoms/svg/TailwindcssStack';
import MysqlStack from '@/components/atoms/svg/MysqlStack';
import DockerStack from '@/components/atoms/svg/DockerStack';
import GithubStack from '@/components/atoms/svg/Github';
import FigmaStack from '@/components/atoms/svg/Figma';

interface TechStackItem {
  id: string;
  icon: React.ReactNode;
  category: string;
  name: string;
  description: string;
  outcome: string;
}

const techStacks = (theme: 'light' | 'dark'): TechStackItem[] => [
  {
    id: 'react',
    icon: (
      <ReactStack
        $className="w-6 h-6 lg:w-8 lg:h-8"
        $fillColor={theme === 'dark' ? '#ffffff' : '#000000'}
        $strokeColor={theme === 'dark' ? '#ffffff' : '#000000'}
      />
    ),
    category: 'Frontend',
    name: 'React',
    description: 'Component architecture for interactive interfaces.',
    outcome: 'Builds modular UI that scales with product complexity.',
  },
  {
    id: 'nextjs',
    icon: <NextjsStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    category: 'Frontend',
    name: 'Next JS',
    description: 'Framework for SSR, routing, and performance optimization.',
    outcome: 'Delivers faster pages and SEO-friendly user journeys.',
  },
  {
    id: 'tailwindcss',
    icon: <TailwindcssStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    category: 'Frontend',
    name: 'Tailwind CSS',
    description: 'Utility-first styling for rapid and consistent UI systems.',
    outcome: 'Keeps design implementation fast and maintainable.',
  },
  {
    id: 'typescript',
    icon: <TypescriptStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    category: 'Engineering Quality',
    name: 'TypeScript',
    description: 'Typed JavaScript for safer refactoring and clear contracts.',
    outcome: 'Reduces runtime errors and improves team confidence.',
  },
  {
    id: 'laravel',
    icon: <LaravelStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    category: 'Backend',
    name: 'Laravel',
    description: 'Backend framework for APIs, auth, and business logic.',
    outcome: 'Supports secure and structured feature delivery.',
  },
  {
    id: 'mysql',
    icon: <MysqlStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    category: 'Backend',
    name: 'MySQL',
    description: 'Relational database for transactional and reporting data.',
    outcome: 'Provides reliable structured data and query performance.',
  },
  {
    id: 'docker',
    icon: <DockerStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    category: 'Infrastructure',
    name: 'Docker',
    description: 'Containerized environment for local and deployment parity.',
    outcome: 'Reduces “works on my machine” deployment issues.',
  },
  {
    id: 'github',
    icon: <GithubStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    category: 'Infrastructure',
    name: 'Github',
    description: 'Version control and collaboration workflow platform.',
    outcome: 'Improves traceability, review quality, and release discipline.',
  },
  {
    id: 'figma',
    icon: <FigmaStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    category: 'Product Collaboration',
    name: 'Figma',
    description: 'Design collaboration tool for UI handoff and iteration.',
    outcome: 'Aligns engineering and design before implementation.',
  },
];

export default techStacks;
