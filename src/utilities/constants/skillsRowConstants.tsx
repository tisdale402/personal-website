// @ts-ignore
import ReactIMG from "../../img/hiclipart.com (2).png";
// @ts-ignore
import xdIMG from "../../img/img.png";
// @ts-ignore
import angularIMG from "../../img/img_1.png";
// @ts-ignore
import scssIMG from "../../img/img_7.png";
// @ts-ignore
import postmanIMG from "../../img/icons8-postman-api-128.png";
// @ts-ignore
import springIMG from "../../img/img_3.png";
// @ts-ignore
import axiosIMG from "../../img/img_5.png";
//@ts-ignore
import ec2IMG from "../../img/img_2.png";
//@ts-ignore
import ecsIMG from "../../img/img_6.png";
//@ts-ignore
import jiraIMG from "../../img/Daco_5452076.png";
//@ts-ignore
import gitIMG from "../../img/git.png";
//@ts-ignore
import mySQLIMG from "../../img/5848104fcef1014c0b5e4950.png";
//@ts-ignore
import mongoDBIMG from "../../img/clipart2754492.png";
//@ts-ignore
import firebaseIMG from "../../img/kisspng-firebase-computer-icons-mobile-backend-as-a-servic-ambil-5b8b1667404fe8.5499898515358418952634.png";
//@ts-ignore
import pythonIMG from "../../img/kisspng-python-general-purpose-programming-language-comput-python-programming-language-symphony-solution-5b6ee0c89ecd95.2067324515339931606505.png";
//@ts-ignore
import jenkinsImg from "../../img/PngItem_3408094.png";
//@ts-ignore
import ReactSVG from '../../svg/ReactSVG.tsx';
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Skills Rows Titles
export const UI_ROW_TITLE = 'UI/UX';
export const SERVER_ROW_TITLE = 'Server-Side';
export const CLOUD_SOLUTIONS_ROW_TITLE = 'Cloud Solutions';
export const DBMS_ROW_TITLE = 'DBMS';
export const PROJECT_MANAGEMENT_ROW_TITLE = 'Project Management';

export const SKILLS_ROWS_TITLES: string[] = [
    UI_ROW_TITLE,
    SERVER_ROW_TITLE,
    CLOUD_SOLUTIONS_ROW_TITLE,
    DBMS_ROW_TITLE, PROJECT_MANAGEMENT_ROW_TITLE
];
//////////////////////////////////////////////////////////////////////////////////////////////////////
// Tooltip texts

export const PLACEHOLDER_INFO = 'Click an icon to learn more...';

export const REACT_INFO = 'React is a free and open-source front-end JavaScript library for building user ' +
    'interfaces based on UI components. It is maintained by Meta and a community of individual developers and ' +
    'companies. React can be used as a base in the development of single-page or mobile application';

export const ADOBE_XD_INFO = 'Adobe XD is a vector-based user experience design tool for web apps and mobile apps, ' +
    'developed and published by Adobe Inc. It is available for macOS and Windows, although there are versions for ' +
    'iOS and Android to help preview the result of work directly on mobile devices.';

export const ANGULAR_INFO = 'Angular is a TypeScript-based free and open-source web application framework led by the ' +
    'Angular Team at Google and by a community of individuals and corporations. ' +
    'Angular is a complete rewrite from the same team that built AngularJS.';

export const SASS_INFO = 'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style ' +
    'Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, ' +
    'called "the indented syntax," uses a syntax similar to Haml.';

export const POSTMAN_INFO = ' Postman is the world\'s leading API platform. Postman\'s features simplify each step of ' +
    'building an API and streamline collaboration to help create better APIs—faster. More than 17 million developers' +
    ' and 500,000 organizations across the globe use Postman today.';

export const SPRING_INFO = 'The Spring Framework is an application framework and inversion of control container for the ' +
    'Java platform. The framework\'s core features can be used by any Java application, but there are extensions ' +
    'for building web applications on top of the Java EE platform.';

export const PYTHON_INFO = 'Python is a high-level, interpreted, general-purpose programming language. Its design' +
    ' philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and' +
    ' garbage-collected.';

export const IAAS_INFO = 'Infrastructure as a service (IaaS) is a type of cloud computing service that offers' +
    ' essential compute, storage, and networking resources on demand, on a pay-as-you-go basis. IaaS is one of the four' +
    ' types of cloud services';

export const FIREBASE_INFO = 'Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android' +
    ' and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment.';

export const MYSQL_INFO = 'MySQL is free and open-source software under the terms of the GNU General Public License, and ' +
    'is also available under a variety of proprietary licenses. MySQL was owned and sponsored by the Swedish company' +
    ' MySQL AB, which was bought by Sun Microsystems (now Oracle Corporation).';

export const JIRA_INFO = 'Jira is a proprietary issue tracking product developed by Atlassian that allows bug tracking ' +
    'and agile project management. ';

export const VCS_INFO = 'Version control (also known as revision control, source control, or source code management) is' +
    ' a class of systems responsible for managing changes to computer programs, documents, large web sites, or other' +
    ' collections of information.';

export const MONGODB_INFO = 'Version control (also known as revision control, source control, or source code management) is' +
    ' a class of systems responsible for managing changes to computer programs, documents, large web sites, or other' +
    ' collections of information.';

