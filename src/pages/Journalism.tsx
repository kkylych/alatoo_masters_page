import { motion } from "framer-motion";
import journalPhoto from "../assets/journal_photo.jpg";

const Journalism = () => {
  const information = [
    {
      description: "Гибридная форма обучения",
    },
    {
      description: "Гибкий график занятий и возможность совмещать учебу с профессиональной деятельностью",
    },
    {
      description: "Возможность дальнейшего карьерного роста в сфере медиа коммуникаций, связей с общественностью и других",
    },
    {
      description: "Преподавание ведется полностью на английском языке, включая преподавателей-носителей английского языка",
    },
  ];

  return (
    <>
      <section className="px-8 pt-20 pb-20">
        <motion.div
          key="journal-page"
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
                src={journalPhoto}
                alt=""
                className="drop-shadow-2xl w-full h-full object-cover rounded-lg hover:scale-102 transition-all"
              />
            </div>
          </div>

          <div className="text-center lg:text-left lg:w-1/2 sm:pb-12">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-[#2d2753]">
              Журналистика
            </h1>
            <p className="text-lg lg:text-xl mt-6 font-light text-[#333333]">
              Программа магистратуры Журналистика (Медиа, искусственный
              интеллект и искусство) предоставляет широкие возможности, развивая
              профессиональные и исследовательские навыки в таких сферах как
              Prompt engineering, искусственный интеллект, журналистика данных,
              медиаисследования, медиаменеджмент и визуальные искусства.
              Программа также включает углубленное изучение менеджмента
              различных проектов, SMM marketing, targeting, создание креативного
              контента с помощью мультимедийных программ и современных
              медиатехнологий.
            </p>
          </div>
        </motion.div>
      </section>

      <div className="px-8 mx-auto gap-12 text-center max-w-full overflow-hidden md:pt-10 pt-7">
        <h2 className="text-3xl lg:text-5xl font-semibold text-[#2d2753] flex items-center justify-center gap-3">
          <i className="bx bx-info-circle text-[#cf1421] text-5xl"></i>
          Почему нужно выбирать нас?
        </h2>
        <div className="flex flex-col md:flex-row gap-6 mt-15 flex-wrap">
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
                <p className="font-semibold text-[21px] p-7 transition-colors duration-300 text-[#2d2753]">
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
