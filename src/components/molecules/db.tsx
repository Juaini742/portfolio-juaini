import {
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaNpm,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { FaCode, FaFacebook, FaGoogle, FaUpwork } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  SiTailwindcss,
  SiVite,
  SiExpress,
  SiSequelize,
  SiMysql,
} from "react-icons/si";
import { TbBrandMongodb, TbBrandReactNative } from "react-icons/tb";

export type ItemType = {
  img?: string;
  images?: string[];
  rating?: number;
  title?: string;
  profile?: string;
  name?: string;
  jop?: string;
  desc?: string;
};

export const animateView = {
  initial: {
    opacity: 0,
    y: 100,
  },
  visible: { opacity: 1, y: 0 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
    },
  }),
};

export const animateViewleft = {
  initial: {
    opacity: 0,
    x: -100,
  },
  visible: { opacity: 1, x: 0 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export const navItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 3,
    name: "Service",
    path: "/service",
  },
  {
    id: 4,
    name: "Resume",
    path: "/resume",
  },
  {
    id: 5,
    name: "Gallery",
    path: "/gallery",
  },
  {
    id: 6,
    name: "profile",
    path: "/profile",
  },
];

export const serviceItems = [
  {
    id: 1,
    name: "Front-End Development",
    img: "../img/programmer.jpg",
    desc: "Crafting engaging and user-friendly interfaces using the latest front-end technologies.",
    list: [
      "Responsive Web Design",
      "User Interface (UI) Development",
      "Mobile-Friendly Design",
      "Cross-Browser Compatibility",
      "Animation and Interaction",
      "Code Documentation",
    ],
  },
  {
    id: 2,
    name: "Back-End Development",
    img: "../img/programmer.jpg",
    desc: "Building robust server-side applications and APIs to power your web applications.",
    list: [
      "Backend Development (Node.js)",
      "RESTful API Development",
      "Integration with Front-End Systems",
      "Database Design and Implementation",
      "Authentication and Authorization",
      "Version Control (Git)",
    ],
  },
  {
    id: 3,
    name: "Custom API Development",
    img: "../img/programmer.jpg",
    desc: "Crafting custom APIs to provide seamless integration between different software components.",
    list: [
      "RESTful API Development",
      "Authentication and Authorization",
      "Third-Party API Integration",
      "Documentation for API Endpoints",
    ],
  },
  {
    id: 4,
    name: "Database Management",
    img: "../img/programmer.jpg",
    desc: "Efficiently designing, implementing, and managing databases for optimal data storage and retrieval.",
    list: [
      "Database Design and Modeling",
      "Data Migration and Transformation",
      "Database Performance Tuning",
    ],
  },
];

export const workExperiences = [
  {
    id: 1,
    position: "Frontend Developer",
    company: "TechCo",
    date: "January 2020 - Present",
    highlights: [
      "Developed responsive and user-friendly interfaces for web applications.",
      "Collaborated with cross-functional teams to deliver high-quality software.",
      "Implemented and maintained frontend testing processes.",
    ],
  },
  {
    id: 2,
    position: "Backend Developer",
    company: "SoftWare Solutions",
    date: "June 2018 - December 2019",
    highlights: [
      "Built and maintained server-side applications and APIs.",
      "Integrated frontend and backend systems for seamless functionality.",
      "Utilized version control (Git) for code collaboration and management.",
    ],
  },
];

export const skills = [
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    bgColor: "orange-500",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    bgColor: "blue-500",
  },
  {
    name: "Sass",
    icon: <FaSass />,
    bgColor: "pink-500",
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap />,
    bgColor: "purple-500",
  },
  {
    name: "React",
    icon: <FaReact />,
    bgColor: "blue-600",
  },
  {
    name: "React Native",
    icon: <TbBrandReactNative />,
    bgColor: "blue-600",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    bgColor: "green-500",
  },
  {
    name: "npm",
    icon: <FaNpm />,
    bgColor: "red-500",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    bgColor: "cyan-500",
  },
  {
    name: "Vite",
    icon: <SiVite />,
    bgColor: "blue-400",
  },
  {
    name: "Express",
    icon: <SiExpress />,
    bgColor: "gray-500",
  },
  {
    name: "Sequelize",
    icon: <SiSequelize />,
    bgColor: "blue-800",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    bgColor: "indigo-500",
  },
  {
    name: "MongoDB",
    icon: <TbBrandMongodb />,
    bgColor: "green-800",
  },
];

