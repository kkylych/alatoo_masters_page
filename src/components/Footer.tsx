import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer:React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className="mt-8 bg-[#242424] text-white py-14 pt-20 px-8 md:px-25 flex flex-wrap justify-between drop-shadow-md gap-12 text-sm font-thin">
        <nav className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
          <h6 className="text-lg font-semibold mb-2">{t("footer.title_1")}</h6>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            {t("footer.title_1_item_1")}
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            {t("footer.title_1_item_2")}
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            {t("footer.title_1_item_3")}
          </Link>
          <Link to="#" className="block hover:text-gray-400">
            {t("footer.title_1_item_4")}
          </Link>
        </nav>
        <nav className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
          <h6 className="text-lg font-semibold mb-2">{t("footer.title_2")}</h6>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            {t("footer.title_2_item_1")}
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            {t("footer.title_2_item_2")}
          </Link>
          <Link to="#" className="block hover:text-gray-400">
            {t("footer.title_2_item_3")}
          </Link>
        </nav>
        <nav className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
          <h6 className="text-lg font-semibold mb-2">{t("footer.title_3")}</h6>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            {t("footer.title_3_item_1")}
          </Link>
          <Link to="#" className="block hover:text-gray-400">
            {t("footer.title_3_item_1")}
          </Link>
        </nav>
        <nav className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
          <h6 className="text-lg font-semibold mb-2">{t("footer.title_4")}</h6>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            {t("footer.title_4_item_1")}
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            {t("footer.title_4_item_2")}
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            {t("footer.title_4_item_3")}
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            {t("footer.title_4_item_4")}
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            {t("footer.title_4_item_5")}
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            {t("footer.title_4_item_6")}
          </Link>
          <Link to="#" className="block hover:text-gray-400">
            {t("footer.title_4_item_7")}
          </Link>
        </nav>
        <nav className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
          <h6 className="text-lg font-semibold mb-2">{t("footer.title_5")}</h6>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            {t("footer.title_5_item_1")}
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            {t("footer.title_5_item_2")}
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            {t("footer.title_5_item_3")}
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            {t("footer.title_5_item_4")}
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            {t("footer.title_5_item_5")}
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            {t("footer.title_5_item_6")}
          </Link>
          <Link to="#" className="block hover:text-gray-400">
            {t("footer.title_5_item_7")}
          </Link>
        </nav>

        <nav className="w-full sm:w-1/2 md:w-1/3 lg:w-auto">
          <h6 className="text-lg font-semibold mb-2">{t("footer.title_6")}</h6>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            {t("footer.title_6_item_1")}
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            {t("footer.title_6_item_2")}
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            {t("footer.title_6_item_3")}
          </Link>
          <Link to="#" className="block mb-2 hover:text-gray-400">
            {t("footer.title_6_item_4")}
          </Link>
          <Link to="#" className="block hover:text-gray-400">
            {t("footer.title_6_item_5")}
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
            className="text-white hover:text-[var(--secondary-color)] text-2xl"
          >
            <i className="bx bxl-instagram"></i>
          </Link>
          <Link
            to="https://www.youtube.com/@aiutv1996"
            target="_blank"
            className="text-white hover:text-[var(--secondary-color)] text-2xl"
          >
            <i className="bx bxl-youtube"></i>
          </Link>
          <Link
            to="https://www.linkedin.com/school/alatoo-international-university/"
            target="_blank"
            className="text-white hover:text-[var(--secondary-color)] text-2xl"
          >
            <i className="bx bxl-linkedin-square"></i>
          </Link>
          <Link
            to="https://x.com/alatooedukg"
            target="_blank"
            className="text-white hover:text-[var(--secondary-color)] text-2xl"
          >
            <i className="bx bxl-twitter"></i>{" "}
          </Link>
          <Link
            to="https://vk.com/aiuedukg"
            target="_blank"
            className="text-white hover:text-[var(--secondary-color)] text-2xl"
          >
            <i className="bx bxl-vk"></i>{" "}
          </Link>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
