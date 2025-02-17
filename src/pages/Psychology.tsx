import { motion } from "framer-motion";
import psyPhoto from "../assets/psy_photo.jpg";

const Psychology = () => {
  return (
    <>
      <section className="px-8 pt-20 pb-20">
        <motion.div
          key="psy-page"
          className="mx-auto px-8 lg:flex-row flex flex-col items-center gap-12"
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
                src={psyPhoto}
                alt=""
                className="drop-shadow-2xl w-full h-full object-cover rounded-lg hover:scale-102 transition-all"
              />
            </div>
          </div>

          <div className="text-center lg:text-left lg:w-1/2 sm:pb-12">
            <h1 className="text-2xl lg:text-5xl xl:text-6xl font-bold leading-none text-[#2d2753]">
              Психология
            </h1>
            <p className="text-lg lg:text-xl mt-6 font-light text-[#333333]">
              Магистерская программа «Психология» предоставляет магистрантам
              глубокое понимание психологических теорий и концепций, развивает
              практические навыки работы с данными и клиентами, поддерживает
              интердисциплинарный подход к исследованиям, поощряет участие в
              научных проектах и готовит к разнообразным карьерным возможностям
              в области психологии, включая психотерапию, образование,
              управление персоналом и исследования.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Psychology;
