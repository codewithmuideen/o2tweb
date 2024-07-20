import image from "./images";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";

import { TfiLocationPin } from "react-icons/tfi";
import { CiMail } from "react-icons/ci";
import { MdPhoneInTalk } from "react-icons/md";
import { BsClockHistory } from "react-icons/bs";

export { image };

export const links = [
  {
    id: 1,
    text: "Services",
  },
  {
    id: 2,
    text: "Training",
  },
  {
    id: 3,
    url: "/contact",
    text: "Contact",
  },
];

export const servicelinks = [
  {
    id: 1,
    name: "DevSecOps",
    url: "/dev-sec-ops",
  },
  {
    id: 2,
    name: "Cloud Solutions",
    url: "/cloud-solutions",
  },
  {
    id: 3,
    name: "Machine Learning",
    url: "/machine-learning",
  },
  {
    id: 4,
    name: "Data Engineering",
    url: "/data-engineering",
  },
  {
    id: 5,
    name: "Data Analysis",
    url: "/data-analysis",
  },
];
export const training = [
  {
    id: 1,
    icon: image.js,
    title: "Corporate Trainings",
    url: "/corporate-trainings",
  },
  {
    id: 2,
    icon: image.react,
    title: "Hands-on training",
    url: "/hands-on-training",
  },
];

export const SliderCard = [
  {
    id: 1,
    img: image.Saws,
  },
  {
    id: 2,
    img: image.Sazure,
  },
  {
    id: 3,
    img: image.Sgcl,
  },
  {
    id: 4,
    img: image.Sjava,
  },
  {
    id: 5,
    img: image.Spython,
  },
  {
    id: 6,
    img: image.Ssnowflake,
  },
];

export const serviceCard = [
  {
    id: 1,
    title: "Cloud Consulting",
    icon: image.consult,
    description:
      "Whether you require specialized technical expertise currently absent within your team, or seek to augment your team's capabilities for expedited time-to-market and efficient resolution of technical obstacles, we stand ready to be your essential missing link, offering dedicated support to augment your team as required.",
    more: " LEARN MORE ",
    url: "/cloud-solutions",
  },
  {
    id: 2,
    title: "Data Engineering",
    icon: image.end,
    description:
      " As a dedicated development company, our team of proficient technical experts will manage your project from the initial discovery phase to the final deployment. We take great pride in our proven track record of success and the significant impact we have in the industry. Whether you have a new, ongoing, or legacy project, we'll be delighted to assist. ",
    more: " LEARN MORE ",
    url: "/data-engineering",
  },
  {
    id: 3,
    title: "AI & Machine Learning",
    icon: image.team,
    description:
      "We are committed to assisting you in raising your team to the requisite level of technical expertise essential for organizational success. Our tailored, industry standard and best-practice training are calibrated to effectively aid organizations and individuals in bridging knowledge gaps within their teams. ",
    more: " LEARN MORE ",
    url: "/machine-learning",
  },
];

export const numbers = [
  {
    id: 1,
    title: "10 years",
    span: "of market experience",
  },
  {
    id: 2,
    title: "80+",
    span: "clients served",
  },
  {
    id: 3,
    title: "2+ years",
    span: "average partnership",
  },
];

export const numbers2 = [
  {
    id: 1,
    title: "7+ years",
    span: "Data and Platform Engineering",
  },
  {
    id: 2,
    title: "6.5 years",
    span: "4 years average experience of our Java, Python and Javascript developers",
  },
  {
    id: 3,
    title: "100+",
    span: "developers",
  },
];

export const client = [
  {
    id: 1,
    icon: image.tech,
  },
  {
    id: 2,
    icon: image.forbes,
  },
  {
    id: 3,
    icon: image.sunday,
  },
  {
    id: 4,
    icon: image.telegraph,
  },
  {
    id: 5,
    icon: image.fortune,
  },
];