export default skills;

export const serviceItem = [
  {
    id: 1,
    img: "../img/first icon.png",
    name: "FrontEnd",
    desc: "As a frontend enthusiast, I delve into the art of designing captivating and responsive user interfaces. With a focus on optimal user experience, I bring design concepts to life through elegant code.",
    list: [
      "Responsive Web Design",
      "User Interface (UI) Development",
      "Web Application Development",
      "Mobile-Friendly Design",
      "Cross-Browser Compatibility",
      "Integration with Backend Systems",
      "Version Control (Git)",
      "Code Documentation",
      "Custom Graphics and Icons",
      "UI/UX Consultation",
    ],
  },
  {
    id: 2,
    img: "../img/first icon.png",
    name: "BackEnd",
    desc: "As a backend, I create a solid foundation for applications and websites. From database management to server logic, I ensure reliable and efficient performance to support complex functionalities.",
    list: [
      "API Development",
      "Server-side Scripting",
      "Database Design and Management",
      "Backend Frameworks (e.g., Node.js, expressJs)",
      "Authentication and Authorization",
      "RESTful API Implementation",
      "Server Optimization",
      "Database Integration",
      "Middleware Development",
      "Version Control (Git)",
    ],
  },
];

export const whyHireMe = [
  {
    icon: <FaCode />,
    title: "Frontend Developer",
    desk: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cum placeat expedita laudantium et voluptatibus.",
  },
  {
    icon: <FaCode />,
    title: "Backend Developer",
    desk: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cum placeat expedita laudantium et voluptatibus.",
  },
  {
    icon: <FaCode />,
    title: "Fullstack Developer",
    desk: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cum placeat expedita laudantium et voluptatibus.",
  },
  {
    icon: <FaCode />,
    title: "Android Developer",
    desk: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cum placeat expedita laudantium et voluptatibus.",
  },
];

