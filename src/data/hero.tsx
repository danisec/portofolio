interface DataItem {
  image: string;
  alt?: string;
  name: string;
  description: string;
}

const data: DataItem = {
  image: '/images/profile/dani.svg',
  alt: 'Photo Dani Aprilyanto',
  name: 'Dani Aprilyanto',
  description: `I am a graduate of Pembangunan Jaya University with a major in Informatics Engineering. Specializing in web
 development, I have expertise in React and Laravel, with a passion for creating seamless Front-End and
 Back-End solutions. I am driven by the desire to keep learning and taking on new challenges in the tech
 world.`,
};

export default data;
