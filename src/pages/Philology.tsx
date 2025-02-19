import { motion, Variants } from "framer-motion";
import philPhoto from "../assets/phil_photo.webp";
import { useTranslation } from "react-i18next";

const Philology: React.FC = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const { t } = useTranslation();

  return (
    <>
      <section className="px-8 pt-20 pb-20">
        <motion.div
          key="phil-page"
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
                src={philPhoto}
                alt=""
                className="drop-shadow-2xl w-full h-full object-cover rounded-lg hover:scale-102 transition-all"
              />
            </div>
          </div>

          <div className="text-center lg:text-left lg:w-1/2 sm:pb-12">
            <h1 className="text-2xl lg:text-5xl xl:text-6xl font-bold leading-none text-[#2d2753]">
              {t("philology.title")}
            </h1>
            <p className="text-lg lg:text-xl mt-6 font-light text-[#333333]">
              {t("philology.description")}
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Philology;
