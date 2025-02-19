import { motion, Variants } from "framer-motion";
import journalPhoto from "../assets/journal_photo.webp";
import { useTranslation } from "react-i18next";

interface InformationItem {
  description: string;
}

const Journalism: React.FC = () => {

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const { t } = useTranslation();

  const information : InformationItem[]= [
    {
      description: t("journalism.choiceItem_1"),
    },
    {
      description: t("journalism.choiceItem_2"),
    },
    {
      description: t("journalism.choiceItem_3"),
    },
    {
      description: t("journalism.choiceItem_4"),
    },
  ];

  return (
    <>
      <section className="px-8 pt-20 pb-20">
        <motion.div
          key="journal-page"
          className="mx-auto px-8 lg:flex-row flex flex-col items-center gap-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={sectionVariants}
        >
          <div className="lg:w-1/2 pt-5 pb-5">
            <div style={{ height: "450px" }}>
              <img
                src={journalPhoto}
                alt=""
                className="drop-shadow-2xl w-full h-full object-cover rounded-lg hover:scale-102 transition-all"
              />
            </div>
          </div>

          <div className="text-center lg:text-left lg:w-1/2 sm:pb-12">
            <h1 className="text-2xl lg:text-5xl xl:text-6xl font-bold leading-none text-[#2d2753]">
              {t("journalism.title")}
            </h1>
            <p className="text-lg lg:text-xl mt-6 font-light text-[#333333]">
              {t("journalism.description")}
            </p>
          </div>
        </motion.div>
      </section>

      <div className="px-8 mx-auto gap-12 text-center max-w-full overflow-hidden md:pt-10 pt-7">
        <h2 className="text-3xl lg:text-5xl font-semibold text-[#2d2753] flex items-center justify-center gap-3">
          <i className="bx bx-info-circle text-[#cf1421] text-5xl"></i>
          {t("journalism.choiceTitle")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-15 flex-wrap">
          {information.map((feature, index) => (
            <motion.div
              key={index}
              className="flex-1 px-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div
                className="flex justify-center items-center flex-col p-12 rounded-lg border border-solid border-gray-200 mb-8 box-border md:h-60 transition-all duration-300 hover:shadow-2xl hover:border-[#cf1421]"
                style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
              >
                <p className="font-semibold text-[21px] p-8 transition-colors duration-300 text-[#2d2753]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Journalism;
