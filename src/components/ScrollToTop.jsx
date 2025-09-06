import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

/**
 * Компонент для автоматической прокрутки к началу страницы при смене маршрута
 *
 * Этот компонент решает проблему, когда пользователь переходит между страницами
 * и остается на том же месте прокрутки, что может быть неудобно для UX.
 *
 * Пример использования:
 * ```jsx
 * import ScrollToTop from './components/ScrollToTop';
 *
 * function App() {
 *   return (
 *     <Router>
 *       <div className="App">
 *         <ScrollToTop delay={100} smooth={true} />
 *         <Header />
 *         <Routes>
 *           <Route path="/" element={<Home />} />
 *           <Route path="/services" element={<Services />} />
 *         </Routes>
 *       </div>
 *     </Router>
 *   );
 * }
 * ```
 *
 * @param {Object} props - Свойства компонента
 * @param {number} [props.delay=0] - Задержка перед прокруткой в миллисекундах
 * @param {string[]} [props.excludePaths=[]] - Массив путей, для которых прокрутка не выполняется
 * @param {boolean} [props.smooth=true] - Использовать ли плавную прокрутку
 * @param {boolean} [props.debug=false] - Включить подробное логирование для диагностики
 * @returns {null} Компонент не рендерит ничего
 */
const ScrollToTop = ({
  delay = 0,
  excludePaths = [],
  smooth = true,
  debug = false,
} = {}) => {
  const { pathname } = useLocation();

  // Функция для логирования (только если включен debug режим)
  const log = useCallback(
    (message, ...args) => {
      if (debug) {
        console.log(message, ...args);
      }
    },
    [debug]
  );

  useEffect(() => {
    log("ScrollToTop: выполнение прокрутки для пути:", pathname);

    // Проверяем, не исключен ли текущий путь из автоматической прокрутки
    if (excludePaths.includes(pathname)) {
      log("ScrollToTop: путь исключен из прокрутки:", pathname);
      return;
    }

    // Функция для прокрутки к началу страницы
    const scrollToTop = () => {
      try {
        if (smooth) {
          // Используем современный API с плавной прокруткой
          log("ScrollToTop: использование плавной прокрутки");
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else {
          // Мгновенная прокрутка без анимации
          log("ScrollToTop: использование мгновенной прокрутки");
          window.scrollTo(0, 0);
        }

        // Проверяем успешность прокрутки
        setTimeout(() => {
          if (window.scrollY > 10) {
            log("ScrollToTop: повторная попытка прокрутки");
            window.scrollTo(0, 0);
          } else {
            log("ScrollToTop: прокрутка выполнена успешно");
          }
        }, 100);
      } catch (error) {
        // Fallback для браузеров, которые не поддерживают smooth behavior
        log("ScrollToTop: fallback to instant scroll", error);
        window.scrollTo(0, 0);
      }
    };

    // Для страницы Reviews добавляем небольшую задержку для надежности
    const effectiveDelay =
      pathname === "/reviews" ? Math.max(delay, 50) : delay;

    if (pathname === "/reviews" && effectiveDelay > delay) {
      log(
        "ScrollToTop: специальная задержка для страницы Reviews:",
        effectiveDelay,
        "ms"
      );
    }

    // Добавляем задержку, если она указана
    if (effectiveDelay > 0) {
      const timer = setTimeout(scrollToTop, effectiveDelay);
      return () => clearTimeout(timer);
    } else {
      // Выполняем прокрутку немедленно
      scrollToTop();
    }
  }, [pathname, delay, excludePaths, smooth, debug, log]);

  // Компонент не рендерит никакого UI
  return null;
};

export default ScrollToTop;
