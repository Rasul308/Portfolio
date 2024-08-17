import React, { useEffect, useRef } from 'react';
import video1 from '../assets/imgs/antools.gif';
import video2 from '../assets/imgs/crypAppy.gif';
import video3 from '../assets/imgs/vrBusinessSolution.gif';
import ArrowButton from '../components/ArrowButton';
import { useTranslation } from 'react-i18next';

const Project = () => {
  const containerRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const container = containerRef.current;
    const items = container.querySelectorAll('.projects_container-item');

    items.forEach(item => {
      item.style.opacity = 0;
      item.style.transform = 'translateY(-50px)';
    });

    setTimeout(() => {
      items.forEach((item) => {
        const speed = item.hasAttribute('data-speed') ? item.getAttribute('data-speed') : 400;
        item.style.transition = `opacity ${speed / 1000}s ease-in-out, transform ${speed / 1000}s ease-in-out`;
        item.style.opacity = 1;
        item.style.transform = 'translateY(0)';
      });
    }, 100);
  }, []);

  const projects = [
    {
      title: t("antools"),
      text: t("antoolsDescription"),
      image: video1,
    },
    {
      title: t("crypAppy"),
      text: t("crypAppyDescription"),
      image: video2,
    },
    {
      title: t("vrBusinessSolution"),
      text: t("vrBusinessDescription"),
      image: video3,
    }
  ];

  return (
    <section id="projects" className="projects">
      <ArrowButton />
      <div className="projects_container" ref={containerRef}>
        <h2 className='projects_container-title'>{t("projects")}</h2>
        {projects.map((project, index) => (
          <div key={index} className="projects_container-item" data-speed={400 + index * 400}>
            <div className="projects_container-item-desc">
              <h3 className="projects_container-item-desc-title">{project.title}</h3>
              <p className="projects_container-item-desc-text">{project.text}</p>
            </div>
            <img src={project.image} alt={project.title} className="projects_container-item-img" />
          </div>
        ))}
         <p className='projects_container-githubLink'>
          {t('githubText')} <a target='_blank' rel="noopener noreferrer" href="https://github.com/Rasul308">GitHub</a>
        </p>
      </div>
    </section>
  );
};

export default Project;
