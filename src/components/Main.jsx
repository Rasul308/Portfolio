import React from 'react';
import facebook from '../assets/imgs/facebook.png';
import x from '../assets/imgs/x.png';
import telegram from '../assets/imgs/telegram.png';
import instagram from '../assets/imgs/instagram.png';
import myself from '../assets/imgs/myself.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation()
  const links = [
    {
      title: t('socials'),
      path: '/subscribe',
    },
    {
      title: t('projects'),
      path: '/projects',
    },
  ];
  return (
    <div className="main">
      <section id="about" className="about">
        <div className="about_container">
          <div className="about_container-desc">
            <img src={myself} className="about_container-desc-pfp" alt="" />
            <div className="about_container-desc-bio">
              <h1 className="about_container-desc-bio-name">{t('name')}</h1>
              <div className="about_container-desc-bio-arrow"></div>
              <h2 className="about_container-desc-bio-job">{t('job')}</h2>
            </div>
          </div>
          <div className="about_container-sm-buttons">
            <a href="https://facebook.me/ytug308" className="about_container-sm-buttons-a">
              <img src={facebook} alt="" className="about_container-sm-buttons-a-img" />
            </a>
            <a href="https://x.com/Ytug3008" className="about_container-sm-buttons-a">
              <img src={x} alt="" className="about_container-sm-buttons-a-img" />
            </a>
            <a href="https://t.me/ytug308" className="about_container-sm-buttons-a">
              <img src={telegram} alt="" className="about_container-sm-buttons-a-img" />
            </a>
            <a href="https://www.instagram.com/ytug308/?next=%2F" className="about_container-sm-buttons-a">
              <img src={instagram} alt="" className="about_container-sm-buttons-a-img" />
            </a>
          </div>
        </div>
      </section>
      <section id="home" className="desc">
        <div className="desc_container">
          <div className="desc_container-top">
          <h1 className="desc_container-h1">{t('hi')}</h1>
          <h2 className="desc_container-h2">{t('aboutMe')}</h2>
          </div>
          <div className="desc_container-btns">
          {links.map((link, index) => (
            <Link key={index} to={link.path} className="desc_container-btns-btn">
              {link.title}
            </Link>
          ))}
          </div>
          <p className="desc_container-p">
            <span className='desc_container-p-span1'>{t('desc1')}</span>
            <br /><br /> <span className='desc_container-p-span2'>{t('desc2')}</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Main;
