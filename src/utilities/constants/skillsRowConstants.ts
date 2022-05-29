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

export const REACT_TOOLTIP_TEXT = 'React is a free and open-source front-end JavaScript library for building user ' +
    'interfaces based on UI components. It is maintained by Meta and a community of individual developers and ' +
    'companies. React can be used as a base in the development of single-page or mobile application';

export const ADOBE_XD_TOOLTIP_TEXT = 'Adobe XD is a vector-based user experience design tool for web apps and mobile apps, ' +
    'developed and published by Adobe Inc. It is available for macOS and Windows, although there are versions for ' +
    'iOS and Android to help preview the result of work directly on mobile devices.';

export const ANGULAR_TOOLTIP_TEXT = 'Angular is a TypeScript-based free and open-source web application framework led by the ' +
    'Angular Team at Google and by a community of individuals and corporations. ' +
    'Angular is a complete rewrite from the same team that built AngularJS.';

export const SASS_TOOLTIP_TEXT = 'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style ' +
    'Sheets. SassScript is the scripting language itself. Sass consists of two syntaxes. The original syntax, ' +
    'called "the indented syntax," uses a syntax similar to Haml.';

export const POSTMAN_TOOLTIP_TEXT = ' Postman is the world\'s leading API platform. Postman\'s features simplify each step of ' +
    'building an API and streamline collaboration to help create better APIs—faster. More than 17 million developers' +
    ' and 500,000 organizations across the globe use Postman today.';

export const SPRING_TOOLTIP_TEXT = 'The Spring Framework is an application framework and inversion of control container for the ' +
    'Java platform. The framework\'s core features can be used by any Java application, but there are extensions ' +
    'for building web applications on top of the Java EE platform.';

export const AXIOS_TOOLTIP_TEXT = 'Axios is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests ' +
    'from the browser and it supports the Promise API that is native to JS ES6. It can be used intercept HTTP ' +
    'requests and responses and enables client-side protection against XSRF.';

export const IAAS_TOOLTIP_TEXT = 'Infrastructure as a service (IaaS) is a type of cloud computing service that offers' +
    ' essential compute, storage, and networking resources on demand, on a pay-as-you-go basis. IaaS is one of the four' +
    ' types of cloud services';

export const FIREBASE_TOOLTIP_TEXT = 'Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android' +
    ' and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment.';

export const MYSQL_TOOLTIP_TEXT = 'MySQL is free and open-source software under the terms of the GNU General Public License, and ' +
    'is also available under a variety of proprietary licenses. MySQL was owned and sponsored by the Swedish company' +
    ' MySQL AB, which was bought by Sun Microsystems (now Oracle Corporation).';

export const JIRA_TOOLTIP_TEXT = 'Jira is a proprietary issue tracking product developed by Atlassian that allows bug tracking ' +
    'and agile project management. ';

export const VCS_TOOLTIP_TEXT = 'Version control (also known as revision control, source control, or source code management) is' +
    ' a class of systems responsible for managing changes to computer programs, documents, large web sites, or other' +
    ' collections of information.';

export const MONGODB_TOOLTIP_TEXT = 'Version control (also known as revision control, source control, or source code management) is' +
    ' a class of systems responsible for managing changes to computer programs, documents, large web sites, or other' +
    ' collections of information.';


//////////////////////////////////////////////////////////////////////////////////////////////////////
// Card Arguments
interface ICardArg{
    title: string;
    image: any;
    color: string;
    tooltipColor: string;
    tooltipText: string;
}
const REACT_CARD_ARGS: ICardArg = {
    title: "React",
    image: ReactIMG,
    color: "rgba(60, 174, 203, 1)",
    tooltipColor: 'rgba(60, 174, 203, 1)',
    tooltipText: REACT_TOOLTIP_TEXT
}
const ADOBE_XD_CARD_ARGS: ICardArg = {
    title: "AdobeXD",
    image: xdIMG,
    color: "gba(203,60,158,1)",
    tooltipColor: 'rgba(203,60,158,1)',
    tooltipText: ADOBE_XD_TOOLTIP_TEXT
}
const ANGULAR_CARD_ARGS: ICardArg = {
    title: "Angular",
    image: angularIMG,
    color: "rgba(255,15,15,1)",
    tooltipColor: 'rgba(255,15,15,1)',
    tooltipText: ANGULAR_TOOLTIP_TEXT
}
const SASS_CARD_ARGS: ICardArg = {
    title: "Sass",
    image: scssIMG,
    color: "rgba(203,60,158,.5)",
    tooltipColor: 'rgba(203,60,158,.5)',
    tooltipText: SASS_TOOLTIP_TEXT
}
const POSTMAN_CARD_ARGS: ICardArg = {
    title: "Postman",
    image: postmanIMG,
    color: "#fff",
    tooltipColor: 'rgba(255,98,0,.5)',
    tooltipText: POSTMAN_TOOLTIP_TEXT
}
const SPRING_CARD_ARGS: ICardArg = {
    title: "Spring",
    image: springIMG,
    color: "#fff",
    tooltipColor: 'rgba(79,203,60,.5)',
    tooltipText: SPRING_TOOLTIP_TEXT
}

const AXIOS_CARD_ARGS: ICardArg = {
    title: "Python",
    image: pythonIMG,
    color: "#fff",
    tooltipColor: 'rgba(43,0,250,.5)',
    tooltipText: AXIOS_TOOLTIP_TEXT
}

const IAAS_CARD_ARGS: ICardArg = {
    title: "IaaS",
    image: ec2IMG,
    color: "#fff",
    tooltipColor: 'rgba(255,98,0,.5)',
    tooltipText: IAAS_TOOLTIP_TEXT
}

const FIREBASE_CARD_ARGS: ICardArg = {
    title: "Firebase",
    image: firebaseIMG,
    color: "#fff",
    tooltipColor: 'rgba(255,98,0,.5)',
    tooltipText: FIREBASE_TOOLTIP_TEXT
}

const ECS_CARD_ARGS: ICardArg = {
    title: "ECS",
    image: ecsIMG,
    color: "#fff",
    tooltipColor: 'rgba(255,98,0,.5)',
    tooltipText: FIREBASE_TOOLTIP_TEXT
}

const MYSQL_CARD_ARGS: ICardArg = {
    title: "MySQL",
    image: mySQLIMG,
    color: "#fff",
    tooltipColor: 'rgba(0,34,255,.5)',
    tooltipText: MYSQL_TOOLTIP_TEXT
}

const MONGO_CARD_ARGS: ICardArg = {
    title: "MongoDB",
    image: mongoDBIMG,
    color: "#fff",
    tooltipColor: 'rgba(49,255,34,0.5)',
    tooltipText: MONGODB_TOOLTIP_TEXT
}

const GIT_CARD_ARGS: ICardArg = {
    title: "Git",
    image: gitIMG,
    color: "#fff",
    tooltipColor: 'rgba(61,173,203,0.5)',
    tooltipText: AXIOS_TOOLTIP_TEXT
}

const JIRA_CARD_ARGS: ICardArg = {
    title: "Jira",
    image: jiraIMG,
    color: "#fff",
    tooltipColor: 'rgba(255,119,34,0.5)',
    tooltipText: JIRA_TOOLTIP_TEXT
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
    JIRA_CARD_ARGS
];


