import { motion } from "framer-motion";
import interRelPhoto from "../assets/interRel_photo.jpg";

const InternationalRelations = () => {
  return (
    <>
      <section className="px-8 pt-20 pb-20">
        <motion.div
          key="international-relations-page"
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
                src={interRelPhoto}
                alt=""
                className="drop-shadow-2xl w-full h-full object-cover rounded-lg hover:scale-102 transition-all"
              />
            </div>
          </div>

          <div className="text-center lg:text-left lg:w-1/2 sm:pb-12">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none text-[#2d2753]">
              Международные отношения
            </h1>
            <p className="text-lg lg:text-xl mt-6 font-light text-[#333333]">
              Программа «Международные отношения» обеспечивает междисциплинарное
              исследование глобальной динамики с упором на такие ключевые
              области, как международная политика, международное развитие,
              глобальное управление, экономические отношения и исследования
              безопасности. Наша программа, основанная на ценностях
              многосторонности, прав человека и устойчивости, дает студентам
              знания и навыки, необходимые для успешной карьеры в дипломатии,
              политическом анализе, международном развитии, разрешении
              конфликтов и международном праве.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default InternationalRelations;
