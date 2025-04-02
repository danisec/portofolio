import ServerIcon from '@/components/atoms/svg/Server';
import CommandIcon from '@/components/atoms/svg/Command';
import LayoutIcon from '@/components/atoms/svg/LayoutIcon';

interface ServiceItem {
  icon: React.ReactNode;
  name: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: <CommandIcon $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white stroke-current" />,
    name: 'Web Development',
    description:
      'Build responsive and interactive web applications using ReactJS, NextJS, and Laravel. Prioritize performance, security, and optimal user experience.',
  },
  {
    icon: <ServerIcon $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white stroke-current" />,
    name: 'Full-Stack Web Solutions',
    description:
      'Develop complete solutions from Front-End to Back-End, including API development, database integration, and deployment.',
  },
  {
    icon: <LayoutIcon $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white stroke-current" />,
    name: 'UI/UX Development',
    description:
      'Design a modern, clean, and user-friendly website with ReactJS & TailwindCSS, ensuring an intuitive user experience.',
  },
];

export default services;
