import { motion } from "framer-motion";
import pedPhoto from "../assets/ped_photo.jpg";
import degreePhoto from "../assets/degree_photo.jpg";

const Pedagogy = () => {
  const information = [
    {
      description: "Консультирование в области образования",
    },
    {
      description:
        "Исследовательская деятельность в университетах и научных центрах",
    },
    {
      description: "Управление образовательными проектами и программами",
    },
    {
      description:
        "Работа в образовательных учреждениях (учителя, преподаватели, воспитатели)",
    },
  ];

  const dualDegreeInformation = [
    {
      description: "Получить два диплома",
      iconLink: (
        <i className="bx bxs-book-bookmark text-[#cf1421] text-3xl mr-3"></i>
      ),
    },
    {
      description: "Углубить свои знания в международных методах образования",
      iconLink: (
        <i className="bx bx-book-open text-[#cf1421] text-3xl mr-3"></i>
      ),
    },
    {
      description: "Расширить сеть профессиональных связей и культурный опыт",
      iconLink: <i className="bx bxs-chat text-[#cf1421] text-3xl mr-3"></i>,
    },
    {
      description: "Изучить новые педагогические практики и подходы",
      iconLink: <i className="bx bx-bulb text-[#cf1421] text-3xl mr-3"></i>,
    },
    {
      description: "Принять участие в международных исследовательских проектах",
      iconLink: (
        <i className="bx bxs-user-check text-[#cf1421] text-3xl mr-3"></i>
      ),
    },
    {
      description: "Развить языковые навыки и межкультурную компетенцию",
      iconLink: <i className="bx bx-text text-[#cf1421] text-3xl mr-3"></i>,
    },
  ];

  return (
    <>
      <section className="px-8 pt-20 pb-20">
        <motion.div
          key="ped-page"
          className="mx-auto px-8 lg:flex gap-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="lg:w-1/2 pt-5 pb-5">
            <div style={{ height: "450px" }}>
              <img
                src={pedPhoto}
                alt=""
                className="drop-shadow-2xl w-full h-full object-cover rounded-lg hover:scale-102 transition-all"
              />
            </div>
          </div>

          <div className="text-center lg:text-left lg:w-1/2 sm:pb-12">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-[#2d2753]">
              Педагогика
            </h1>
            <p className="text-lg lg:text-xl mt-6 font-light text-[#333333]">
              Магистратура по педагогике — это интенсивная программа, нацеленная
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
              разработку новых образовательных методик.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="px-8 mx-auto gap-12 text-center max-w-full overflow-hidden md:pt-10 pt-7">
        <div className="mx-auto px-8 gap-12">
          <h2 className="text-3xl lg:text-5xl font-semibold text-[#2d2753] flex items-center justify-center gap-3">
            <i className="bx bx-info-circle text-[#cf1421] text-5xl"></i>
            Возможности карьерного роста
          </h2>

          <h5 className="pt-10 text-xl lg:text-3xl font-semibold text-[#2d2753]">
            Выпускники программы могут выбрать различные карьерные пути,
            включая:
          </h5>
          <div className="flex flex-col md:flex-row gap-6 mt-15 flex-wrap">
            {information.map((item, index) => (
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
                  <p className="font-semibold text-2xl transition-colors duration-300 text-[#2d2753]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 text-center md:pt-17 pt-7">
        <div className="mx-auto px-8 gap-12">
          <h2 className="text-3xl lg:text-5xl font-semibold text-[#2d2753] flex items-center justify-center gap-3">
            <i className="bx bx-info-circle text-[#cf1421] text-5xl"></i>
            Дополнительные возможности
          </h2>

          <h5 className="pt-10 text-xl lg:text-3xl font-semibold text-[#cf1421]">
            Двойной диплом
          </h5>

          <p className="text-xl lg:text-2xl mt-6 font-extralight text-[#333333] leading-relaxed">
            Одной из уникальных возможностей нашей программы является получение
            двойного диплома. Магистранты могут подать в университет Северной
            Америки, что позволяет им:
          </p>

          <div className="lg:flex gap-12 items-center justify-center mt-10 pb-10 lg:pb-10">
            <div className="lg:w-1/2 pt-5 pb-5">
              <div style={{ height: "450px" }}>
                <img
                  src={degreePhoto}
                  alt=""
                  className="drop-shadow-2xl w-full h-full object-cover rounded-lg hover:scale-102 transition-all"
                />
              </div>
            </div>
            <div className="lg:w-1/2 flex flex-col gap-1">
              {dualDegreeInformation.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center p-4 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.iconLink}
                  <p className="text-left pl-3 font-medium text-xl text-[#2d2753]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          <p className="text-xl lg:text-2xl mt-4 font-extralight text-[#333333] leading-relaxed pb-10">
            Программа двойного диплома включает учебные модули, совместные
            проекты и другие формы сотрудничества. Это не только улучшает
            академическую подготовку магистров, но и делает их более
            привлекательными для работодателей на международном уровне.
          </p>
        </div>
      </section>
    </>
  );
};

export default Pedagogy;
