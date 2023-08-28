import React from 'react';
import './projects.css';

const projectsData = [
    {
        title: 'Project 1',
        description: 'My first project.',
        imageUrl: 'project1-image-url.jpg',
        demoUrl: 'https://project1-demo.com',
        githubUrl: 'https://github.com/project1-repo',

    },

    {
        title: 'Project 1',
        description: 'My first project.',
        imageUrl: 'project1-image-url.jpg',
        demoUrl: 'https://project1-demo.com',
        githubUrl: 'https://github.com/project1-repo',
    

    },
    {
        title: 'Project 1',
        description: 'My first project.',
        imageUrl: 'project1-image-url.jpg',
        demoUrl: 'https://project1-demo.com',
        githubUrl: 'https://github.com/project1-repo',

    },
    {
        title: 'Project 1',
        description: 'My first project.',
        imageUrl: 'project1-image-url.jpg',
        demoUrl: 'https://project1-demo.com',
        githubUrl: 'https://github.com/project1-repo',

    },
    {
        title: 'Project 1',
        description: 'My first project.',
        imageUrl: 'project1-image-url.jpg',
        demoUrl: 'https://project1-demo.com',
        githubUrl: 'https://github.com/project1-repo',

    },
    {
        title: 'Project 1',
        description: 'My first project.',
        imageUrl: 'project1-image-url.jpg',
        demoUrl: 'https://project1-demo.com',
        githubUrl: 'https://github.com/project1-repo',

    }
];

const Projects = () => {
    return (
    <section id= "projects" classname="projects">
         <h2>Projects</h2>
         <div classname= "projects-list">
         {projectsData.map((project, index) => (
             <div className="project" key={index}>
             <img src={project.imageUrl} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Demo</a>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Projects;
