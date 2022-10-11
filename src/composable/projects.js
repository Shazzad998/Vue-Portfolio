import { ref } from "vue";

export default function useProjects() {
  const projects = ref([
    {
      id: "1",
      type: "Front-End",
      title: "Portfolio Website",
      description: "A web app for visualizing professional works and skills. ",
      thumb: "../images/portfolio-site/thumb-0.png",
      images: [
        "../images/portfolio-site/thumb-1.png",
        "../images/portfolio-site/thumb-2.png",
      ],
      techs: ["Figma", "illustrator", "Vue js", "Tailwind CSS", "GSAP"],
      steps: [
        "Logo and icons design with Illustrator",
        "Simple Ui Design with Figma",
        "Front-end development with Vue and Tailwind CSS",
        "SPA using Vue Router",
      ],
      task: "UI Design and Front-End Development",
      client: "Md Shazzad",
      live_link: "https://shazzadulislam.netlify.app",
      completed_at: "22 Augest, 2022",
      featured: true,
    },
    {
      id: "2",
      type: "Full-Stack",
      title: "Task Manager",
      description:
        "A typical todo list with much more functionalities and work history. Built with vue js and tailwind css in the front end and laravel in the back end",
      thumb: "../images/task-manager/thumb-0.png",
      images: [
        "../images/task-manager/thumb-1.PNG",
        "../images/task-manager/thumb-2.PNG",
        "../images/task-manager/thumb-3.PNG",
      ],
      techs: ["Figma", "PhotoShop", "Vue js", "Tailwind Css", "Laravel"],
      steps: [
        "Simple Ui Design with Figma",
        "Front-End Development with vue js and Tailwind css",
        "Back-End Api Development with Laravel 9",
      ],
      task: "Built the complete website",
      client: "Md Shazzad",
      live_link: "https://shazzadulislam.netlify.app",
      completed_at: "22 April, 2022",
      featured: true,
    },
    {
      id: "3",
      type: "Full-Stack",
      title: "E-commerce",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.",
      thumb: "../images/e-commerce/thumb-0.png",
      images: [
        "../images/e-commerce/thumb-1.png",
        "../images/e-commerce/thumb-2.png",
      ],
      techs: ["Figma", "PhotoShop", "Vue js", "Tailwind Css", "Laravel"],
      steps: [
        "Simple Ui Design with Figma",
        "Front-End Development with vue js and Tailwind css",
        "Back-End Api Development with Laravel 9",
      ],
      task: "Built the complete website from scratch",
      client: "Md Shazzad",
      live_link: "https://shazzadulislam.netlify.app",
      completed_at: "22 April, 2022",
      featured: false,
    },

    {
      id: "4",
      type: "Design",
      title: "Travel Site",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.",
      thumb: "../images/travel-site/thumb-0.png",
      images: [
        "../images/travel-site/thumb-1.png",
        "../images/travel-site/thumb-2.png",
      ],
      techs: ["Figma", "PhotoShop", "illustrator"],
      steps: [
        "Logo and icons design with Illustrator",
        "Simple Ui Design with Figma",
      ],
      task: "Design Logo and UI",
      client: "Md Shazzad",
      live_link: "https://shazzadulislam.netlify.app",
      completed_at: "22 April, 2022",
      featured: true,
    },

    {
      id: "5",
      type: "Design",
      title: "Easy E-commerce",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.",
      thumb: "../images/easy-ecommerce/thumb.png",
      images: [
        "../images/travel-site/t_1.png",
        "../images/travel-site/t_2.png",
        "../images/travel-site/t_3.png",
        "../images/travel-site/t_4.png",
        "../images/travel-site/t_5.png",
      ],
      techs: ["Figma", "PhotoShop", "illustrator"],
      steps: [
        "Logo and icons design with Illustrator",
        "Simple Ui Design with Figma",
      ],
      task: "Design Logo and UI",
      client: "Md Shazzad",
      live_link: "https://shazzadulislam.netlify.app",
      completed_at: "22 April, 2022",
      featured: true,
    },

    {
      id: "6",
      type: "Back-End",
      title: "Inventory Management",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.",
      thumb: "../images/inventory-management/thumb-0.png",
      images: [
        "../images/inventory-management/thumb-1.png",
        "../images/inventory-management/thumb-2.png",
        "../images/inventory-management/thumb-3.png",
        "../images/inventory-management/thumb-4.png",
      ],
      techs: ["Figma", "PhotoShop", "Vue js", "Tailwind Css", "Laravel"],
      steps: [
        "Simple Ui Design with Figma",
        "Front-End Development with vue js and Tailwind css",
        "Back-End Api Development with Laravel 9",
      ],
      task: "Built the complete website from scratch",
      client: "Md Shazzad",
      live_link: "https://shazzadulislam.netlify.app",
      completed_at: "22 April, 2022",
      featured: true,
    },
  ]);

  const current_project_reload = ref(0);
  const reload = () => {
    current_project_reload.value++;
  };
  const current_project = ref({});

  const featured_projects = projects.value.filter(
    (project) => project.featured == true
  );

  const getProject = (id) => {
    current_project.value = projects.value.filter(
      (project) => project.id == id
    );
  };

  return {
    projects,
    current_project,
    featured_projects,
    current_project_reload,
    getProject,
    reload,
  };
}
