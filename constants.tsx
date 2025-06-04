
import { NavLinkItem, Service, TeamMember, GalleryImage } from './types';

// SVG Icons
export const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-cyan-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 7.5h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12M3 3v2.25M3 3l6 6" />
  </svg>
);

export const HomeModernIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-cyan-400">
  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
</svg>
);

export const WrenchScrewdriverIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-cyan-400">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.528-1.036.926-2.185.926-3.345A4.864 4.864 0 0011.42 3.5C10.268 3.5 9.118 3.898 8.082 4.512M11.42 15.17L5.877 21m6.131-6.131l-2.496-3.03c-.528-1.036-.926-2.185-.926-3.345A4.864 4.864 0 0111.42 3.5c1.152 0 2.302.398 3.338.926M6.1 20.845c-.49.49-.994.93-1.523 1.32C4.043 22.593 3.5 22.473 3.5 21.845v-6.477c0-.628.543-1.148 1.068-1.318.41-.132.847-.224 1.285-.224.91 0 1.788.293 2.496.805M7.113 11.97l2.496 3.03M14.887 11.97l-2.496 3.03" />
  </svg>
);

export const PaintBrushIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-cyan-400">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.39m3.421 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a15.995 15.995 0 00-4.764 4.648l-3.876 5.814a1.151 1.151 0 001.597 1.597l5.814-3.876a15.996 15.996 0 004.649-4.763m-3.421-3.42a15.998 15.998 0 00-3.388 1.62m5.043.025a15.994 15.994 0 01-1.622 3.39" />
</svg>
);

export const KeyIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-cyan-400">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
</svg>
);

// Updated NAV_LINKS
export const NAV_LINKS: NavLinkItem[] = [
  { name: 'Home', path: '/' },
  { name: 'View Our Work', path: '/gallery' },
  { name: 'About Us', path: '/about' },
  { name: 'Get In Touch', path: '/contact' },
];

export const SERVICES_DATA: Service[] = [
  { id: 'residential', title: 'Residential Interior Contractors', description: 'Crafting beautiful and functional living spaces tailored to your lifestyle.', icon: <HomeModernIcon /> },
  { id: 'commercial', title: 'Commercial Interior Contractors', description: 'Designing innovative and efficient workspaces that inspire productivity.', icon: <BuildingIcon /> },
  { id: 'civil', title: 'Civil Contractors & Civil Work', description: 'Expert civil engineering solutions for robust and lasting constructions.', icon: <WrenchScrewdriverIcon /> },
  { id: 'designing', title: 'Interior Designing Services', description: 'Comprehensive interior design from concept to execution, reflecting your unique style.', icon: <PaintBrushIcon /> },
  { id: 'turnkey', title: 'Turnkey Project Solution', description: 'End-to-end project management for a hassle-free experience. One stop solution for all your Interior requirements.', icon: <KeyIcon /> },
];

export const TEAM_MEMBERS_DATA: TeamMember[] = [
  {
    id: 'girish',
    name: 'Girish Menon',
    role: 'Founder & Lead Contractor',
    imageUrl: 'https://picsum.photos/seed/priyasharma/400/400', // Replace with actual image URL
    bio: 'With decades of experience, Girish champions quality and customer satisfaction, leading Amigo Vastukalp with a vision for excellence in every project.'
  },
  {
    id: 'rati',
    name: 'Rati Menon',
    role: 'Lead Interior Designer',
    imageUrl: 'https://picsum.photos/seed/priyasharma/400/400', // Replace with actual image URL
    bio: 'Priya brings creativity and a keen eye for detail, transforming spaces into artful, functional environments that reflect client aspirations.'
  },
  {
    id: 'rajesh',
    name: 'Rajesh Kumar',
    role: 'Senior Civil Engineer',
    imageUrl: 'https://picsum.photos/seed/rajeshkumar/400/400', // Replace with actual image URL
    bio: 'Rajesh ensures structural integrity and precision in all civil projects, combining technical expertise with innovative solutions.'
  },
   {
    id: 'anita',
    name: 'Anita Desai',
    role: 'Project Manager',
    imageUrl: 'https://picsum.photos/seed/anitadesai/400/400', // Replace with actual image URL
    bio: 'Anita expertly manages projects from inception to completion, ensuring timely delivery and seamless coordination for a stress-free client experience.'
  }
];