export const hiring = [
  {
    id: 1,
    icon: image.room,
    title:
      "Enlist an exclusive team for your project: a unified team, a single workspace, and unwavering focus on one client's needs.",
    text: "We firmly believe that teams perform to visit our at their best when they are single-tasking. Plus, you are always welcome to visit our offices and personally meet dedicated team ",
  },
  {
    id: 2,
    icon: image.framework,
    title: "Opt for the tech stack that fits your needs, not our preferences",
    text: "We'll employ the precise tools and framework your project demands, without imposing our personal preferences.",
  },
  {
    id: 3,
    icon: image.perfect,
    title: "Effortless scalability, supported by a  caring tech partner.",
    text: "We offer support for ambitious projects while preserving the value of personal relationships, striking balance between scale and care.",
  },
  {
    id: 4,
    icon: image.speak,
    title: "Seamless and effortless cooperation",
    text: "We'll help you clarify and prioritize features, deliver regular  progress reports, and, above all, maintain effective communication.",
  },
];

export const socials = [
  {
    id: 1,
    icon: <BiLogoLinkedin />,
    url: "https://linkedin.com",
  },
  {
    id: 2,
    icon: <BiLogoTwitter />,
    url: "https://twitter.com",
  },
  {
    id: 3,
    icon: <BiLogoFacebook />,
    url: "https://facebook.com",
  },
  {
    id: 4,
    icon: <BiLogoYoutube />,
    url: "https://www.youtube.com",
  },
];

export const end = [
  {
    id: 1,
    icon: image.js,
    title: "Javascript",
    url: "/javascript",
  },
  {
    id: 2,
    icon: image.react,
    title: "Java",
    url: "/java",
  },
  {
    id: 3,
    icon: image.devOps,
    title: "DevOps",
    url: "/devops",
  },
  {
    id: 4,
    icon: image.product,
    title: "SecOps",
    url: "/sec-ops",
  },
  {
    id: 5,
    icon: image.python,
    title: "Python",
    url: "/python",
  },
  {
    id: 6,
    icon: image.devOps,
    title: "DevSecOps",
    url: "/dev-sec-o",
  },
  {
    id: 7,
    icon: image.product,
    title: "Discovery workshops ",
    url: "/discovery-workshops",
  },
  {
    id: 8,
    icon: image.python,
    title: "System Architect ",
    url: "/system-architect",
  },
  {
    id: 9,
    icon: image.python,
    title: "Mobile Development",
    url: "/mobile-development",
  },
  {
    id: 10,
    icon: image.devOps,
    title: "Web Development",
    url: "/web-development",
  },
  {
    id: 11,
    icon: image.product,
    title: "API Development",
    url: "/api-development",
  },
  {
    id: 12,
    icon: image.python,
    title: "Quality Assurance and Testing",
    url: "/quality-assurance-and-testing",
  },
];

export const expertConsultCard = [
  {
    id: 1,
    title: "Machine Learning",
    icon: image.machine,
    description:
      " Unlock new possibilities, boost productivity, and automate your business processes. Regardless of what industry you operate in, our machine learning solutions can help you achieve higher levels of efficiency and keep ahead of your competition. ",
    more: "LEARN MORE",
    url: "/machine-learning",
  },
  {
    id: 2,
    title: "Cloud Solutions",
    icon: image.products,
    description:
      " A lot of day-to-day development separates your initial vision from the finished product. Using the lessons we’ve learned working on similar projects in your business vertical, we’ll come up with a high-level plan to achieve your goals. ",
    more: " CONTACT US",
    url: "/cloud-solutions",
  },
  {
    id: 3,
    title: "Data Engineering",
    icon: image.fintech,
    description:
      " The financial industry often struggles with challenges such as quantitative problem-solving for pricing or risk and trade management. We’ll look at analytics, compliance, and regulation to come up with the best solutions tailored to your fintech business. ",
    more: " LEARN MORE ",
    url: "/data-engineering",
  },
  {
    id: 4,
    title: "Data Analysis",
    icon: image.machine,
    description:
      " Unlock new possibilities, boost productivity, and automate your business processes. Regardless of what industry you operate in, our machine learning solutions can help you achieve higher levels of efficiency and keep ahead of your competition. ",
    more: "LEARN MORE",
    url: "/data-analysis",
  },
  {
    id: 5,
    title: "IT manage Services",
    icon: image.products,
    description:
      " A lot of day-to-day development separates your initial vision from the finished product. Using the lessons we’ve learned working on similar projects in your business vertical, we’ll come up with a high-level plan to achieve your goals. ",
    more: " CONTACT US",
    url: "/IT-manage-services",
  },
  {
    id: 6,
    title: "Team Extension",
    icon: image.fintech,
    description:
      " The financial industry often struggles with challenges such as quantitative problem-solving for pricing or risk and trade management. We’ll look at analytics, compliance, and regulation to come up with the best solutions tailored to your fintech business. ",
    more: " LEARN MORE ",
    url: "/team-extension",
  },
];

