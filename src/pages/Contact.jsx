import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import ArrowButton from "../components/ArrowButton";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation()
  const formRef = useRef();
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const form = formRef.current;

    container.classList.remove('active');
    form.style.opacity = 0;
    form.style.transform = 'translateY(-50px)';

    setTimeout(() => {
      form.style.transition = `opacity 0.6s ease-in-out, transform 0.6s ease-in-out`;
      form.style.opacity = 1;
      form.style.transform = 'translateY(0)';
      container.classList.add('active');
    }, 100);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="contact">
      <div className="contact_title">{t('contactTitle')}</div>
      <ArrowButton />
      <div className="contact_container" ref={containerRef}>
        <form ref={formRef} onSubmit={sendEmail}>
          <label>{t('contactText1')}</label>
          <input type="text" name="user_name" />
          <label>{t('contactText3')}</label>
          <input type="email" name="user_email" />
          <label>{t('contactText2')}</label>
          <textarea name="message" />
          <input type="submit" value={t('contactInput')} />
        </form>
      </div>
    </div>
  );
};

export default Contact;