export const GALLERY_IMAGES_DATA: GalleryImage[] = [
  { id: 'img1', src: 'https://picsum.photos/seed/modernliving/800/600', alt: 'Modern Living Room', category: 'Residential' },
  { id: 'img2', src: 'https://picsum.photos/seed/officeinterior/800/600', alt: 'Commercial Office Space', category: 'Commercial' },
  { id: 'img3', src: 'https://picsum.photos/seed/kitchenreno/800/600', alt: 'Renovated Kitchen', category: 'Residential' },
  { id: 'img4', src: 'https://picsum.photos/seed/buildingfacade/800/600', alt: 'Building Facade Construction', category: 'Civil Work' },
  { id: 'img5', src: 'https://picsum.photos/seed/luxurybedroom/800/600', alt: 'Luxury Bedroom Design', category: 'Residential' },
  { id: 'img6', src: 'https://picsum.photos/seed/retailstore/800/600', alt: 'Retail Store Interior', category: 'Commercial' },
  { id: 'img7', src: 'https://picsum.photos/seed/bathroomdesign/800/600', alt: 'Elegant Bathroom', category: 'Residential' },
  { id: 'img8', src: 'https://picsum.photos/seed/conferencehall/800/600', alt: 'Conference Hall', category: 'Commercial' },
  { id: 'img9', src: 'https://picsum.photos/seed/landscapingcivil/800/600', alt: 'Landscaping Civil Work', category: 'Civil Work' },
  { id: 'img10', src: 'https://picsum.photos/seed/studioapartment/800/600', alt: 'Studio Apartment Interior', category: 'Residential' },
  { id: 'img11', src: 'https://picsum.photos/seed/cafedesign/800/600', alt: 'Cafe Interior Design', category: 'Commercial' },
  { id: 'img12', src: 'https://picsum.photos/seed/structuralwork/800/600', alt: 'Structural Civil Work', category: 'Civil Work' },
];

export const COMPANY_MOTTO = "Amigo Vastukalp: Your Friendly Partner in Building Dreams.";
export const COMPANY_TAGLINE = "Crafting Inspired Spaces with Elegance and Precision.";
export const ABOUT_COMPANY_INTRO = "Welcome to Amigo Vastukalp, where your vision for perfect spaces comes to life. We are your trusted partners for comprehensive interior and civil contracting solutions, built on a foundation of friendship, quality, and unwavering customer focus.";
export const ABOUT_COMPANY_DETAILS = "Specializing in residential and commercial interiors, meticulous civil works, and seamless turnkey projects, we offer an end-to-end experience. Our team is dedicated to transforming your ideas into reality with precision, innovative design, and a commitment to excellence. At Amigo Vastukalp, we believe in building more than just structures; we build lasting relationships.";
export const ABOUT_COMPANY_SHORT = "Amigo Vastukalp is your trusted partner for comprehensive interior and civil contracting solutions. We specialize in residential and commercial interiors, civil works, and turnkey projects, offering a seamless, friendly experience from concept to completion. Our commitment is to transform your vision into reality with quality, precision, and a customer-centric approach.";


export const CONTACT_PERSON_NAME = "Girish Menon";
export const CONTACT_EMAIL = "info@amigovastukalp.com"; // Placeholder
export const CONTACT_PHONE = "+91 98765 43210"; // Placeholder
export const CONTACT_ADDRESS = "123 Design Street, Innovation City, India"; // Placeholder
export const HERO_IMAGE_URL = "https://picsum.photos/seed/amigovastukalpconstruction/1920/1080"; // Example image for hero
