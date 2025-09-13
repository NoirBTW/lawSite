import "./Services.css";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const Services = () => {
  const [activeForm, setActiveForm] = useState(null);
  const services = [
    {
      id: "business",
      title: "Бизнес и корпоративное право",
      description: "Комплексное юридическое сопровождение бизнеса",
      services: [
        "Абонентское юридическое обслуживание бизнеса",
        "Представление интересов в Арбитражных судах",
        "Взыскание задолженности",
        "Юридическое сопровождение сделок с недвижимостью",
      ],
    },
    {
      id: "courts",
      title: "Судебное представительство",
      description: "Защита интересов в судах всех инстанций",
      services: [
        "Споры в Арбитражных судах любой категории и сложности",
        "Сопровождение в судах общей юрисдикции",
        "Гражданские споры любой сложности",
        "Представление интересов юридических лиц",
      ],
    },
    {
      id: "real-estate",
      title: "Недвижимость и земельное право",
      description:
        "Специализация на вопросах недвижимости и земельных участков",
      services: [
        "Юридическое сопровождение сделок с недвижимостью",
        "Сопровождение процедуры выдела земельных участков",
        "Проведение собраний пайщиков",
        "Регистрация вновь образованных участков",
        "Сопровождение земельных споров",
        "Выкуп земельных участков из муниципальной и государственной собственности",
      ],
    },
    {
      id: "specialized",
      title: "Специализированные услуги",
      description: "Узкопрофильная юридическая помощь",
      services: [
        "Сопровождение в процедуре вступления в наследство",
        "Помощь в разрешении вопросов по военным выплатам",
        "Льготы и страховки для военнослужащих",
        "Пожарный аудит",
      ],
    },
  ];

  const ConsultationForm = ({ title, onClose }) => {
    const [formData, setFormData] = useState({
      name: "",
      phone: "",
      message: "",
    });

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = (e) => {
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
            onClose();
          },
          (error) => {
            alert("Ошибка отправки: " + error.text);
          }
        );
      e.target.reset();
    };

    return (
      <div className="form-overlay" onClick={onClose}>
        <div className="form-modal" onClick={(e) => e.stopPropagation()}>
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
          <h3>{title}</h3>
          <form onSubmit={handleSubmit}>
            {/* Скрытое поле для передачи названия консультации */}
            <input type="hidden" name="service" value={title} />
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
                required
                pattern="^(\+7|8)\d{10}$"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Опишите вашу проблему</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Опишите вашу проблему или вопрос"
                required
              />
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  lineHeight: 1.2,
                }}
              >
                <input
                  type="checkbox"
                  required
                  id="privacy-checkbox"
                  style={{ margin: "13px", maxWidth: "13px" }}
                />
                Отмечая этот флажок, вы подтверждаете, что согласны с политикой
                конфиденциальности.
              </label>
            </div>
            <button type="submit" className="submit-btn">
              Получить консультацию
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="services-page">
      <div className="services-hero full-width-section">
        <div className="container">
          <h1>Наши услуги</h1>
          <p>
            Комплексное юридическое сопровождение бизнеса, судебное
            представительство и специализированные правовые услуги
          </p>
        </div>
      </div>

      <div className="services-content full-width-section">
        <div className="container">
          {services.map((category) => (
            <div key={category.id} className="service-category">
              <div className="category-header">
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </div>

              <div className="services-list">
                {category.services.map((service, index) => (
                  <div key={index} className="service-item">
                    <div className="service-icon">✓</div>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section full-width-section">
        <div className="container">
          <h2>Нужна консультация?</h2>
          <p>Оставьте заявку и наш юрист свяжется с вами в течение 15 минут</p>
          <button
            className="cta-buttonserv"
            onClick={() => setActiveForm("general")}
          >
            Получить консультацию
          </button>
        </div>
      </div>
      {/* Forms */}
      {activeForm === "general" && (
        <ConsultationForm
          title="Получить консультацию юриста"
          onClose={() => setActiveForm(null)}
        />
      )}

      {activeForm && activeForm !== "general" && (
        <ConsultationForm
          title={`Консультация: ${
            services.find((s) => s.id === activeForm)?.title
          }`}
          onClose={() => setActiveForm(null)}
        />
      )}
    </div>
  );
};

export default Services;
