import React from 'react';

import './Projects.css';


const projectsData = [
    {
        title: 'SEO project',
        description: 'A search engine optimization assignmet. Through using semantic elements etc; search engine optimization increased.',
        // imageUrl: 'project1-image-url.jpg',
        demoUrl: 'https://project1-demo.com',
        githubUrl: 'https://github.com/CIJoshTC/Module-1-challenge-Horiseon-accessibility',

    },

    {
        title: 'Randomized Password generator',
        description: 'A genertaor that uses characters and numbers to randomly make a unique password',
        // imageUrl: 'project1-image-url.jpg',
        demoUrl: 'https://project1-demo.com',
        githubUrl: 'https://github.com/CIJoshTC/Randomized-password-generator',
    

    },
    {
        title: 'The Recipe Bar ',
        description: ' An application that allows users to search drinks and recieve ingredients and instructions on how to make them',
        // imageUrl: 'project1-image-url.jpg',
        demoUrl: 'https://project1-demo.com',
        githubUrl: 'https://github.com/CIJoshTC/The_Recipe_Bar_Josh'

    },
    {
        title: 'All employed',
        description: 'My first project.',
        // imageUrl: 'project1-image-url.jpg',
        demoUrl: 'https://project1-demo.com',
        githubUrl: 'https://github.com/CIJoshTC/All-Employed',

    },
    {
        title: 'Lightning Sales',
        description: 'My first project.',
        // imageUrl: 'project1-image-url.jpg',
        demoUrl: 'https://project1-demo.com',
        githubUrl: 'https://github.com/CIJoshTC/Lightning-Sales',

    },
    {
        title: 'The All American Regex',
        description: 'A tutorial explaining regular expression or regex functions. How it works on every level.',
        // imageUrl: 'project1-image-url.jpg',
        demoUrl: 'https://project1-demo.com',
        githubUrl: 'https://github.com/CIJoshTC/The-All-American-Regex',

    },
    {
        title: 'myhealthspace',
        description: 'A web application that allows users to add, update and delete fitness information and goals',
        // imageUrl: 'project1-image-url.jpg',
        demoUrl: 'https://project1-demo.com',
        githubUrl: 'https://github.com/CIJoshTC/The-All-American-Regex',
        deployment: 'https://my-health-space-e9d209a11adb.herokuapp.com/',

    }
];

const Projects = () => {
    return (
    <section id= "projects" classname="projects">
         <h2>Projects</h2>
         <div classname= "projects-list">
         {projectsData.map((project, index) => (
             <div className="project" key={index}>
             {/* <img src={project.imageUrl} alt={project.title} /> */}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={project.deployment} target="_blank" rel="noopener noreferrer">Deployment</a>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Projects;