export const JENKINS_INFO = 'Jenkins is an open source automation server. It helps automate the parts of' +
    ' software development related to building, testing, and deploying, facilitating continuous integration and' +
    ' continuous delivery. It is a server-based system that runs in servlet containers such as Apache Tomcat.';


//////////////////////////////////////////////////////////////////////////////////////////////////////
// Card Arguments
interface ICardArg{
    info: string;
    image: any;
    color: string;
    tooltipColor: string;
    tooltipText: string;
}
const REACT_CARD_ARGS: ICardArg = {
    info: REACT_INFO,
    image: ReactIMG,
    color: "rgba(60, 174, 203, 1)",
    tooltipColor: 'rgba(60, 174, 203, 1)',
    tooltipText: "React"
}
const ADOBE_XD_CARD_ARGS: ICardArg = {
    info: ADOBE_XD_INFO,
    image: xdIMG,
    color: "rgba(203,60,158,1)",
    tooltipColor: 'rgba(203,60,158,1)',
    tooltipText: "AdobeXD"
}
const ANGULAR_CARD_ARGS: ICardArg = {
    info: ANGULAR_INFO,
    image: angularIMG,
    color: "rgba(255,15,15,1)",
    tooltipColor: 'rgba(255,15,15,1)',
    tooltipText: "Angular"
}
const SASS_CARD_ARGS: ICardArg = {
    info: SASS_INFO,
    image: scssIMG,
    color: "rgba(203,60,158,.5)",
    tooltipColor: 'rgba(203,60,158,.5)',
    tooltipText: "Sass"
}
const POSTMAN_CARD_ARGS: ICardArg = {
    info: POSTMAN_INFO,
    image: postmanIMG,
    color: "#fff",
    tooltipColor: 'rgba(255,98,0,.5)',
    tooltipText: "Postman"
}
const SPRING_CARD_ARGS: ICardArg = {
    info: SPRING_INFO,
    image: springIMG,
    color: "#fff",
    tooltipColor: 'rgba(79,203,60,.5)',
    tooltipText: "Spring"
}

const AXIOS_CARD_ARGS: ICardArg = {
    info: SASS_INFO,
    image: pythonIMG,
    color: "#fff",
    tooltipColor: 'rgba(43,0,250,.5)',
    tooltipText: "Python"
}

const IAAS_CARD_ARGS: ICardArg = {
    info: IAAS_INFO,
    image: ec2IMG,
    color: "#fff",
    tooltipColor: 'rgba(255,98,0,.5)',
    tooltipText: "IaaS"
}

const FIREBASE_CARD_ARGS: ICardArg = {
    info: FIREBASE_INFO,
    image: firebaseIMG,
    color: "#fff",
    tooltipColor: 'rgba(255,98,0,.5)',
    tooltipText: "Firebase"
}

const ECS_CARD_ARGS: ICardArg = {
    info: IAAS_INFO,
    image: ecsIMG,
    color: "#fff",
    tooltipColor: 'rgba(255,98,0,.5)',
    tooltipText: "ECS"
}

const MYSQL_CARD_ARGS: ICardArg = {
    info: MYSQL_INFO,
    image: mySQLIMG,
    color: "#fff",
    tooltipColor: 'rgba(0,34,255,.5)',
    tooltipText: "MySQL"
}

const MONGO_CARD_ARGS: ICardArg = {
    info: MONGODB_INFO,
    image: mongoDBIMG,
    color: "#fff",
    tooltipColor: 'rgba(49,255,34,0.5)',
    tooltipText: "MongoDB"
}

const GIT_CARD_ARGS: ICardArg = {
    info: VCS_INFO,
    image: gitIMG,
    color: "#fff",
    tooltipColor: 'rgba(61,173,203,0.5)',
    tooltipText: "Git"
}

const JIRA_CARD_ARGS: ICardArg = {
    info: JIRA_INFO,
    image: jiraIMG,
    color: "#fff",
    tooltipColor: 'rgba(255,119,34,0.5)',
    tooltipText: "Jira"
}

const JENKINS_CARD_ARGS: ICardArg = {
    info: JENKINS_INFO,
    image: jenkinsImg,
    color: "#fff",
    tooltipColor: 'rgba(255,119,34,0.5)',
    tooltipText: "Jenkins"
}


//////////////////////////////////////////////////////////////////////////////////////////////////////
// Skills Row Arguments

export const UI_CARDS: ICardArg[] = [
        REACT_CARD_ARGS,
        ADOBE_XD_CARD_ARGS,
        ANGULAR_CARD_ARGS,
        SASS_CARD_ARGS
    ];

export const REST_CARDS: ICardArg[] = [
  POSTMAN_CARD_ARGS,
  SPRING_CARD_ARGS,
  AXIOS_CARD_ARGS
];

export const CLOUD_CARDS: ICardArg[] = [
    IAAS_CARD_ARGS,
    FIREBASE_CARD_ARGS,
    ECS_CARD_ARGS
];

export const DBMS_CARDS: ICardArg[] = [
    MYSQL_CARD_ARGS,
    MONGO_CARD_ARGS
];

export const PROJECT_MANAGEMENT_CARD_ARGS: ICardArg[] = [
    GIT_CARD_ARGS,
    JIRA_CARD_ARGS,
    JENKINS_CARD_ARGS
];


