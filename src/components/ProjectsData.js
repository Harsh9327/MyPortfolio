import { BiLogoBootstrap, BiLogoCss3, BiLogoFirebase, BiLogoMongodb, BiLogoNodejs, BiLogoReact, BiLogoRedux, BiLogoTailwindCss, BiLogoTypescript } from "react-icons/bi";
import { TbBrandNextjs, TbApi, TbDatabase, TbBrandPrisma } from "react-icons/tb";
import { SiThemoviedatabase, SiExpress, SiPostman, SiJsonwebtokens } from "react-icons/si";

const ProjectsData = [
  {
    id: "1",
    name: "Movie Website (Film-Folio)",
    image: "./IMDB.png",
    icons: [BiLogoReact, BiLogoCss3, SiThemoviedatabase],
    description: "This website provides information about popular , top-rated and upcoming movies.",
    // github: "https://github.com/VijayKumarReddyTalakola/IMDB",
    github:"https://github.com/Harsh9327/Film-Folio",
    demo: "https://Film-Folio.vercel.app",
  },
  {
    id: "2",
    name: "EV Charging Station Finder (Plug&Tug)",
    image: "./ecom.png",
    icons: [BiLogoReact, BiLogoTailwindCss, TbApi],
    description: "This webApp provides information to user to find nearest charging station with useing user's location .",
    // github: "https://github.com/VijayKumarReddyTalakola/Ecommerce-Demo",
    github: "https://github.com/Harsh9327/plug-n-tug",
    demo: "https://plugntug.vercel.app",
  },
  {
    id: "3",
    name: "To-Do list",
    image: "./todo.png",
    icons: [BiLogoReact, BiLogoTailwindCss, BiLogoBootstrap],
    description: "A to-do list contains all the tasks that need to be done and can be ticked off accordingly.",
    github: "https://github.com/Harsh9327/taskmate",
    demo: "https://taskmate-nu.vercel.app",
  },
  {
    id: "4",
    name: "Voting-App",
    image: "./votingapp.png",
    icons: [ BiLogoMongodb, SiExpress, BiLogoNodejs, SiPostman, SiJsonwebtokens],
    description: "This application provides an interface to give vote any candidate .",
    github: "https://github.com/Harsh9327/voting_app_backend",
  },
  {
    id: "5",
    name: "Coming Soon!!",
    // image: "./car-rental-app.png",
    // icons: [TbBrandNextjs, BiLogoTypescript, BiLogoTailwindCss, TbApi],
    description: "Coming Soon!!.",
    // github: "https://github.com/VijayKumarReddyTalakola/nextjs-car-rental-app",
    // demo: "https://car-rental-application.vercel.app",
  },
  {
    id: "6",
    name: "Coming Soon!!",
    // image: "./blog-app.png",
    // icons: [TbBrandNextjs, BiLogoTailwindCss, BiLogoMongodb,TbBrandPrisma],
    description: "Coming Soon!!",
    // github: "https://github.com/VijayKumarReddyTalakola/Blog-Application",
    // demo: "https://write-ur-blog.vercel.app",
  },
];

export default ProjectsData;
