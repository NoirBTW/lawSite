import React from "react";
import "./Services.css";

const Services = () => {
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
          <button className="cta-buttonserv">Получить консультацию</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
