import { motion } from "framer-motion";
import lawPhoto from "../assets/law_photo.jpg";

const Law = () => {
  return (
    <>
      <section className="px-8 pt-20 pb-20">
        <motion.div
          key="law-page"
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
                src={lawPhoto}
                alt=""
                className="drop-shadow-2xl w-full h-full object-cover rounded-lg hover:scale-102 transition-all"
              />
            </div>
          </div>

          <div className="text-center lg:text-left lg:w-1/2 sm:pb-12">
            <h1 className="text-2xl lg:text-5xl xl:text-6xl font-bold leading-none text-[#2d2753]">
              Юриспруденция
            </h1>
            <p className="text-lg lg:text-xl mt-6 font-light text-[#333333]">
              Программа Юриспруденция (Международное право и бизнес) предлагает
              комплексное изучение юридических аспектов международного бизнеса.
              В рамках обучения вы освоите ключевые вопросы, связанные с
              глобальными коммерческими операциями, технологическим и
              инвестиционным правом, а также углубитесь в международное
              публичное и частное право. Особое внимание уделяется практическим
              навыкам: студенты пишут научные статьи по актуальным темам
              бизнес-юриспруденции и разрабатывают диссертацию, отражающую
              современные вызовы международного права. Карьерные перспективы
              включают работу в международных компаниях, юридических фирмах,
              государственных учреждениях, а также в сфере консалтинга и
              предпринимательства.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Law;
