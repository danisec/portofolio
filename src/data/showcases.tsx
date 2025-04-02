import LaravelStack from '@/components/atoms/svg/LaravelStack';
import ReactStack from '@/components/atoms/svg/ReactStack';
import MysqlStack from '@/components/atoms/svg/MysqlStack';
import TailwindcssStack from '@/components/atoms/svg/TailwindcssStack';

interface ShowcaseItem {
  image?: string;
  title?: string;
  alt?: string;
  icons?: { id: string; icon: React.ReactNode; name: string }[];
  description?: string;
  github?: string;
  liveDemo?: string;
}

const showcases = (theme: 'light' | 'dark'): ShowcaseItem[] => [
  {
    image: '/images/showcase/kinerjaplus.png',
    title: 'Kinerjaplus',
    alt: 'Kinerjaplus',
    icons: [
      {
        id: 'laravel',
        icon: <LaravelStack $className="w-6 h-6 dark:text-white fill-current" />,
        name: 'Laravel',
      },
      {
        id: 'mysql',
        icon: <MysqlStack $className="w-6 h-6 dark:text-white fill-current" />,
        name: 'MySQL',
      },
      {
        id: 'tailwindcss',
        icon: <TailwindcssStack $className="w-6 h-6 dark:text-white fill-current" />,
        name: 'Tailwind CSS',
      },
    ],
    description: `KinerjaPlus is a web application designed to facilitate the teacher performance appraisal process at Erenos
 School. This application aims to provide an effective, ef cient, and objective tool in conducting teacher
 performance appraisals based on predetermined criteria. KinerjaPlus is built using the Laravel 10 framework.`,
    github: 'https://github.com/danisec/kinerjaplus',
    liveDemo: '/',
  },
  {
    image: '/images/showcase/ereport-erenos.png',
    title: 'E-report Erenos',
    alt: 'E-report Erenos',
    icons: [
      {
        id: 'laravel',
        icon: <LaravelStack $className="w-6 h-6 dark:text-white fill-current" />,
        name: 'Laravel',
      },
      {
        id: 'mysql',
        icon: <MysqlStack $className="w-6 h-6 dark:text-white fill-current" />,
        name: 'MySQL',
      },
      {
        id: 'tailwindcss',
        icon: <TailwindcssStack $className="w-6 h-6 dark:text-white fill-current" />,
        name: 'Tailwind CSS',
      },
    ],
    description: `E-Report Erenos is a web application built using the Laravel 9 framework. This application provides features
 for managing student data, teachers, subjects, attendance, grades, and nal student report results.`,
    github: 'https://github.com/danisec/ereport-erenos',
    liveDemo: '/',
  },
  {
    image: '/images/showcase/sim-obe.png',
    title: 'Sistem Informasi Manajemen Outcome-Based Education',
    alt: 'Sistem Informasi Manajemen Outcome-Based Education',
    icons: [
      {
        id: 'laravel',
        icon: <LaravelStack $className="w-6 h-6 dark:text-white fill-current" />,
        name: 'Laravel',
      },
      {
        id: 'mysql',
        icon: <MysqlStack $className="w-6 h-6 dark:text-white fill-current" />,
        name: 'MySQL',
      },
      {
        id: 'tailwindcss',
        icon: <TailwindcssStack $className="w-6 h-6 dark:text-white fill-current" />,
        name: 'Tailwind CSS',
      },
    ],
    description: `Sistem Informasi Manajemen Outcome-Based Education (SIM-OBE) adalah platform digital yang dirancang untuk membantu institusi pendidikan dalam menerapkan dan mengelola sistem pendidikan berbasis capaian pembelajaran (OBE). Dengan fitur-fitur yang komprehensif, SIM-OBE memudahkan administrasi akademik, pemetaan capaian pembelajaran, dan analisis hasil belajar mahasiswa secara efisien dan terstruktur.`,
    github: 'https://github.com/danisec/sim-obe',
    liveDemo: '/',
  },
  {
    image: '/images/showcase/newshub.png',
    title: 'NewsHub',
    alt: 'NewsHub',
    icons: [
      {
        id: 'react',
        icon: (
          <ReactStack
            $className="w-6 h-6"
            $fillColor={theme === 'dark' ? '#ffffff' : '#000000'}
            $strokeColor={theme === 'dark' ? '#ffffff' : '#000000'}
          />
        ),
        name: 'React',
      },
      {
        id: 'tailwindcss',
        icon: <TailwindcssStack $className="w-6 h-6 dark:text-white fill-current" />,
        name: 'Tailwind CSS',
      },
    ],
    description: `NewsHub is a website that contains up-to-date and up-to-date news and information content.`,
    github: 'https://github.com/danisec/newshub',
    liveDemo: '/',
  },
];

export default showcases;
