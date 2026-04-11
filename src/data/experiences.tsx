interface ExperienceItem {
    id?: number;
    institution?: string;
    logo?: string;
    alt?: string;
    title?: string;
    period?: string;
    location?: string;
    work?: string;
    descriptionType?: 'paragraph' | 'list';
    description?: string | string[];
    detail?: string;
}

const experiences: ExperienceItem[] = [
    {
        id: 1,
        institution: 'BuildWithAngga',
        logo: '/images/logo/buildwithangga.png',
        alt: 'BuildWithAngga Logo',
        title: 'Backend Developer',
        period: 'Sep 2025 — Feb 2026',
        location: 'Work From Home',
        work: 'Internship',
        descriptionType: 'list',
        detail:
            'Contributed to both engineering and product development processes at BuildWithAngga, focusing on building real-world source code projects, creating educational materials, and improving code quality across multiple platforms.',
        description: [
            'Created and published educational articles containing practical tips and insights for developers on the BuildWithAngga website, contributing to platform content quality and user engagement.',
            'Performed manual Quality Assurance (QA) testing across multiple web pages to ensure functionality, usability, and consistency, helping maintain a smooth user experience.',
            'Developed and maintained source code projects using Next.js, including real-world case studies such as digital village management systems, focusing on clean architecture and reusable components.',
            'Designed and built interactive learning materials for the "Vibe Coding Next.js" class, including a hospital dashboard project integrated with modern development approaches.',
            'Refactored existing website codebase using Laravel to improve code structure, readability, and overall performance, ensuring better maintainability for future development.',
        ],
    },
    {
        id: 2,
        institution: 'Sekolah Erenos',
        logo: '/images/logo/erenos.png',
        alt: 'Sekolah Erenos Logo',
        title: 'Website Developer',
        period: 'Feb 2023 — Aug 2023',
        location: 'Tangerang Selatan',
        work: 'Internship',
        descriptionType: 'list',
        description: [
            'Developed and maintained the E-Report Erenos web application using Laravel 9 for backend development and Blade for frontend rendering.',
            'Designed and implemented database structures using MySQL to store and manage student data, teacher information, subjects, attendance, and grades efficiently.',
            'Created an intuitive dashboard for administrators, teachers, and students to manage academic records and generate final student reports seamlessly.',
            'Implemented role-based access control (RBAC) to ensure secure and structured access for different user levels within the system.',
            'Integrated attendance tracking and automated report generation, reducing manual work and improving efficiency in student performance evaluation.',
            'Collaborated with the academic and IT teams to gather requirements and continuously enhance system functionalities based on user feedback.',
            'Conducted user training sessions for teachers and staff on how to utilize the system effectively.',
        ],
    },
    {
        id: 3,
        institution: 'PT Reka Optima',
        logo: '/images/logo/reka-optima.png',
        alt: 'PT Reka Optima Logo',
        title: 'Data Entry',
        period: 'Jul 2019 — Jun 2020',
        location: 'Tangerang Selatan',
        work: 'Full Time',
        descriptionType: 'list',
        description: [
            'Processed and verified hundreds of aircraft component records daily with high accuracy, supporting smooth operations for the technical team.',
            'Improved the data entry workflow, reducing input errors and accelerating the verification process.',
            'Coordinated with relevant teams to ensure all component information was synchronized and ready for use in the aircraft management system.',
            'Provided basic system training for new employees, enabling faster and more efficient onboarding.',
        ],
    },
];

export default experiences;