export const courses = [
  {
    img: "../img/Group 1.png",
    images: [
      "../img/Group 2.png",
      "../img/Group 3.png",
    ],
    rating: 5,
    demo: "#",
    title: "FOODI Android Food Application",
    profile: "../img/me.svg",
    name: "Juaini",
    jop: "Front-End Android Developer & ExpressJs Developer",
    desc: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>",

    tools: ["React-Native", "Expo", "ExpressJs", "Prisma", "MySQL"],
    extra: ["Expo Icons", "expo-router", "expo-secure-store", "etc..."],
    api: ["goapi"],
    github: "https://github.com/Juaini742/FOODI-react-native.git",
    backend: "#",
  },
  {
    img: "../img/cc.jpeg",
    images: [
      "../img/cc.jpeg",
      "../img/cc2.jpeg",
      "../img/cc3.jpeg",
      "../img/cc4.jpeg",
      "../img/cc5.jpeg",
    ],
    rating: 5,
    demo: "https://cctv-company.vercel.app/",
    title: "CCTV Company",
    profile: "../img/me.svg",
    name: "Juaini",
    jop: "Front-End Developer",
    desc: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>",

    tools: ["ReactJs", "ViteJs", "Tailwindcss", "Ant Design", "Sweet Alerts"],
    extra: ["React Icon", "React Router Dom", "Ant React Quill", "etc..."],
    api: ["Midtrans"],
    github: "https://github.com/Juaini742/market-place-fe.git",
    backend: "https://github.com/Juaini742/market-place-be.git",
  },
  {
    img: "../img/ca.jpeg",
    images: [
      "../img/ca.jpeg",
      "../img/ca2.jpeg",
      "../img/ca3.jpeg",
      "../img/ca4.jpeg",
      "../img/ca5.jpeg",
      "../img/ca6.jpeg",
      "../img/ca7.jpeg",
      "../img/ca8.jpeg",
      "../img/ca9.jpeg",
    ],
    rating: 5,
    title: "Cashier Application",
    profile: "../img/me.svg",
    name: "Juaini",
    jop: "Full-Stack Developer",
    desc: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>",
    tools: ["ReactJs", "ViteJs", "Tailwindcss", "Ant Design", "Sweet Alerts"],
    extra: ["React Query", "Axios", "React Icon", "React Router Dom", "etc..."],
    api: ["Midtrans"],
    github: "https://github.com/Juaini742/market-place-fe.git",
    backend: "https://github.com/Juaini742/market-place-be.git",
  },
  {
    img: "../img/un.jpeg",
    images: [
      "../img/un.jpeg",
      "../img/un2.jpeg",
      "../img/un3.jpeg",
      "../img/un4.jpeg",
      "../img/un5.jpeg",
      "../img/un6.jpeg",
      "../img/un7.jpeg",
      "../img/un8.jpeg",
      "../img/un9.jpeg",
      "../img/un10.jpeg",
    ],
    rating: 5,
    demo: "#",
    title: "University Profile",
    profile: "../img/me.svg",
    name: "Juaini",
    jop: "Full-Stack Developer",
    desc: "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p> <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>",
    tools: ["ReactJs", "ViteJs", "Tailwindcss", "Ant Design", "Sweet Alerts"],
    extra: ["React Query", "Axios", "React Icon", "React Router Dom", "etc..."],
    api: ["Midtrans"],
    github: "https://github.com/Juaini742/market-place-fe.git",
    backend: "https://github.com/Juaini742/market-place-be.git",
  },
  {
    img: "../img/fashion4.jpeg",
    images: [
      "../img/fashion.jpeg",
      "../img/fashion2.jpeg",
      "../img/fashion3.jpeg",
      "../img/fashion4.jpeg",
      "../img/fashion5.jpeg",
      "../img/fashion6.jpeg",
      "../img/fashion7.jpeg",
      "../img/fashion8.jpeg",
      "../img/fashion9.jpeg",
      "../img/fashion11.jpeg",
      "../img/fashion12.jpeg",
      "../img/fashion13.jpeg",
    ],
    rating: 5,
    demo: "#",
    title: "MyFashion Applicatino",
    profile: "../img/me.svg",
    name: "Juaini",
    jop: "Full-Stack Developer",
    desc: "<p>MyFashion is the name I've given to a marketplace application project that I specifically designed for the fashion industry. This project incorporates various essential features to enhance the user experience. Key functionalities include user registration and login, browsing all products on the homepage and provided shop pages, adding products to the shopping cart, performing product searches, and applying filters such as high price, low price, ascending, and descending order.</p> <p>Furthermore, users can make product purchases with integrated payment through the Midtrans gateway. The application also supports users in becoming sellers by allowing them to add products for sale. Users can provide comments and ratings for purchased products, fostering interaction between customers and sellers.</p> <p>With these features, MyFashion offers a comprehensive and integrated shopping experience. The project aims to create a convenient and user-friendly platform for those interested in the fashion world, whether as buyers or sellers.</p>",

    tools: ["ReactJs", "ViteJs", "Tailwindcss", "Ant Design", "Sweet Alerts"],
    extra: [
      "Redux Toolkid",
      "Axios",
      "React Icon",
      "React Router Dom",
      "Ant React Quill",
      "etc...",
    ],
    api: ["Midtrans"],
    github: "https://github.com/Juaini742/market-place-fe.git",
    backend: "https://github.com/Juaini742/market-place-be.git",
  },
  {
    img: "../img/admin.jpeg",
    images: [
      "../img/dashboard.jpeg",
      "../img/dashboard2.jpeg",
      "../img/dashboard3.jpeg",
      "../img/dashboard4.jpeg",
      "../img/dashboard5.jpeg",
      "../img/dashboard6.jpeg",
    ],
    rating: 5,
    demo: "#",
    title: "Guest Data Application",
    profile: "../img/me.svg",
    name: "Juaini",
    jop: "FUll-Stack Developer",
    desc: "<p>The Guest Book and Data application is designed to efficiently record and document visitor entries in an office setting. Its primary focus is to provide an integrated solution for guest record management with additional features that enhance user interaction and add value to the overall experience.</p> <p>This application not only serves as a conventional guestbook but also as a platform for users to provide feedback or suggestions to the office online. Its main advantage lies in simplifying the process for visitors to share opinions or feedback without the need for manual procedures. This creates an effective and modern communication channel between users and the visited institution.</p> <p>The online features also offer flexibility for users to search and access thousands of documented visitation data. Users can easily navigate through the history of visits, analyze trends, or search for specific information they need. This not only enhances the efficiency of data management but also provides a deeper understanding of visitation patterns and guest preferences.</p> <p>With its integrated and user-friendly approach, this application helps optimize administrative processes in the office, improves responsiveness to user feedback, and provides easy access to valuable information. Overall, the Guest Book and Data Application creates an environment that is efficient, modern, and responsive to the needs of guest recording and user interaction.</p>",
    tools: [
      "ReactJs",
      "ViteJs",
      "Firebase",
      "Tailwindcss",
      "Ant Design",
      "Sweet Alerts",
    ],
    extra: [
      "Redux Toolkid",
      "Axios",
      "React Icon",
      "React Router Dom",
      "Ant React Quill",
      "etc...",
    ],
    api: ["Firebase", "Goapi"],
    github: "https://github.com/Juaini742?tab=repositories",
  },
  {
    img: "../img/lilin.jpeg",
    images: [
      "../img/lilin.jpeg",
      "../img/lilin2.jpeg",
      "../img/lilin3.jpeg",
      "../img/lilin4.jpeg",
      "../img/lilin5.jpeg",
      "../img/lilin6.jpeg",
      "../img/lilin7.jpeg",
      "../img/lilin8.jpeg",
    ],
    rating: 5,
    demo: "#",
    title: "Candleleaf Application",
    profile: "../img/me.svg",
    name: "Juaini",
    jop: "Front-End Developer",
    desc: "<p>Candleleaf stands as an innovative e-commerce application tailored for a specialized candle store, presenting a captivating array of candle products to cater to diverse preferences. Within this user-centric platform, customers are empowered to curate their personalized candle collections by seamlessly adding favored items to their wishlist, fostering a personalized and enjoyable shopping experience.</p> <p>One of Candleleaf's distinguishing features lies in its integration with the Midtrans payment gateway, a strategic move to elevate the purchasing process. This integration ensures that transactions are not only secure but also efficiently handled, contributing to a reliable and trustworthy atmosphere for users engaging in the purchasing journey.</p> <p>The application's interface is thoughtfully designed to be user-friendly, prioritizing simplicity and intuitiveness. This design philosophy extends across various facets of the platform, making it effortlessly navigable for users seeking specific candle varieties, exploring new additions, or completing transactions. Candleleaf, through its thoughtful interface, seeks to not only meet but exceed user expectations, elevating the overall shopping experience.</p> <p>In essence, Candleleaf emerges as more than just an e-commerce application—it is a virtual haven for candle enthusiasts, providing a comprehensive and detail-rich environment. This platform not only facilitates purchases but also strives to enhance user engagement, satisfaction, and immersion in the captivating world of candles. Whether users are discovering new scents, organizing wishlist collections, or seamlessly completing transactions, Candleleaf embodies a commitment to excellence in the realm of online candle shopping.</p>",
    tools: ["ReactJs", "ViteJs", "Tailwindcss", "Ant Design"],
    extra: [
      "Redux Toolkid",
      "Axios",
      "React Icon",
      "React Router Dom",
      "Ant React Quill",
      "etc...",
    ],
    api: [""],
    github: "https://github.com/Juaini742/tour-kuyTour",
  },
  {
    img: "../img/commerce.jpeg",
    images: [
      "../img/commerce1.jpeg",
      "../img/commerce2.jpeg",
      "../img/commerce3.jpeg",
      "../img/commerce4.jpeg",
      "../img/commerce5.jpeg",
      "../img/commerce7.jpeg",
    ],
    rating: 5,
    demo: "https://e-commerce-sofa-lita.vercel.app/",
    title: "SofaKita Application",
    profile: "../img/me.svg",
    name: "Juaini",
    jop: "Front-End Developer",
    desc: "<p>SofaKita is an e-commerce application that I have developed, becoming an interesting and demanding project in software development. This application focuses on providing an optimal user experience, aimed at delivering an intuitive and satisfying online shopping service. In my role as a front-end developer, I focus on the visual aspects and place special emphasis on providing an engaging and user-friendly experience.</p><p>In building the interface for SofaKita, I leverage the latest technologies and techniques. The stack I apply includes HTML as the foundation, Tailwind for responsive design, Javascript as the development language, and ReactJs as the framework supporting dynamic interface development.</p><p>Furthermore, to enhance quality and user engagement, I selected several critical dependencies. Antd Component is used to provide ready-to-use user interface components with aesthetic designs. React-router-dom ensures seamless page navigation, enriching the user experience with smooth transitions between pages. Meanwhile, react-icon is used to provide attractive icons that consistently follow the overall application design.</p> <p>SofaKita is not just about products; it is also about how users interact and feel within the application. Every step I take in the development aims to create a pleasant and satisfying online shopping atmosphere for users. I am committed to continually improving and optimizing this application to align with the latest trends and market expectations, with the hope of providing an unforgettable shopping experience to SofaKita users.</p>",
    tools: ["ReactJs", "ViteJs", "Firebase", "Tailwindcss", "Ant Design"],
    extra: ["React Icon", "React Router Dom", "etc..."],
    api: ["none"],
  },
  {
    img: "../img/api.jpeg",
    images: [
      "../img/api1.jpeg",
      "../img/api2.jpeg",
      "../img/api3.jpeg",
      "../img/api4.jpeg",
      "../img/api5.jpeg",
      "../img/api6.jpeg",
      "../img/api7.jpeg",
      "../img/api8.jpeg",
    ],
    rating: 4,
    demo: "#",
    title: "E-Commerce Backend APIs",
    profile: "../img/me.svg",
    name: "Juaini",
    jop: "Back-End Developer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque sit dolores sed possimus? Voluptates amet corporis eligendi nostrum, culpa unde similique nihil iusto. Eveniet quae voluptates architecto itaque? Velit dolor et esse culpa? Fuga eos, quis quasi in assumenda magni illo praesentium dolorem neque pariatur, eveniet incidunt at eaque obcaecati enim laudantium, numquam aspernatur temporibus. Nobis debitis, vitae sapiente voluptate soluta odit provident suscipit deleniti eaque expedita sunt consequatur sequi architecto. Officiis enim mollitia esse aut dicta, temporibus fuga sit nisi animi nihil ipsa. Minus repellendus velit similique nostrum, natus provident nemo suscipit ipsa sit adipisci quae quasi iusto corrupti.",
    github: "https://github.com/Juaini742/e-commers",
  },
  {
    img: "../img/mamat.jpeg",
    images: [
      "../img/mamat1.jpeg",
      "../img/mamat2.jpeg",
      "../img/mamat3.jpeg",
      "../img/mamat4.jpeg",
      "../img/mamat5.jpeg",
      "../img/mamat6.jpeg",
      "../img/mamat7.jpeg",
    ],
    rating: 4,
    demo: "#",
    title: "Warung Pak Mamat E-commerce",
    profile: "../img/me.svg",
    name: "Juaini",
    jop: "Front-End Developer",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque sit dolores sed possimus? Voluptates amet corporis eligendi nostrum, culpa unde similique nihil iusto. Eveniet quae voluptates architecto itaque? Velit dolor et esse culpa? Fuga eos, quis quasi in assumenda magni illo praesentium dolorem neque pariatur, eveniet incidunt at eaque obcaecati enim laudantium, numquam aspernatur temporibus. Nobis debitis, vitae sapiente voluptate soluta odit provident suscipit deleniti eaque expedita sunt consequatur sequi architecto. Officiis enim mollitia esse aut dicta, temporibus fuga sit nisi animi nihil ipsa. Minus repellendus velit similique nostrum, natus provident nemo suscipit ipsa sit adipisci quae quasi iusto corrupti.",
    tools: ["NodeJs", "Express JS", "Sequelize", "Mysql2"],
    extra: ["Express Validator", "Axios", "etc..."],
    api: ["Dummy Product"],
    github: "https://github.com/Juaini742/warung-pak-mamat",
  },
];

