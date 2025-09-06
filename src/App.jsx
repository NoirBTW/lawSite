import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Reviews from "./pages/Reviews";
import Contacts from "./pages/Contacts";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* 
          Компонент ScrollToTop автоматически прокручивает страницу к началу 
          при переходе между маршрутами. Это улучшает UX, так как пользователь 
          всегда начинает просмотр новой страницы с начала.
          
          Параметры:
          - delay: 100ms - небольшая задержка для плавности
          - smooth: true - плавная прокрутка
          - excludePaths: [] - нет исключений
          - debug: true - включен режим отладки для диагностики
        */}
        <ScrollToTop smooth={true} delay={100} excludePaths={[]} debug={true} />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/reviews" element={<Reviews />} />
            {/* <Route path="/team" element={<Team />} /> */}
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