export const webDevStack = [
  {
    id: 1,
    icon: image.snowflake,
    title: "SnowFlake",
  },
  {
    id: 2,
    icon: image.storm,
    title: "Storm",
  },
  {
    id: 3,
    icon: image.powerBI,
    title: "PowerBI",
  },
  {
    id: 4,
    icon: image.oracle,
    title: "oracle",
  },
  {
    id: 5,
    icon: image.mongoDB,
    title: "mongoDB",
  },
  {
    id: 6,
    icon: image.aws,
    title: "aws",
  },
  {
    id: 7,
    icon: image.airflow,
    title: "airflow",
  },
  {
    id: 8,
    icon: image.azure,
    title: "azure",
  },
  {
    id: 9,
    icon: image.bigQuery,
    title: "bigQuery",
  },
  {
    id: 10,
    icon: image.dataBrick,
    title: "dataBrick",
  },
  {
    id: 11,
    icon: image.dataFlow,
    title: "dataFlow",
  },
  {
    id: 12,
    icon: image.flink,
    title: "flink",
  },
  {
    id: 13,
    icon: image.gcp,
    title: "gcp",
  },
  {
    id: 14,
    icon: image.hadoop,
    title: "hadoop",
  },
  {
    id: 15,
    icon: image.hive,
    title: "hive",
  },
  {
    id: 16,
    icon: image.hBase,
    title: "hBase",
  },
  {
    id: 17,
    icon: image.kafka,
    title: "kafka",
  },
  {
    id: 18,
    icon: image.kinesis,
    title: "kinesis",
  },
  {
    id: 19,
    icon: image.mySql,
    title: "mySql",
  },
  {
    id: 20,
    icon: image.postGreSql,
    title: "postGreSql",
  },
  {
    id: 21,
    icon: image.presto,
    title: "presto",
  },
  {
    id: 22,
    icon: image.pySpark,
    title: "pySpark",
  },
  {
    id: 23,
    icon: image.redShift,
    title: "redShift",
  },
];

export const valuesCard = [
  {
    id: 1,
    icon: image.room,
    title: "Continuous Improvement",
    text: "We foster a feedback culture both within the organization and when working with our partners. Using Agile and Scrum, we implement feedback early and often. We also keep adding new offices, new roles, new services, new technologies, and new partnerships to the STX Next roster.",
  },
  {
    id: 2,
    icon: image.framework,
    title: "Team Power",
    text: "The best collaboration happens when one team can work on one project, fully focused. We have made teams the most important unit of the STX Next structure, and we have a dedicated budget for teams to go on workstations and integration events.",
  },
  {
    id: 3,
    icon: image.perfect,
    title: "Win-Win",
    text: "In any situation where we need to establish clear rules and expectations, we expect a win-win deal or no deal at all. We follow this value when negotiating contracts, starting new partnerships, or considering changes at the company.",
  },
  {
    id: 4,
    icon: image.speak,
    title: "Software Craftsmanship",
    text: "The code we deliver should be not only functional, but well-crafted. To ensure this, we set high recruitment standards, we keep refining the ways we work, and we serve as teachers for the community.",
  },
];

export const expert_faqs = [
  {
    id: 1,
    question: "Cloud Solutions",
    answer: " Harness the power of the cloud to scale and innovate.",
  },
  {
    id: 2,
    question: "Machine Learning",
    answer: "Leverage data-driven insights with cutting-edge ML technologies.",
  },
  {
    id: 3,
    question: "Data Engineering",
    answer: "Build robust data pipelines for efficient data processing.",
  },
  {
    id: 4,
    question: " Team Extension",
    answer: "Augment your in-house team with our skilled professionals.",
  },
  {
    id: 5,
    question: "IT Managed Services",
    answer: "Ensure seamless operations with our comprehensive IT support.",
  },
  {
    id: 6,
    question: " Data Analysis",
    answer: "Transform raw data into actionable insights.",
  },
];

