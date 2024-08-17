import React from 'react';
import facebook from '../assets/imgs/facebook.png';
import x from '../assets/imgs/x.png';
import telegram from '../assets/imgs/telegram.png';
import instagram from '../assets/imgs/instagram.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className="footer">
      <div className="footer_container">
        <ul className="footer_container-list">
          <li className="footer_container-list-item">
            <a className='footer_container-list-item-link'
                    href="tel:+998997007770">
                {t('call')}
              </a>
            <a href='tel:+998997007770' className="footer_container-list-item-span">
              +998 99-700-7770
            </a>
          </li>
          <li className="footer_container-list-item">
            <Link className='footer_container-list-item-link'
                  to="/contact">
              {t('write')}
            </Link>
            <Link to="/contact" className="footer_container-list-item-span">
              rasabd308@gmail.com
            </Link>
          </li>
          <li className="footer_container-list-item">
          <Link className='footer_container-list-item-link'
                  to="/subscribe">
              {t('subscribe')}
            </Link>
            <ul className="footer_container-list-item-list">
              <li className="footer_container-list-item-list-item">
                <a
                  href="https://facebook.com/ytug308"
                  target="_blank"
                  className="footer_container-list-item-list-item-link">
                    <img src={facebook} alt="" className="footer_container-list-item-list-item-link-img" />
                   </a>
              </li>
              <li className="footer_container-list-item-list-item">
                <a
                  href="https://twitter.com/ytug308"
                  target="_blank"
                  className="footer_container-list-item-list-item-link">
                    <img src={x} alt="" className="footer_container-list-item-list-item-link-img" />
                   </a>
              </li>
              <li className="footer_container-list-item-list-item">
                <a
                  href="https://telegram.me/ytug308"
                  target="_blank"
                  className="footer_container-list-item-list-item-link">
                    <img src={telegram} alt="" className="footer_container-list-item-list-item-link-img" />
                   </a>
              </li>
              <li className="footer_container-list-item-list-item">
                <a
                  href="https://instagram.com/ytug308"
                  target="_blank"
                  className="footer_container-list-item-list-item-link">
                      <img src={instagram} alt="" className="footer_container-list-item-list-item-link-img" />
                    </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

