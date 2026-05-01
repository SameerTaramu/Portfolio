import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "guitar-ecommerce",
    title: "Guitar Ecommerce Website",
    description: "Modern ecommerce platform for guitar shopping.",
    longDescription:
      "A responsive guitar ecommerce website built with modern frontend tools. It includes product listing, product details, cart functionality and a clean shopping experience.",
    tech: ["React", "Redux", "Tailwind CSS"],
    image: "/projects/img2.png",
    features: [
      "Responsive ecommerce layout",
      "Product listing page",
      "Cart functionality",
      "Reusable components",
    ],
  },
  {
    slug: "gym-management",
    title: "Gym Management System",
    description: "System for gym members and trainers.",
    longDescription:
      "A gym management system designed to manage members, trainers, class bookings and attendance tracking.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/projects/img4.png",
    features: [
      "Member dashboard",
      "Trainer management",
      "Class booking system",
      "Attendance tracking",
    ],
  },
  {
    slug: "nischal-portfolio",
    title: "Photography and Videography Portfolio",
    description: "Showcase of photography and videography work.",
    longDescription:
      "A modern photography portfolio website to showcase stunning images and videos.",
    tech: ["React", "Next.js", "Tailwind CSS"],
    image: "/projects/img3.png",
    features: [
      "Responsive design",
      "Image gallery",
      "Contact form",
      "Clean and modern UI",
    ],
  }
];