export const news = [
  {
    img: "../img/1.jpg",
    title:
      "Exciting Launch of New Technological Products at the Innovation Event",
    slug: "an exciting event witnessing the launch of cutting edge technological products in the innovation extravaganza",
  },
  {
    img: "../img/1.jpg",
    title: "Latest Innovations in the Healthcare World Unveiled",
    slug: "unveiling the most recent innovations and advancements in the global healthcare sector",
  },
  {
    img: "../img/1.jpg",
    title: "Remarkable Achievements in the International Sports Olympics",
    slug: "exploring the remarkable achievements and memorable moments of the international sports Olympics 2023",
  },
  {
    img: "../img/1.jpg",
    title: "Getting to Know the Latest Developments in Blockchain Technology",
    slug: "a comprehensive guide to getting to know the latest developments and breakthroughs in the world of blockchain technology globally",
  },
  {
    img: "../img/1.jpg",
    title: "Exploring Astonishing Natural Tourist Destinations",
    slug: "embarking on an adventure to explore the most astonishing and breathtaking natural tourist destinations around the globe",
  },
  {
    img: "../img/1.jpg",
    title: "Effective Tips for Time Management in the Digital Age",
    slug: "practical and effective tips for successful time management in the digital age",
  },
  {
    img: "../img/1.jpg",
    title: "Current Fashion Trends You Must Stay Updated With",
    slug: "staying fashion forward a guide to keeping up with the latest and current fashion trends",
  },
  {
    img: "../img/1.jpg",
    title: "Why Yoga Is Essential for Mental Well-being?",
    slug: "the importance of yoga in enhancing mental well-being and promoting overall health and happiness",
  },
  {
    img: "../img/1.jpg",
    title: "Discovering Everyday Life Inspirations: A Guide to Personal Growth",
    slug: "uncovering inspirations in everyday life a comprehensive guide to personal growth and self-discovery",
  },
];

