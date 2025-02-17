import { motion } from "framer-motion";
import lingPhoto from "../assets/ling_photo.jpg";

const Linguistics = () => {
  return (
    <>
      <section className="px-8 pt-20 pb-20">
        <motion.div
          key="ling-page"
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
                src={lingPhoto}
                alt=""
                className="drop-shadow-2xl w-full h-full object-cover rounded-lg hover:scale-102 transition-all"
              />
            </div>
          </div>

          <div className="text-center lg:text-left lg:w-1/2 sm:pb-12">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-[#2d2753]">
              Лингвистика
            </h1>
            <p className="text-lg lg:text-xl mt-6 font-light text-[#333333]">
              Направление Лингвистика нацелено на уникальную образовательную
              программу, которая обеспечивает студентам широкие знания и навыки
              в области языковедения и языкознания, перевода и межкультурной
              коммуникации. Наши выпускники могут работать в компаниях,
              разрабатывающих лингвистический софт: программы распознавания
              речи, автоматической обработки текста, автоматического перевода;
              участвовать в создании различных компьютерных словарей,
              справочников, энциклопедий, сайтов в Интернете; работать
              переводчиками или преподавателями. Наша цель — развивать у
              студентов критическое мышление, творческий подход к решению задач
              и способность к эффективной коммуникации на различных языках.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Linguistics;