export const end_faqs = [
  {
    id: 1,
    question: "Java, JavaScript, Python",
    answer: "Expertise in the most versatile programming languages.",
  },
  {
    id: 2,
    question: "DevOps, SecOps, DevSecOps",
    answer: "Ensuring efficiency, security, and compliance.",
  },
  {
    id: 3,
    question: "Discovery Workshops",
    answer: "Crafting a blueprint for your project's success.",
  },
  {
    id: 4,
    question: " System Architecture",
    answer: " Designing scalable and future-proof systems.",
  },
  {
    id: 5,
    question: "Mobile Development",
    answer: "Creating user-friendly, cross-platform mobile apps.",
  },
  {
    id: 6,
    question: " Quality Assurance and Testing",
    answer: "  Ensuring the highest standards of quality.",
  },
  {
    id: 7,
    question: "API Development",
    answer: "Building robust APIs for seamless integration.",
  },
  {
    id: 8,
    question: " Web Development",
    answer: " Crafting visually appealing and responsive websites.",
  },
];

export const training_faqs = [
  {
    id: 1,
    question: "Corporate Trainings",
    answer: " Customized training programs to upskill your workforce.",
  },
  {
    id: 2,
    question: "Hands-on Training",
    answer: "Practical learning experiences to enhance proficiency.",
  },
  {
    id: 3,
    question: "Coaching and Mentoring",
    answer: "Personalized guidance for professional growth.",
  },
];

export const teamMembers = [
  {
    id: 1,
    img: image.team1,
    name: "John Doe",
    position: "SEO Manager",
  },
  {
    id: 2,
    img: image.team1,
    name: "John Doe",
    position: "SEO Manager",
  },
  {
    id: 3,
    img: image.team1,
    name: "John Doe",
    position: "SEO Manager",
  },
  {
    id: 4,
    img: image.team1,
    name: "John Doe",
    position: "SEO Manager",
  },
];

export const TeamvaluesCard = [
  {
    id: 1,
    icon: image.room,
    title: "Continuous Improvement",
    text: "We promote a culture of feedback, both within our organization and when collaborating with partners. Utilizing Agile and Serum methodologies, we incorporate feedback early and frequently.",
  },
  {
    id: 3,
    icon: image.perfect,
    title: "Win-Win",
    text: "In any scenario where we need to set forth defined rules and expectations, we uphold the principle of a win-win deal or no deal at all, This value guides us in negotiations, forging new partnerships, and assessing company modifications,.",
  },
  {
    id: 4,
    icon: image.speak,
    title: "Software Craftsmanship",
    text: "Our delivered code must not only be functional but also well-crafted. To guarantee this, we maintain stringent recruitment standards, continually refine our work processes, and actively contribute as educators in the community.",
  },
];

export const TeamQoutesCard = [
  {
    id: 1,
    img: image.team1,
    quote:
      "Trust is nurtured through openness and fairness. For our clients, it means upholding full transparency through the sharing of detailed monthly time reports.",
    name: " Tosin Akinbobola ",
    post: "Chief Operating Officer",
  },
  {
    id: 2,
    img: image.team1,
    quote:
      "Trust is nurtured through openness and fairness. For our clients, it means upholding full transparency through the sharing of detailed monthly time reports.",
    name: " Tosin Akinbobola ",
    post: "Chief Operating Officer",
  },
  {
    id: 3,
    img: image.team1,
    quote:
      "Trust is nurtured through openness and fairness. For our clients, it means upholding full transparency through the sharing of detailed monthly time reports.",
    name: " Tosin Akinbobola ",
    post: "Chief Operating Officer",
  },
  {
    id: 4,
    img: image.team1,
    quote:
      "Trust is nurtured through openness and fairness. For our clients, it means upholding full transparency through the sharing of detailed monthly time reports.",
    name: " Tosin Akinbobola ",
    post: "Chief Operating Officer",
  },
];

