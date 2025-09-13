import React from "react";
import "./Reviews.css";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Елена С.",
      text: "Чётко, профессионально, надежно, эффективно, компетентно.",
    },
    {
      id: 2,
      name: "Анастасия Д.",
      text: "Грамотная консультация, четкость действий и индивидуальный подход. Помогли эффективно решить нашу проблему. Благодарены команде специалистов за качественные юридические услуги.",
    },
    {
      id: 3,
      name: "Сергей М.",
      text: "Подробно ответили на мой вопрос, расписали план действий, четко сориентировали по цене. Буду с ними работать дальше.",
    },
    {
      id: 4,
      name: "Андрей О.",
      text: "Очень трудно найти грамотных специалистов, которые окажут квалифицированные юридические услуги, знаю это не понаслышке, поскольку являюсь индивидуальным предпринимателем. Спустя несколько лет поисков, удалось найти грамотных юристов, которые проконсультируют и помогут решить вопросы по экономическим спорам.",
    },
    {
      id: 5,
      name: "Александр К.",
      text: "Юридические услуги оказаны качественно. Специалисты проявили высокий профессионализм, грамотно разъяснили нюансы и оперативно подготовили документы. Внимательное отношение к клиенту и четкое следование договоренностям. Проделанная работа заслуживает высокой оценки.",
    },
  ];

  return (
    <div className="reviews-page">
      <div className="reviews-hero full-width-section">
        <div className="container">
          <h1>Отзывы наших клиентов</h1>
          <p>Реальные истории успеха и благодарности от доверителей</p>
        </div>
      </div>

      <div className="reviews-content full-width-section">
        <div className="container">

          <div className="reviews-grid">
            {reviews.map((review, index) => (
              <div key={index} className="review-card">
                <div className="review-header">
                  <div className="reviewer-info">
                    <h3>{review.name}</h3>
                  </div>
                  <div className="review-rating">
                    <div className="stars">★★★★★</div>
                  </div>
                </div>
                <div className="review-text">
                  <p>"{review.text}"</p>
                </div>
                <div className="review-footer">
                  <div className="review-date">{review.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
