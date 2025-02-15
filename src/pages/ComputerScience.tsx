import { motion } from "framer-motion";
import comsciPhoto from "../assets/comsci_photo.jpg";

const ComputerScience = () => {
  return (
    <>
      <section className="px-8 pt-20 pb-20">
        <motion.div
          key="computer-science-page"
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
                src={comsciPhoto}
                alt=""
                className="drop-shadow-2xl w-full h-full object-cover rounded-lg hover:scale-102 transition-all"
              />
            </div>
          </div>

          <div className="text-center lg:text-left lg:w-1/2 sm:pb-12">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-[#2d2753]">
              Информатика и вычислительная техника
            </h1>
            <p className="text-lg lg:text-xl mt-6 font-light text-[#333333]">
              Направление Информатики и вычислительной техники готовит
              специалистов, способных разрабатывать автоматизированные системы
              обработки информации с применением ИИ, сетевых технологий, баз
              данных и современных IT-решений. Обучение ведется на английском
              языке с использованием передовой исследовательской базы,
              позволяющей магистрантам реализовывать научные и прикладные
              проекты. Выпускники-магистры востребованы на высокооплачиваемых
              позициях в Кыргызстане и за рубежом.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default ComputerScience;