// cloud page
export const CloudSC = [
  {
    id: 1,
    icon: image.CAD,
    title: "Cloud architecture design",
    paragraph:
      "We create unique cloud-powered architectures based on robust, high-performance, scalable designs that streamline business opportunities.",
  },
  {
    id: 2,
    icon: image.IM,
    title: "Infrastructure migration",
    paragraph:
      "Timely legacy infrastructure modernization and migration help scale and improve tech and business capacities in line with the market growth. ",
  },
  {
    id: 3,
    icon: image.CCO,
    title: "Cloud costs optimization",
    paragraph:
      "We analyze existing cloud infrastructures, provide specialized consulting, and implement DevOps techniques that cut costs and optimize expenses. ",
  },
  {
    id: 4,
    icon: image.DC,
    title: "Devops consulting",
    paragraph:
      "Profiled DevOps consulting that we provide in terms of cloud architecture services combines development and operations effort to improve internal process.",
  },
];

export const CloudDC = [
  {
    id: 1,
    title: "Assessment",
    paragraph:
      "At the first stage, we evaluate and check the state of your infrastructure, its compatibility with the cloud services you want to switch to. Thanks to this, we plan the best way to implement a cloud environment. ",
  },
  {
    id: 2,
    title: "Roadmap",
    paragraph:
      "Moving to the cloud is not easy as you are building a more powerful infrastructure for your business. Therefore, for an effective transition and avoidance of downtime, we create a roadmap. It is designed in detail and shows all the stages of creating a cloud architecture showing which.",
  },
  {
    id: 3,
    title: "Execution",
    paragraph:
      "After a detailed strategy elaboration and roadmap creation, the IT Outpost team proceeds directly to the creation of your cloud architecture. The selected methods are implemented and the best tools are used. ",
  },
  {
    id: 4,
    title: "Optimization",
    paragraph:
      "This phase permits you to increase the performance of your work environment and increase the flexibility, scalability and dependability of your data and infrastructure through cloud computing Improvements of the system take place on the basis of an integrated treatment.",
  },
  {
    id: 5,
    title: "Support",
    paragraph:
      "Experienced specialists of our company provide ongoing support and assistance at your request. This question also touches upon recommendations for improving the architecture, possible risks, and the operation of a balanced system.",
  },
];

export const CloudBC = [
  {
    id: 1,
    title: "Get a grip on cloud costs",
    paragraph:
      "We help big enterprises and small-mid scale companies alike closely maintain cloud costs and eliminate tons of unnecessary expenses through individually optimized architectures that fully reflect your business capacities.",
  },
  {
    id: 2,
    title: "Employ scaling opportunities",
    paragraph:
      "With a sturdy cloud-based software architecture, you get unlimited scaling opportunities possible only in cloud environments. We build versatile infrastructures that help your business expand naturally. ",
  },
  {
    id: 3,
    title: "Reinforce software security",
    paragraph:
      "Yet another unrivaled advantage of cloud environments is the flexible security opportunities. Remote access opportunities enable reinforced security that simply doesn't leave room for unauthorized interaction attempts.  ",
  },
  {
    id: 4,
    title: "Minimize cloud downtime",
    paragraph:
      "Get a robust cloud architecture designed for you from scratch that runs fast on balanced resources, grants inviting user experience, performs stably in the harshest conditions and pushes workflow efficiency.",
  },
];

// machine learning page
export const MachineWC = [
  {
    id: 1,
    icon: image.MLC1,
    paragraph:
      "We help guide you through the art of what's possible in Al and Machine Learning from a decade of knowledge and proven experience ",
  },
  {
    id: 2,
    icon: image.MLC2,
    paragraph:
      "We design and build innovative and custom Machine Learning algorithms that create a competitive edge  ",
  },
  {
    id: 3,
    icon: image.MLC3,
    paragraph:
      "We adopt an efficient and tailored approach to solving automation, insights and prediction needs for your business  ",
  },
  {
    id: 4,
    icon: image.MLC4,
    paragraph:
      "We deliver scalable and flexible Machine Learning models that not only deliver value to your business but can groW with you as your Al needs change",
  },
];

