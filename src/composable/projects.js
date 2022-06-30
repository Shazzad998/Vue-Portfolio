import { ref } from "vue";

export default function useProjects() {
  const projects = ref([
    {
      id: "1",
      type: "Full-Stack",
      title: "Task Manager",
      description:
        "A typical todo list with much more functionalities and work history. Built with vue js and tailwind css in the front end and laravel in the back end",
      thumb: "../images/task-manager/tm_4.PNG",
      images: [
        "../images/task-manager/tm_1.PNG",
        "../images/task-manager/tm_2.PNG",
        "../images/task-manager/tm_3.PNG",
        "../images/task-manager/tm_4.PNG",
        "../images/task-manager/tm_5.PNG",
        "../images/task-manager/tm_6.PNG",
        "../images/task-manager/tm_7.PNG",
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
      id: "2",
      type: "Full-Stack",
      title: "E-commerce",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.",
      thumb: "../images/e-commerce/shp_1.PNG",
      images: [
        "../images/e-commerce/shp_1.PNG",
        "../images/e-commerce/shp_2.PNG",
        "../images/e-commerce/shp_3.PNG",
        "../images/e-commerce/shp_4.PNG",
        "../images/e-commerce/shp_5.PNG",
        "../images/e-commerce/shp_6.PNG",
        "../images/e-commerce/shp_7.PNG",
        "../images/e-commerce/shp_8.PNG",
        "../images/e-commerce/shp_9.PNG",
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
      id: "3",
      type: "Back-End",
      title: "Inventory Management",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.",
      thumb: "../images/inventory-management/in_mn_1.PNG",
      images: [
        "../images/inventory-management/in_mn_1.PNG",
        "../images/inventory-management/in_mn_2.PNG",
        "../images/inventory-management/in_mn_3.PNG",
        "../images/inventory-management/in_mn_4.PNG",
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

    {
      id: "4",
      type: "Design",
      title: "Travel Site",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.",
      thumb: "../images/travel-site/t_1.png",
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
  ]);

  const current_project_reload = ref(0);
  const reload = () => {
    current_project_reload.value++;
  };
  const current_project = ref([]);

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
