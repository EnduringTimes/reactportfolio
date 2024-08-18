import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    { title: 'Ashen Pages', img: '/images/AshenHome.png', link: 'https://enduringtimes.github.io/Ashen-Pages/', repo: 'https://github.com/EnduringTimes/Ashen-Pages?tab=readme-ov-file' },
    { title: 'Triviosa', img: '/images/dashboard.png', link: 'https://enduringtimes.github.io/OpenWeatherAPI/', repo: 'https://github.com/EnduringTimes/OpenWeatherAPI?tab=readme-ov-file' },
  ];

  return (
    <section className="portfolio">
      {projects.map((project, index) => (
        <Project key={index} title={project.title} img={project.img} link={project.link} repo={project.repo} />
      ))}
    </section>
  );
}

export default Portfolio;
