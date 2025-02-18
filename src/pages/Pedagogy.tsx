import { motion } from "framer-motion";
import pedPhoto from "../assets/ped_photo.jpg";
import degreePhoto from "../assets/degree_photo.jpg";
import { useTranslation } from "react-i18next";

const Pedagogy = () => {
  const { t } = useTranslation();

  const information = [
    { description: t("pedagogy.careerInformationItem_1") },
    {
      description: t("pedagogy.careerInformationItem_2"),
    },
    { description: t("pedagogy.careerInformationItem_3") },
    {
      description: t("pedagogy.careerInformationItem_4"),
    },
  ];

  const dualDegreeInformation = [
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
            <h1 className="text-2xl lg:text-5xl xl:text-6xl font-bold leading-none text-[#2d2753]">
              {/* Педагогика */}
              {t("pedagogy.title")}
            </h1>
            <p className="text-lg lg:text-xl mt-6 font-light text-[#333333]">
              {/* Магистратура по педагогике — это интенсивная программа, нацеленная
              на подготовку специалистов, обладающих глубокими знаниями в
              области образовательных технологий, педагогической психологии и
              управленческих навыков. Она сочетает в себе теоретическое обучение
              и практическое применение знаний, что обеспечивает высокую
              конкурентоспособность выпускников на рынке труда. Программа
              активно поддерживает научные исследования. Магистранты имеют
              возможность участвовать в конференциях, семинарах и научных
              проектах. Исследования могут быть направлены на различные аспекты
              педагогики, включая оценку эффективности образовательных
              технологий, изучение социальных факторов, влияющих на обучение, и
              разработку новых образовательных методик. */}
              {t("pedagogy.description")}
            </p>
          </div>
        </motion.div>
      </section>

      <section className="px-16 mt-4 text-center">
        <h2 className="text-2xl lg:text-5xl font-semibold text-[#2d2753] flex items-center justify-center gap-3">
          <i className="bx bx-info-circle text-[#cf1421] text-5xl"></i>
          {/* Возможности карьерного роста */}
          {t("pedagogy.careerTitle")}
        </h2>
        <h5 className="pt-10 text-xl lg:text-3xl font-semibold text-[#2d2753]">
          {/* Выпускники программы могут выбрать различные карьерные пути, включая: */}
          {t("pedagogy.careerSubTitle")}
        </h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {information.map((item, index) => (
            <motion.div
              key={index}
              className="p-12 rounded-lg flex justify-center items-center border border-gray-200 transition-all hover:shadow-2xl hover:border-[#cf1421]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <p className="font-semibold text-[18px] md:text-2xl text-[#2d2753] text-center">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-16 text-center mt-18">
        <h2 className="text-2xl lg:text-5xl font-semibold text-[#2d2753] flex items-center justify-center gap-3">
          <i className="bx bx-info-circle text-[#cf1421] text-5xl"></i>
          {/* Дополнительные возможности */}
          {t("pedagogy.opportunityTitle")}
        </h2>
        <h5 className="pt-10 text-xl lg:text-3xl font-semibold text-[#cf1421]">
          {/* Двойной диплом */}
          {t("pedagogy.opportunitySubTitle")}
        </h5>
        <p className="text-xl lg:text-2xl mt-6 font-extralight text-[#333333] leading-relaxed">
          {/* Одной из уникальных возможностей нашей программы является получение
          двойного диплома. Магистранты могут подать в университет Северной
          Америки, что позволяет им: */}
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
                  className={`bx ${item.icon} text-[#cf1421] text-3xl mr-3`}
                ></i>
                <p className="text-left font-medium md:text-xl text-[17px] text-[#2d2753]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <p className="text-xl lg:text-2xl mt-8 font-extralight text-[#333333] leading-relaxed pb-10">
          {/* Программа двойного диплома включает учебные модули, совместные проекты
          и другие формы сотрудничества. Это не только улучшает академическую
          подготовку магистров, но и делает их более привлекательными для
          работодателей на международном уровне. */}

          {t("pedagogy.opportunitySubDescription")}
        </p>
      </section>
    </>
  );
};

export default Pedagogy;
