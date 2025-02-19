import { motion, Variants } from "framer-motion";
import mastersPhoto from "../assets/masters_photo.webp";
import MastersInfo from "./MastersInfo";
import { useTranslation } from "react-i18next";

const Masters: React.FC = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants: Variants = {
    hover: {
      scale: 1.1,
      backgroundColor: "#cf1421",
      transition: { duration: 0.15 },
    },
    tap: { scale: 0.95 },
    initial: { scale: 1, backgroundColor: "#2d2753" },
  };

  const { t } = useTranslation();

  return (
    <>
      <section className="px-8 pt-20 md:pt-30">
        <motion.div
          key="masters-page"
          className="mx-auto px-8 lg:flex-row flex flex-col items-center gap-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={sectionVariants}
        >
          <div className="text-center lg:text-left lg:w-1/2 sm:pb-12">
            <h1 className="text-2xl lg:text-5xl xl:text-6xl font-bold leading-none text-[#2d2753]">
              {t("masters.title")}
            </h1>
            <p className="text-xl lg:text-2xl mt-6 font-light text-[#333333]">
              {t("masters.description")}
            </p>
            <p className="mt-8 md:mt-12">
              <motion.button
                type="button"
                className="py-4 px-12 rounded text-white transition-all duration-300 tracking-wider"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                {t("masters.button")}
              </motion.button>
            </p>
          </div>

          <div className="lg:w-1/2 pt-5">
            <div style={{ height: "450px" }}>
              <img
                src={mastersPhoto}
                alt=""
                className="drop-shadow-2xl w-full h-full object-cover rounded-lg hover:scale-102 transition-all"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <MastersInfo />
    </>
  );
};

export default Masters;
