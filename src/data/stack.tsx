import ReactStack from '@/components/atoms/svg/ReactStack';
import NextjsStack from '@/components/atoms/svg/NextjsStack';
import LaravelStack from '@/components/atoms/svg/LaravelStack';
import TypescriptStack from '@/components/atoms/svg/TypescriptStack';
import TailwindcssStack from '@/components/atoms/svg/TailwindcssStack';
import MysqlStack from '@/components/atoms/svg/MysqlStack';
import PostgresqlStack from '@/components/atoms/svg/PostgresqlStack';
import DockerStack from '@/components/atoms/svg/DockerStack';
import GithubStack from '@/components/atoms/svg/Github';
import FigmaStack from '@/components/atoms/svg/Figma';

interface TechStackItem {
  id: string;
  icon: React.ReactNode;
  category: string;
  name: string;
  description: string;
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
  },
  {
    id: 'nextjs',
    icon: <NextjsStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    category: 'Frontend',
    name: 'Next JS',
    description: 'Framework for SSR, routing, and performance optimization.',
  },
  {
    id: 'tailwindcss',
    icon: <TailwindcssStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    category: 'Frontend',
    name: 'Tailwind CSS',
    description: 'Utility-first styling for rapid and consistent UI systems.',
  },
  {
    id: 'typescript',
    icon: <TypescriptStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    category: 'Engineering Quality',
    name: 'TypeScript',
    description: 'Typed JavaScript for safer refactoring and clear contracts.',
  },
  {
    id: 'laravel',
    icon: <LaravelStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    category: 'Backend',
    name: 'Laravel',
    description: 'Backend framework for APIs, auth, and business logic.',
  },
  {
    id: 'mysql',
    icon: <MysqlStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    category: 'Backend',
    name: 'MySQL',
    description: 'Relational database for transactional and reporting data.',
  },
  {
    id: 'postgresql',
    icon: <PostgresqlStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    category: 'Backend',
    name: 'PostgreSQL',
    description: 'Advanced relational database for complex queries and data integrity.',
  },
  {
    id: 'docker',
    icon: <DockerStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    category: 'Infrastructure',
    name: 'Docker',
    description: 'Containerized environment for local and deployment parity.',
  },
  {
    id: 'github',
    icon: <GithubStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    category: 'Infrastructure',
    name: 'Github',
    description: 'Version control and collaboration workflow platform.',
  },
  {
    id: 'figma',
    icon: <FigmaStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    category: 'Product Collaboration',
    name: 'Figma',
    description: 'Design collaboration tool for UI handoff and iteration.',
  },
];

export default techStacks;
