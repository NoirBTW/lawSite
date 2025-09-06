import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contacts.css";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4ws66fh",
        "template_hlekigs",
        e.target,
        "ehFVm_4xZV4UFvzro"
      )
      .then(
        () => {
          alert("Сообщение отправлено!");
        },
        (error) => {
          alert("Ошибка отправки: " + error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contacts-page">
      <div className="contacts-hero full-width-section">
        <div className="container">
          <h1>Контакты</h1>
          <p>Свяжитесь с нами любым удобным способом</p>
        </div>
      </div>

      <div className="contacts-content full-width-section">
        <div className="container">
          <div className="contacts-grid">
            <div className="contact-info">
              <h2>Контактная информация</h2>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h3>Адрес</h3>
                  <p>адрес</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h3>Телефон</h3>
                  <p>
                    <a href="tel:+79275423546">+7 (927) 542-35-46</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:pravo3400@gmail.com">pravo3400@gmail.com</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div className="contact-details">
                  <h3>Время работы</h3>
                  <p>
                    Пн-Пт: 9:00 - 18:00
                    <br />
                    Сб-Вс: 10:00 - 16:00
                  </p>
                </div>
              </div>
              <div className="company-info">
                <h3>Реквизиты компании</h3>
                <p>ЮРИДИЧЕСКОЕ СООБЩЕСТВО "ПРАВОВЕД"</p>
                <p>ОГРН: 1430204982</p>
                <p>ИНН: 32948298479</p>
                <p>КПП: 770201001</p>
              </div>
            </div>

            <div className="contact-form">
              <h2>Отправить сообщение</h2>
              <p>Заполните форму, и мы свяжемся с вами в ближайшее время</p>
              <form onSubmit={sendEmail}>
                <div className="form-group">
                  <label htmlFor="name">Имя *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Телефон *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="^(\+7|8)\d{10}$"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="service">Услуга</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    placeholder="Выберите услугу"
                  >
                    <option value="Семейное право">Семейное право</option>
                    <option value="Уголовное право">Уголовное право</option>
                    <option value="Гражданское право">Гражданское право</option>
                    <option value="Военное право">Военное право</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Сообщение</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Опишите вашу проблему или вопрос"
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="map-section full-width-section">
        <div className="container">
          <h2>Как нас найти</h2>
          <div className="map-placeholder">
            <div className="map-content">
              <h3>Карта</h3>
              <p>Здесь будет интерактивная карта с нашим местоположением</p>
              <p>адрес</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
