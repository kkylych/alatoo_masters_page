import { motion, Variants } from "framer-motion";
import { useTranslation } from "react-i18next";

interface InformationItem {
  title: string;
  description: string;
}

const MastersInfo: React.FC = () => {
  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 },
  };

  const { t } = useTranslation();

  const information: InformationItem[] = [
    {
      title: t("mastersInfo.informationItemTitle_1"),
      description: t("mastersInfo.informationItemDescription_1"),
    },
    {
      title: t("mastersInfo.informationItemTitle_2"),
      description: t("mastersInfo.informationItemDescription_2"),
    },
    {
      title: t("mastersInfo.informationItemTitle_3"),
      description: t("mastersInfo.informationItemDescription_3"),
    },
  ];

  const documents: string[] = [
    t("mastersInfo.documentItem_1"),
    t("mastersInfo.documentItem_2"),
    t("mastersInfo.documentItem_3"),
    t("mastersInfo.documentItem_4"),
    t("mastersInfo.documentItem_5"),
  ];

  return (
    <div>
      <motion.section
        className="lg:pb-28 lg:pt-30 lg:flex-row flex flex-col items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        variants={sectionVariants}
      >
        <div className="px-8 mx-auto gap-12 text-center max-w-full overflow-hidden md:pt-10 pt-7 flex flex-col items-center">
          <h2 className="text-2xl lg:text-5xl font-semibold text-[var(--primary-color)] flex items-center justify-center gap-3">
            <i className="bx bx-info-circle text-[var(--secondary-color)] text-5xl"></i>
            {t("mastersInfo.informationTitle")}
          </h2>
          <div className="flex flex-col md:flex-row gap-6 mt-15 flex-wrap">
            {information.map((item, index) => (
              <motion.div
                key={index}
                className="flex-1 px-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="flex justify-center items-center flex-col p-12 rounded-lg border border-solid border-gray-200 mb-8 box-border md:h-60 transition-all duration-300 hover:shadow-2xl hover:border-[var(--secondary-color)]"
                  style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
                >
                  <p className="font-semibold text-2xl text-[var(--secondary-color)] transition-colors duration-300 hover:text-[var(--primary-color)]">
                    {item.title}
                  </p>
                  <p className="mt-4 text-xl font-light text-[var(--text-color)]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="lg:pb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        variants={sectionVariants}
      >
        <div className="container px-8 mx-auto text-center max-w-full overflow-hidden md:pt-10 pt-7 flex flex-col items-center">
          <h2 className="text-2xl lg:text-5xl font-semibold text-[var(--primary-color)] flex items-center justify-center gap-3">
            <i className="bx bxs-file-doc text-[var(--secondary-color)] text-5xl"></i>
            {t("mastersInfo.documentTitle")}
          </h2>
          <div className="flex flex-col md:flex-row mt-15 flex-wrap justify-center">
            {documents.map((item, index) => (
              <motion.div
                key={index}
                className="flex-1 px-3 min-w-[300px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div
                  className="flex justify-center items-center flex-col p-8 rounded-lg border border-solid border-gray-200 mb-8 box-border md:h-40 transition-all duration-300 hover:shadow-2xl hover:border-[var(--secondary-color)] bg-gray-100"
                  style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
                >
                  <p className="font-semibold text-2xl text-[var(--primary-color)] transition-colors duration-300 hover:text-[var(--secondary-color)]">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="lg:pb-20 w-full pt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        variants={sectionVariants}
      >
        <div className="container px-8 text-center mb-15 mx-auto max-w-full">
          <div
            className="group relative overflow-hidden bg-white px-8 pt-16 pb-12 shadow-xl ring-1 ring-gray-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl w-full rounded-lg border border-solid border-gray-200 hover:border-[var(--secondary-color)]"
            style={{ boxShadow: "0 10px 28px rgba(0,0,0,.08)" }}
          >
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 h-32 w-32 rounded-full  transition-all duration-700 group-hover:scale-[15] group-hover:bg-[var(--secondary-color)]"></span>

            <div className="relative z-10 mx-auto space-y-8">
              <motion.span
                className="grid h-24 w-24 place-items-center rounded-full bg-[var(--secondary-color)] mx-auto"
                whileHover={{ scale: 1.1 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-12 w-12 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                  />
                </svg>
              </motion.span>

              <h3 className="md:text-5xl font-bold text-[var(--primary-color)] text-3xl transition-colors duration-300 group-hover:text-white flex justify-center">
                {t("mastersInfo.warningTitle")}
              </h3>

              <div className="px-8 text-xl lg:text-2xl mt-6 font-light text-[var(--text-color)] leading-relaxed transition-colors duration-300 group-hover:text-white/90 max-w-2xl mx-auto">
                <p className="flex justify-center items-center">
                  {t("mastersInfo.warningDescription")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default MastersInfo;
