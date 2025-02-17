import { motion } from "framer-motion";
import mangPhoto from "../assets/mang_photo.jpg";

const Management = () => {
  return (
    <>
      <section className="px-8 pt-20 pb-20">
        <motion.div
          key="management-page"
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
                src={mangPhoto}
                alt=""
                className="drop-shadow-2xl w-full h-full object-cover rounded-lg hover:scale-102 transition-all"
              />
            </div>
          </div>

          <div className="text-center lg:text-left lg:w-1/2 sm:pb-12">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-[#2d2753]">
              Менеджмент
            </h1>
            <p className="text-lg lg:text-xl mt-6 font-light text-[#333333]">
              Магистерская программа по Менеджменту (бизнес-аналитика)
              Международного университета Ала-Тоо предоставит вам все
              необходимые знания и навыки для успешной карьеры в сфере
              бизнес-аналитики. Программа включает комплексное сочетание
              технических, аналитических, бизнес- и коммуникационных
              компетенций, что позволит вам эффективно работать с данными,
              принимать обоснованные решения и разрабатывать стратегии для
              бизнеса. Обучение охватывает ключевые аспекты анализа данных,
              управления проектами, цифровой трансформации и бизнес-стратегий,
              готовя выпускников к востребованным позициям в ведущих компаниях.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Management;
