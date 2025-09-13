import React, { useState } from "react";
import "./Home.css";
import emailjs from "emailjs-com";

const Home = () => {
  const [activeForm, setActiveForm] = useState(null);

  const services = [
    {
      id: "business",
      title: "Абонентское юридическое обслуживание бизнеса",
      description: "Комплексное правовое сопровождение вашего бизнеса",
      icon: "🏢",
    },
    {
      id: "arbitration",
      title: "Представление интересов в Арбитражных судах",
      description: "Споры любой категории и сложности",
      icon: "⚖️",
    },
    {
      id: "real-estate",
      title: "Юридическое сопровождение сделок с недвижимостью",
      description: "Безопасность ваших сделок с недвижимостью",
      icon: "🏠",
    },
    {
      id: "land",
      title: "Сопровождение процедуры выдела земельных участков",
      description:
        "Сельскохозяйственные участки, собрания пайщиков, земельные споры",
      icon: "🌾",
    },
    {
      id: "civil-courts",
      title: "Сопровождение в судах общей юрисдикции",
      description: "Граждан и юридических лиц любой категории и сложности",
      icon: "👥",
    },
    {
      id: "debt",
      title: "Взыскание задолженности",
      description: "Эффективное взыскание долгов через суд",
      icon: "💰",
    },
    {
      id: "inheritance",
      title: "Сопровождение в процедуре вступления в наследство",
      description: "Помощь в оформлении наследственных прав",
      icon: "📜",
    },
    {
      id: "military",
      title: "Помощь в разрешении вопросов по военным выплатам",
      description: "Льготы, страховки и военные выплаты",
      icon: "🎖️",
    },
    {
      id: "fire-audit",
      title: "Пожарный аудит",
      description: "Проверка соответствия требованиям пожарной безопасности",
      icon: "🔥",
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
              <label style={{ display: "flex", alignItems: "center", gap: "8px", lineHeight: 1.2 }}>
                <input
                  type="checkbox"
                  required
                  id="privacy-checkbox"
                  style={{ margin: "13px", maxWidth: "13px" }}
                />
                Отмечая этот флажок, вы подтверждаете, что согласны с политикой конфиденциальности.
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
    <div className="home">
      {/* Hero Section */}
      <section className="hero full-width-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1>ПРАВОВЕД</h1>
            <p className="hero-subtitle">
              <strong>ЮРИДИЧЕСКОЕ СООБЩЕСТВО</strong>
            </p>
            <button
              className="cta-button"
              onClick={() => setActiveForm("general")}
            >
              Получить срочную консультацию
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section full-width-section">
        <div className="container">
          <h2>УСЛУГИ</h2>
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button
                  className="service-btn"
                  onClick={() => setActiveForm(service.id)}
                >
                  Получить консультацию
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

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

export default Home;
