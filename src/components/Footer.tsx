import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="mt-8 bg-[#242424] text-white py-14 pt-20 px-8 md:px-25 flex flex-wrap justify-between drop-shadow-md gap-12 text-sm font-thin">
        <nav className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
          <h6 className="text-lg font-semibold mb-2">Образование</h6>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            Лицензии и свидетельства об аккредитации
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            Факультеты и кафедры
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            Система онлайн-курсов
          </Link>
          <Link to="#" className="block hover:text-gray-400">
            Библиотека
          </Link>
        </nav>
        <nav className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
          <h6 className="text-lg font-semibold mb-2">Исследования</h6>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            Институты
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            Исследовательские центры
          </Link>
          <Link to="#" className="block hover:text-gray-400">
            Лаборатории
          </Link>
        </nav>
        <nav className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
          <h6 className="text-lg font-semibold mb-2">Поступление</h6>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            Студенты граждан КР
          </Link>
          <Link to="#" className="block hover:text-gray-400">
            Иностранные студенты
          </Link>
        </nav>
        <nav className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
          <h6 className="text-lg font-semibold mb-2">Университетская жизнь</h6>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            Общественный организации
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            Достижения студентов
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            Жильё и питание
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            Спортивные клубы, спартакиады <br /> и соревнования
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            Клубы
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            Здоровье и медицина
          </Link>
          <Link to="#" className="block hover:text-gray-400">
            3D тур
          </Link>
        </nav>
        <nav className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
          <h6 className="text-lg font-semibold mb-2">О нас</h6>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            Об университете
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            Уставы и документы
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            Руководство
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            Структура
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            Вакансии
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            Объявления и контакты
          </Link>
          <Link to="#" className="block hover:text-gray-400">
            Новости и события
          </Link>
        </nav>

        <nav className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
          <h6 className="text-lg font-semibold mb-2">Департаменты</h6>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            Департамент образования и управление качеством
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            Институт повышении квалификации и инновации
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            Офис международных отношений
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            Офис по работе с выпускниками
          </Link>
          <Link to="#" className="block hover:text-gray-400">
            Студенческий отдел
          </Link>
        </nav>
      </footer>

      <footer className="bg-[#242424] text-white border-t border-gray-600 px-10 py-4 flex flex-wrap justify-between items-center">
        <aside className="flex items-center space-x-4 pb-3">
          <p>&copy; Ala-Too International University 2025</p>
        </aside>
        <nav className="flex space-x-6">
          <Link
            to="https://www.instagram.com/alatoo.edu.kg/"
            target="_blank"
            className="text-white hover:text-[#cf1421] text-2xl"
          >
            <i className="bx bxl-instagram"></i>
          </Link>
          <Link
            to="https://www.youtube.com/@aiutv1996"
            target="_blank"
            className="text-white hover:text-[#cf1421] text-2xl"
          >
            <i className="bx bxl-youtube"></i>
          </Link>
          <Link
            to="https://www.linkedin.com/school/alatoo-international-university/"
            target="_blank"
            className="text-white hover:text-[#cf1421] text-2xl"
          >
            <i className="bx bxl-linkedin-square"></i>
          </Link>
          <Link
            to="https://x.com/alatooedukg"
            target="_blank"
            className="text-white hover:text-[#cf1421] text-2xl"
          >
            <i className="bx bxl-twitter"></i>{" "}
          </Link>
          <Link
            to="https://vk.com/aiuedukg"
            target="_blank"
            className="text-white hover:text-[#cf1421] text-2xl"
          >
            <i className="bx bxl-vk"></i>{" "}
          </Link>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
