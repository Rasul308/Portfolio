import React, { useEffect, useRef } from 'react';
import html from "../assets/imgs/html.svg";
import css from "../assets/imgs/css.svg";
import scss from "../assets/imgs/scss.svg";
import js from "../assets/imgs/js.svg";
import react from "../assets/imgs/react.svg";
import redux from "../assets/imgs/redux.svg";
import { useTranslation } from 'react-i18next';
import ArrowButton from '../components/ArrowButton';

const Skills = () => {
  const containerRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    const container = containerRef.current;
    const items = container.querySelectorAll('.skills__wrapper-cards-card');

    items.forEach(item => {
      item.style.opacity = 0;
      item.style.transform = 'translateY(-50px)';
    });

    setTimeout(() => {
      items.forEach((item) => {
        const speed = item.getAttribute('data-speed') || 400;
        item.style.transition = `opacity ${speed / 1000}s ease-in-out, transform ${speed / 1000}s ease-in-out`;
        item.style.opacity = 1;
        item.style.transform = 'translateY(0)';
      });
    }, 100);
  }, []);

  return (
    <section id="skills" className="skills">
        <ArrowButton />
      <div className="skills__wrapper" ref={containerRef}>
        <h1 className="skills__wrapper-title">{t('Skills')}</h1>
        <div className="skills__wrapper-cards">
            <div className="skills__wrapper-cards-card" data-speed='400'>
                <div className="skills__wrapper-cards-card-skill">
                    <div className="skills__wrapper-cards-card-skill-title">
                      <img src={html}  className="skills__wrapper-cards-card-skill-title-img" />
                      <h3>HTML5</h3>
                    </div>
                </div>
              <p>{t('htmlText')}</p>
            </div>
            <div className="skills__wrapper-cards-card" data-speed='400'>
                <div className="skills__wrapper-cards-card-skill">
                    <div className="skills__wrapper-cards-card-skill-title">
                      <img src={css}  className="skills__wrapper-cards-card-skill-title-img" />
                      <h3>CSS3</h3>
                    </div>
                </div>
              <p>{t('cssText')}</p>
            </div>
            <div className="skills__wrapper-cards-card" data-speed='400'>
                <div className="skills__wrapper-cards-card-skill">
                    <div className="skills__wrapper-cards-card-skill-title">
                      <img src={scss}  className="skills__wrapper-cards-card-skill-title-img" />
                      <h3>SCSS</h3>
                    </div>
                </div>
              <p>{t('scssText')}</p>
            </div>
            <div className="skills__wrapper-cards-card" data-speed='400'>
                <div className="skills__wrapper-cards-card-skill">
                    <div className="skills__wrapper-cards-card-skill-title">
                      <img src={js}  className="skills__wrapper-cards-card-skill-title-img" />
                      <h3>Java Script</h3>
                    </div>
                </div>
              <p>{t('jsText')}</p>
            </div>
            <div className="skills__wrapper-cards-card" data-speed='400'>
                <div className="skills__wrapper-cards-card-skill">
                    <div className="skills__wrapper-cards-card-skill-title">
                      <img src={react}  className="skills__wrapper-cards-card-skill-title-img" />
                      <h3>REACT</h3>
                    </div>
                </div>
              <p>{t('reactText')}</p>
            </div>
            <div className="skills__wrapper-cards-card" data-speed='400'>
                <div className="skills__wrapper-cards-card-skill">
                    <div className="skills__wrapper-cards-card-skill-title">
                      <img src={redux}  className="skills__wrapper-cards-card-skill-title-img" />
                      <h3>REDUX</h3>
                    </div>
                </div>
              <p>{t('reduxText')}</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
