import { motion } from "framer-motion";
import economsPhoto from "../assets/economs_photo.jpg";

const Economics = () => {
  return (
    <>
      <section className="px-8 pt-20 pb-20">
        <motion.div
          key="economics-page"
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
                src={economsPhoto}
                alt=""
                className="drop-shadow-2xl w-full h-full object-cover rounded-lg hover:scale-102 transition-all"
              />
            </div>
          </div>

          <div className="text-center lg:text-left lg:w-1/2 sm:pb-12">
            <h1 className="text-2xl lg:text-5xl xl:text-6xl font-bold leading-none text-[#2d2753]">
              Экономика
            </h1>
            <p className="text-lg lg:text-xl mt-6 font-light text-[#333333]">
              Эта программа дает ценный опыт в качественных и количественных
              исследованиях, а также готовит специалистов по экономическому{" "}
              <br />
              развитию и научных исследователей (Ph.D). Обучаясь здесь, можно
              получить двойной диплом. МУА заключил контракт с Университетом
              Клермон-Овернь (Франция) по программе Erasmus+, позволяя учиться 1
              год во Франции по стипендии и получить дипломы обоих вузов. Заявки
              принимаются от выпускников экономики, менеджмента, международных
              отношений и прикладной математики. Участвовать могут студенты с
              высокими академическими результатами за 1-й курс. Требуется
              уровень английского B2: TOEFL IBT 95 или IELTS 7.
            </p>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Economics;
