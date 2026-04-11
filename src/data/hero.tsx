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
    description: `I build clean and reliable web applications with Laravel and React. My experience ranges from creating an KInerjaMetrik at Erenos School to managing my own home lab with Proxmox and Docker. I enjoy solving real problems through code and understanding how apps run in production like environments. I am focused on joining a team where I can deliver impactful features, grow my skills, and build secure and efficient digital products.`,
};

export default data;
