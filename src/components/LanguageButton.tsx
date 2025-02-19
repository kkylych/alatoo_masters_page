import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";

const LanguageButton: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLanguage === "ru" ? "en" : "ru";
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center p-1 sm:p-2 rounded transition-all hover:scale-110"
    >
      {currentLanguage === "ru" ? (
        <Flag
          code="RU"
          alt="Russian"
          style={{ width: "30px", height: "20px" }}
        />
      ) : (
        <Flag
          code="GB"
          alt="English"
          style={{ width: "30px", height: "20px" }}
        />
      )}
    </button>
  );
};

export default LanguageButton;
