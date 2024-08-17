import React, { useEffect, useRef } from 'react';
import facebook from '../assets/imgs/facebook.png';
import x from '../assets/imgs/x.png';
import instagram from '../assets/imgs/instagram.png';
import telegram from '../assets/imgs/telegram.png'
import myself from '../assets/imgs/myself.png'
import ArrowButton from '../components/ArrowButton';
import { useTranslation } from 'react-i18next';

const Subscribe = () => {
  const { t } = useTranslation()
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const items = container.querySelectorAll('.subscribe_container-item');
    
    container.classList.remove('active');
    items.forEach(item => {
      item.style.opacity = 0;
      item.style.transform = 'translateY(-50px)';
    });

    setTimeout(() => {
      items.forEach(item => {
        const speed = item.hasAttribute('data-speed') ? item.getAttribute('data-speed') : 400;
        item.style.transition = `opacity ${speed / 1000}s ease-in-out, transform ${speed / 1000}s ease-in-out`;
        item.style.opacity = 1;
        item.style.transform = 'translateY(0)';
      });
      container.classList.add('active');
    }, 100);
  }, []);

  return (
    <div className="subscribe">
      <ArrowButton />
      <div className="subscribe_container" ref={containerRef}>
        <div className="subscribe_container-header" data-speed="400">
          <img src={myself} alt="" className="subscribe_container-header-img" />
          <div className="subscribe_container-header-text">
            <h2 className="subscribe_container-header-text-h2">{t('name')}</h2>
            <p className="subscribe_container-header-text-p">{t('job')}</p>
          </div>
        </div>
        <div className="subscribe_container-content">
          <div className="subscribe_container-item" data-speed="800">
            <a href="https://facebook.com/ytug308" className="subscribe_container-item-link">
              <img src={facebook} alt="" className="subscribe_container-item-img" />
              <p className="subscribe_container-item-p">{t('facebook')}</p>
            </a>
          </div>
          <div className="subscribe_container-item" data-speed="1200">
            <a href="https://x.com/Ytug3008" className="subscribe_container-item-link">
              <img src={x} alt="" className="subscribe_container-item-img" />
              <p className="subscribe_container-item-p">{t('twitter')}</p>
            </a>
          </div>
          <div className="subscribe_container-item" data-speed="1600">
            <a href="https://t.me/ytug308" className="subscribe_container-item-link">
              <img src={telegram} alt="" className="subscribe_container-item-img" />
              <p className="subscribe_container-item-p">{t('telegram')}</p>
            </a>
          </div>
          <div className="subscribe_container-item" data-speed="2000">
            <a href="https://www.instagram.com/ytug308/?next=%2F"  className="subscribe_container-item-link">
              <img src={instagram} alt="" className="subscribe_container-item-img" />
              <p className="subscribe_container-item-p">{t('instagram')}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;