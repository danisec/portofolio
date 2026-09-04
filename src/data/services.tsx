import ServerIcon from '@/components/atoms/svg/Server';
import CommandIcon from '@/components/atoms/svg/Command';
import LayoutIcon from '@/components/atoms/svg/LayoutIcon';

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  name: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    id: 'web-development',
    icon: <CommandIcon $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white stroke-current" />,
    name: 'Web Development',
    description:
      'Build responsive and interactive web applications using React, Next.js, and Laravel with clear engineering standards, ready for production use.',
  },
  {
    id: 'fullstack-solutions',
    icon: <ServerIcon $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white stroke-current" />,
    name: 'Full-Stack Web Solutions',
    description:
      'Develop complete solutions from frontend to backend, including API design, database integration, and release preparation.',
  },
  {
    id: 'ui-ux-development',
    icon: <LayoutIcon $className="w-6 h-6 lg:w-8 lg:h-8 dark:text-white stroke-current" />,
    name: 'UI/UX Development',
    description:
      'Design and implement modern interfaces with React and Tailwind CSS that prioritize hierarchy, accessibility, and usability.',
  },
];

export default services;
