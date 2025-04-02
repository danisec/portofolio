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
  icon: React.ReactNode;
  name: string;
  description: string;
}

const techStacks = (theme: 'light' | 'dark'): TechStackItem[] => [
  {
    icon: (
      <ReactStack
        $className="w-6 h-6 lg:w-8 lg:h-8"
        $fillColor={theme === 'dark' ? '#ffffff' : '#000000'}
        $strokeColor={theme === 'dark' ? '#ffffff' : '#000000'}
      />
    ),
    name: 'React',
    description: 'Javascript Library',
  },
  {
    icon: <NextjsStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    name: 'Next JS',
    description: 'React Framework',
  },
  {
    icon: <LaravelStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    name: 'Laravel',
    description: 'PHP Framework',
  },
  {
    icon: <TypescriptStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    name: 'TypeScript',
    description: 'Javascript Superset',
  },
  {
    icon: <TailwindcssStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    name: 'Tailwind CSS',
    description: 'Utility First CSS Framework',
  },
  {
    icon: <MysqlStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    name: 'MySQL',
    description: 'Database Management',
  },
  {
    icon: <GithubStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    name: 'Github',
    description: 'Version Control',
  },
  {
    icon: <DockerStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    name: 'Docker',
    description: 'Containerization',
  },
  {
    icon: <FigmaStack $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white fill-current" />,
    name: 'Figma',
    description: 'Design Tool',
  },
];

export default techStacks;