export const MLStack = [
  {
    id: 1,
    icon: image.snowflake,
    title: "SnowFlake",
  },
  {
    id: 2,
    icon: image.storm,
    title: "Storm",
  },
  {
    id: 3,
    icon: image.powerBI,
    title: "PowerBI",
  },
  {
    id: 4,
    icon: image.oracle,
    title: "oracle",
  },
  {
    id: 5,
    icon: image.mongoDB,
    title: "mongoDB",
  },
  {
    id: 6,
    icon: image.aws,
    title: "aws",
  },
  {
    id: 7,
    icon: image.airflow,
    title: "airflow",
  },
  {
    id: 8,
    icon: image.azure,
    title: "azure",
  },
  {
    id: 9,
    icon: image.bigQuery,
    title: "bigQuery",
  },
  {
    id: 10,
    icon: image.dataBrick,
    title: "dataBrick",
  },
  {
    id: 11,
    icon: image.dataFlow,
    title: "dataFlow",
  },
  {
    id: 12,
    icon: image.flink,
    title: "flink",
  },
  {
    id: 13,
    icon: image.gcp,
    title: "gcp",
  },
  {
    id: 14,
    icon: image.hadoop,
    title: "hadoop",
  },
  {
    id: 15,
    icon: image.hive,
    title: "hive",
  },
  {
    id: 16,
    icon: image.hBase,
    title: "hBase",
  },
  {
    id: 17,
    icon: image.kafka,
    title: "kafka",
  },
  {
    id: 18,
    icon: image.kinesis,
    title: "kinesis",
  },
  {
    id: 19,
    icon: image.mySql,
    title: "mySql",
  },
  {
    id: 20,
    icon: image.postGreSql,
    title: "postGreSql",
  },
  {
    id: 21,
    icon: image.presto,
    title: "presto",
  },
  {
    id: 22,
    icon: image.pySpark,
    title: "pySpark",
  },
  {
    id: 23,
    icon: image.redShift,
    title: "redShift",
  },
  {
    id: 24,
    icon: image.redShift,
    title: "redShift",
  },
  {
    id: 24,
    icon: image.redShift,
    title: "redShift",
  },
];

