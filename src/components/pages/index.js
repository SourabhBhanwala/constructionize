import Home01 from "./Home01";
import AboutUs from "./AboutUs";
import AboutDetails from "./AboutDetails";
import AboutTeam from "./AboutTeam";
import Services from "./Services";
import ServiceDetail from "./ServiceDetail";
import Projects from "./Projects";
import ProjectDetail from "./ProjectDetail";
import Contact01 from "./Contact01";

const routes = [
  { path: "/", component: Home01 },
  { path: "/about-us", component: AboutUs },
  { path: "/about-detail", component: AboutDetails },
  { path: "/about-team", component: AboutTeam },
  { path: "/services", component: Services },
  { path: "/services-detail", component: ServiceDetail },
  { path: "/project", component: Projects },
  { path: "/project-detail", component: ProjectDetail },
  { path: "/contact-01", component: Contact01 },
];

export default routes;