export const history = {
  educate: [
    {
      id: 1,
      leftName: "Sapta Mandiri Institiute of Technology",
      rightName: "Student Certificate",
      status: "Present",
      year: "2024",
      desc: "Currently, I am in the final semester of my undergraduate studies at Sapta Mandiri Institute of Technology",
    },
    {
      id: 2,
      leftName: "Madrasah Aliyah Graduate Majoring in languages",
      rightName: "Student Certificate",
      status: "Graduation",
      year: "2019",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 3,
      leftName: "Junior High School Graduate",
      rightName: "Student Certificate",
      status: "Graduation",
      year: "2016",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
    {
      id: 4,
      leftName: "Elementary School Graduate",
      rightName: "Student Certificate",
      status: "Graduation",
      year: "2013",
      desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    },
  ],
  certificate: [
    {
      leftName: "Front-Stack Developer",
      status: "Project",
      year: "2024",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      leftName: "Full-Stack Developer",
      status: "Project",
      year: "2024",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      leftName: "Front-End Developer",
      status: "Project",
      year: "2023",
      desc: "Candleleaf, an e-commerce app for candles, offers a diverse range of products. Users can save preferred candles in the wishlist and seamlessly make purchases with integrated Midtrans payments. The app ensures a user-friendly pla",
    },
    {
      leftName: "Full-End Developer",
      status: "Project",
      year: "2023",
      desc: "The Guest Book and Data app revolutionizes visitor management with seamless online feedback. It ensures efficient communication and quick access to extensive visitation data, creating a streamlined and responsive environment.",
    },
    {
      leftName: "Front-End Developer",
      status: "Project",
      year: "2023",
      desc: "SofaKita, my e-commerce project, prioritizes an intuitive shopping experience with HTML, Tailwind, Javascript, and ReactJs. Enhanced by Antd Component and React-router-dom, it offers an immersive journey, continually improving for an unforgettable experience.",
    },
    {
      leftName: "English teacher at junior high school",
      status: "Project",
      year: "2019-2020",
      desc: "As a junior high English teacher, I'm committed to creating an engaging learning environment, and a love for English through innovative teaching.",
    },
  ],
};

export const portfolio = [
  {
    id: 1,
    img: "../img/1.jpg",
    alt: "personal",
  },
  {
    id: 2,
    img: "../img/2.jpg",
    alt: "personal",
  },
  {
    id: 3,
    img: "../img/3.jpg",
    alt: "personal",
  },
  {
    id: 4,
    img: "../img/4.jpg",
    alt: "personal",
  },
  {
    id: 5,
    img: "../img/5.jpg",
    alt: "personal",
  },
  {
    id: 6,
    img: "../img/6.jpg",
    alt: "personal",
  },
  {
    id: 7,
    img: "../img/7.jpg",
    alt: "personal",
  },
  {
    id: 8,
    img: "../img/8.jpg",
    alt: "personal",
  },
  {
    id: 9,
    img: "../img/9.jpg",
    alt: "personal",
  },
];
export const blog = [
  {
    id: 1,
    img: "../img/novel.png",
    alt: "personal",
    title: "Dalam Rintangan Cinta",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cum quasi hic ducimus veritatis blanditiis dolore libero, deleniti repellendus, earum quia. Ducimus similique, cumque ad eveniet, odio ipsa vel voluptate culpa sequi esse autem. Dolorem quis temporibus consectetur, quibusdam nostrum iure aut error at dolores repudiandae hic perspiciatis perferendis asperiores laboriosam id ex vitae rerum nemo assumenda atque ad eveniet.",
  },
  {
    id: 2,
    img: "../img/novel2.png",
    alt: "personal",
    title: "Takdir Cinta dan Kekerasan",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cum quasi hic ducimus veritatis blanditiis dolore libero, deleniti repellendus, earum quia. Ducimus similique, cumque ad eveniet, odio ipsa vel voluptate culpa sequi esse autem. Dolorem quis temporibus consectetur, quibusdam nostrum iure aut error at dolores repudiandae hic perspiciatis perferendis asperiores laboriosam id ex vitae rerum nemo assumenda atque ad eveniet.",
  },
  {
    id: 3,
    img: "../img/blog3.jpg",
    alt: "personal",
    title: "How to make Flyer Design",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cum quasi hic ducimus veritatis blanditiis dolore libero, deleniti repellendus, earum quia. Ducimus similique, cumque ad eveniet, odio ipsa vel voluptate culpa sequi esse autem. Dolorem quis temporibus consectetur, quibusdam nostrum iure aut error at dolores repudiandae hic perspiciatis perferendis asperiores laboriosam id ex vitae rerum nemo assumenda atque ad eveniet.",
  },
];

export const contactItem = [
  {
    id: 1,
    label: "Full Name (Required)",
    type: "text",
  },
  {
    id: 2,
    label: "Your Email (Required)",
    type: "email",
  },
  {
    id: 3,
    label: "Subject",
    type: "text",
  },
];

export const sosmed = [
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/juaini.juaini.108?mibextid=ZbWKwL",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.instagram.com/juainii_/?igsh=cDBnczkyZHBxcnh3",
  },
  {
    icon: <FaGoogle />,
    path: "mailto:juaini742@gmail.com",
  },
  {
    icon: <IoLogoWhatsapp />,
    path: "https://wa.me/6285751633160/",
  },
  {
    icon: <FaGithub />,
    path: "https://github.com/Juaini742?tab=repositories",
  },
  {
    icon: <FaUpwork />,
    path: "https://www.upwork.com/freelancers/~010756da224151d2ba?mp_source=share",
  },
];