// data analytics page
export const DAfaqs = [
  {
    id: 1,
    question: " Data Analysis Strategy and Consulting",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt  justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    id: 2,
    question: "Data Audit and Quality Assurance",
    answer:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    id: 3,
    question: "Statistical Data Analysis",
    answer:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    id: 4,
    question: "Data Modernization",
    answer:
      "  Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
  {
    id: 5,
    question: "Designing Data Platform and Engineering",
    answer:
      "  Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
  {
    id: 6,
    question: " Enterprise Data Management",
    answer:
      "  Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
  {
    id: 7,
    question: "Advanced Analysis and Data Science",
    answer:
      "  Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

// data engineering page
export const DataPC = [
  {
    id: 1,
    icon: image.Combining,
    title: "Combining data",
    paragraph:
      "Integrating data from multiple sources including structured and unstructured data. ",
  },
  {
    id: 2,
    icon: image.Centralization,
    title: "Centralization",
    paragraph:
      "Data automation using data pipelines (ETL, ELT, streaming, batch, cloud native, open source). ",
  },
  {
    id: 3,
    icon: image.data_lineage,
    title: "Improved data quality and data lineage",
    paragraph:
      "To meet regulatory requirements (GDPR, IFRS) and FCA submissions.  ",
  },
  {
    id: 4,
    icon: image.value,
    title: "Increased value",
    paragraph:
      "Data can be understood by those using it to gain insights and support decision-making.",
  },
];
export const DataMC = [
  {
    id: 1,
    icon: image.DR,
    title: "Data Review / Health Check ",
  },
  {
    id: 2,
    icon: image.MPD,
    title: "Migration Programme Design ",
  },
  {
    id: 3,
    icon: image.MPI,
    title: "Migration Programme Implementation ",
  },
  {
    id: 4,
    icon: image.PM,
    title: "Project Management",
  },
  {
    id: 5,
    icon: image.MTS,
    title: "Migration Test Strategy",
  },
];

export const DataDC = [
  {
    id: 1,
    icon: image.Transparency,
    title: "Transparency",
    paragraph:
      "DDMA makes the migration process more transparent for validation and QA purposes. ",
  },
  {
    id: 2,
    icon: image.Risk,
    title: "Reduce risk",
    paragraph:
      "The risk of your data migration project over-running is minimised. ",
  },
  {
    id: 3,
    icon: image.TCE,
    title: "Time and cost-efficient",
    paragraph:
      "Accurate results delivered in a shorter timeframe with reduced costs.",
  },
];

export const DataWC = [
  {
    id: 1,
    icon: image.Finance,
    title: "Finance",
  },
  {
    id: 2,
    icon: image.HR,
    title: "HR ",
  },
  {
    id: 3,
    icon: image.Operations,
    title: "Operations ",
  },
  {
    id: 4,
    icon: image.MS,
    title: "Marketing & Sales",
  },
  {
    id: 5,
    icon: image.RD,
    title: "R&D",
  },
];

export const DataBC = [
  {
    id: 1,
    icon: image.AD,
    title: "Aggregated data",
    paragraph:
      "The ability to combine data from multiple sources, enabling analysis across your entire organisation.  ",
  },
  {
    id: 2,
    icon: image.MCH,
    title: "Maintain change history",
    paragraph:
      "All data changes and updates are maintained, so performance can be compared over time.  ",
  },
  {
    id: 3,
    icon: image.GSV,
    title: "Gain a single view",
    paragraph:
      "Providing a single version of the truth that represents the entire business - not just one department. ",
  },
];

export const DataBC2 = [
  {
    id: 1,
    icon: image.UDT,
    title: "Use different tools",
    paragraph:
      "For the creation of various types of reports and dashboards, bringing more variation and flexibility.  ",
  },
  {
    id: 2,
    icon: image.SR,
    title: "Separate reporting",
    paragraph:
      "Reporting is separated from transactional functions so the core business is not affected when reports run.  ",
  },
  {
    id: 3,
    icon: image.CDA,
    title: "Control data access",
    paragraph:
      "You can control which users, or user groups, can access certain types of data to improve your security.",
  },
];

// contact card
export const ContactCard = [
  {
    id: 1,
    icon: <TfiLocationPin />,
    title: "Address:",
    paragraph:
      "244. Brixal 2nd cross St, California City. United States - 90005  ",
  },
  {
    id: 2,
    icon: <CiMail />,
    title: "Email Address:",
    paragraph: "infogexample.com",
  },
  {
    id: 3,
    icon: <MdPhoneInTalk />,
    title: "Phone:",
    paragraph:
      "Office: (+321) 567 89 0123. 890 12 3456  Customer-care: 1800-456-78-9012",
  },
  {
    id: 4,
    icon: <BsClockHistory />,
    title: "Working Hours:",
    paragraph: "Mon - Sat Day: o9.0o to 18.00  ",
  },
];

// de tech stack
export const DeStack = [
  {
    id: 1,
    icon: image.snowflake,
    title: "SnowFlake",
  },
  {
    id: 2,
    icon: image.storm,
    title: "Storm",
  },
  {
    id: 3,
    icon: image.powerBI,
    title: "PowerBI",
  },
  {
    id: 4,
    icon: image.oracle,
    title: "oracle",
  },
  {
    id: 5,
    icon: image.mongoDB,
    title: "mongoDB",
  },
  {
    id: 6,
    icon: image.aws,
    title: "aws",
  },
  {
    id: 7,
    icon: image.airflow,
    title: "airflow",
  },
  {
    id: 8,
    icon: image.azure,
    title: "azure",
  },
  {
    id: 9,
    icon: image.bigQuery,
    title: "bigQuery",
  },
  {
    id: 10,
    icon: image.dataBrick,
    title: "dataBrick",
  },
  {
    id: 11,
    icon: image.dataFlow,
    title: "dataFlow",
  },
  {
    id: 12,
    icon: image.flink,
    title: "flink",
  },
  {
    id: 13,
    icon: image.gcp,
    title: "gcp",
  },
  {
    id: 14,
    icon: image.hadoop,
    title: "hadoop",
  },
  {
    id: 15,
    icon: image.hive,
    title: "hive",
  },
  {
    id: 16,
    icon: image.hBase,
    title: "hBase",
  },
  {
    id: 17,
    icon: image.kafka,
    title: "kafka",
  },
  {
    id: 18,
    icon: image.kinesis,
    title: "kinesis",
  },
  {
    id: 19,
    icon: image.mySql,
    title: "mySql",
  },
  {
    id: 20,
    icon: image.postGreSql,
    title: "postGreSql",
  },
  {
    id: 21,
    icon: image.presto,
    title: "presto",
  },
  {
    id: 22,
    icon: image.pySpark,
    title: "pySpark",
  },
  {
    id: 23,
    icon: image.redShift,
    title: "redShift",
  },
];
