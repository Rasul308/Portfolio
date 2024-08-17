import {useState} from 'react';
import blueSquare from '../assets/imgs/bluesquare.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import lang from '../assets/imgs/lang.svg'
import Lang from './Lang'

const Header = () => {
  const { t } = useTranslation()
  const links = [
    {
      title: t('skills'),
      path: '/skills',
    },
    {
      title: t('projects'),
      path: '/projects',
    },
    {
      title: t('contacts'),
      path: '/contact',
    },
  ];

  const [langOpen, setLangOpen] = useState(false);

  const toggleLangDropdown = () => {
    setLangOpen(!langOpen);
  };

  return (
    <header className="header">
      <div className="header_wrapper">
        <div className="header_name">
          <img className="header_name-square" src={blueSquare} alt="" />
          <Link to={'/'}>{t('name')}</Link>
          <span>/</span>
          <div className="header_name-job">{t('job')}</div>
        </div>
        <ul className="header_list">
          {links.map((link, index) => (
            <li key={index} className="header_list-item">
              <Link to={link.path} className="header_list-link">
                {link.title}
              </Link>
            </li>
          ))}<button onClick={toggleLangDropdown} className='header_langBtn'>
          <img src={lang} alt="Language" />
        </button>
        {langOpen && <Lang setLangOpen={setLangOpen} />}
        </ul>
      </div>
    </header>
  );
};

export default Header;
