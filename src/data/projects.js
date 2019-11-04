import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3  from '../assets/project3.png';

const PROJECTS = [
    {
        id: 1,
        title: 'React JS App',
        description: 'A portfolio site that I built inlvolving JS and core web dev concepts',
        link: 'https://github.com/ilgen/react',
        image: project1
    },
    {
        id: 2,
        title: 'Java Messaging API', 
        description: 'A REST API that I built from scratch with GET and POST requests', 
        link: 'https://github.com/ilgen/java',
        image: project2
    },
    {
        id: 3,
        title: 'Rails E-Commerce',
        description: 'My unique project for a web dev course using Angular JS, AJAX and more',
        link: 'https://newtown-radio.herokuapp.com',
        image: project3
    }
];  

export default PROJECTS;