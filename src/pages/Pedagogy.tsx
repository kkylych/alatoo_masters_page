import { motion, Variants } from "framer-motion";
import pedPhoto from "../assets/ped_photo.webp";
import degreePhoto from "../assets/degree_photo.webp";
import { useTranslation } from "react-i18next";

interface InformationItem {
  description: string;
}

interface DualDegreeInformation {
  description: string;
  icon: string;
}

const Pedagogy: React.FC = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const { t } = useTranslation();

  const information: InformationItem[] = [
    { description: t("pedagogy.careerInformationItem_1") },
    {
      description: t("pedagogy.careerInformationItem_2"),
    },
    { description: t("pedagogy.careerInformationItem_3") },
    {
      description: t("pedagogy.careerInformationItem_4"),
    },
  ];

  const dualDegreeInformation: DualDegreeInformation[] = [
    { description: t("pedagogy.opportunityItem_1"), icon: "bxs-book-bookmark" },
    {
      description: t("pedagogy.opportunityItem_2"),
      icon: "bx-book-open",
    },
    {
      description: t("pedagogy.opportunityItem_3"),
      icon: "bxs-chat",
    },
    {
      description: t("pedagogy.opportunityItem_4"),
      icon: "bx-bulb",
    },
    {
      description: t("pedagogy.opportunityItem_5"),
      icon: "bxs-user-check",
    },
    {
      description: t("pedagogy.opportunityItem_6"),
      icon: "bx-text",
    },
  ];

  return (
    <>
      <section className="px-8 pt-20 pb-20">
        <motion.div
          key="ped-page"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="w-full h-[450px]">
            <img
              src={pedPhoto}
              alt=""
              className="drop-shadow-2xl w-full h-full object-cover rounded-lg hover:scale-102 transition-all"
            />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-2xl lg:text-5xl xl:text-6xl font-bold leading-none text-[var(--primary-color)]">
              {t("pedagogy.title")}
            </h1>
            <p className="text-lg lg:text-xl mt-6 font-light text-[var(--text-color)]">
              {t("pedagogy.description")}
            </p>
          </div>
        </motion.div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        variants={sectionVariants}
        className="px-16 mt-4 text-center"
      >
        <h2 className="text-2xl lg:text-5xl font-semibold text-[var(--primary-color)] flex items-center justify-center gap-3">
          <i className="bx bx-info-circle text-[var(--secondary-color)] text-5xl"></i>
          {t("pedagogy.careerTitle")}
        </h2>
        <h5 className="pt-10 text-xl lg:text-3xl font-semibold text-[var(--primary-color)]">
          {t("pedagogy.careerSubTitle")}
        </h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {information.map((item, index) => (
            <motion.div
              key={index}
              className="p-12 rounded-lg flex justify-center items-center border border-gray-200 transition-all hover:shadow-2xl hover:border-[var(--secondary-color)]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <p className="font-semibold text-[18px] md:text-2xl text-[var(--primary-color)] text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        variants={sectionVariants}
        className="px-16 text-center mt-18"
      >
        <h2 className="text-2xl lg:text-5xl font-semibold text-[var(--primary-color)] flex items-center justify-center gap-3">
          <i className="bx bx-info-circle text-[var(--secondary-color)] text-5xl"></i>
          {t("pedagogy.opportunityTitle")}
        </h2>
        <h5 className="pt-10 text-xl lg:text-3xl font-semibold text-[var(--secondary-color)]">
          {t("pedagogy.opportunitySubTitle")}
        </h5>
        <p className="text-xl lg:text-2xl mt-6 font-extralight text-[var(--text-color)] leading-relaxed">
          {t("pedagogy.opportunityDescription")}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-10">
          <div className="w-full h-[450px]">
            <img
              src={degreePhoto}
              alt=""
              className="drop-shadow-2xl w-full h-full object-cover rounded-lg hover:scale-102 transition-all"
            />
          </div>
          <div className="flex flex-col gap-4">
            {dualDegreeInformation.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center p-4 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <i
                  className={`bx ${item.icon} text-[var(--secondary-color)] text-3xl mr-3`}
                ></i>
                <p className="text-left font-medium md:text-xl text-[17px] text-[var(--primary-color)]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <p className="text-xl lg:text-2xl mt-8 font-extralight text-[var(--text-color)] leading-relaxed pb-10">
          {t("pedagogy.opportunitySubDescription")}
        </p>
      </motion.section>
    </>
  );
};

export default Pedagogy;
