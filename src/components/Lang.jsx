import React from 'react'
import en from "../assets/imgs/en.svg"
import uz from "../assets/imgs/uz.svg"
import ru from "../assets/imgs/ru.svg"
import { useTranslation } from 'react-i18next';

const Lang = ({setLangOpen}) => {
    const { i18n} = useTranslation()
    const changeLangEng = ()=>{
        i18n.changeLanguage("en")
        setLangOpen(false)
    }
    const changeLangRus = ()=>{
        i18n.changeLanguage("ru")
        setLangOpen(false)
    }
    const changeLangUzb = ()=>{
        i18n.changeLanguage("uz")
        setLangOpen(false)
    }
  return (
    <>
        <div className="lang">
            <div className="lang__wrapper">
                <div onClick={()=>{changeLangRus()}} className="lang__wrapper-lang borderbottom">
                    <img src={ru} alt="" />
                    <p>Русский</p>
                </div>
                <div onClick={()=>{changeLangUzb()}} className="lang__wrapper-lang borderbottom">
                    <img src={uz} alt="" />
                    <p>Oʻzbekcha</p>
                </div>
                <div onClick={()=>{changeLangEng()}} className="lang__wrapper-lang">
                    <img src={en} alt="" />
                    <p>English</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Lang